/* ============================================================================
   Portfolio — behaviour
   Vanilla JS, no dependencies. Every feature degrades gracefully:
   with JS disabled the page is still readable, navigable and submittable.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $  = function (sel, ctx) { return (ctx || document).querySelector(sel); };
  var $$ = function (sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); };
  // Translated string from i18n.js, or the English given here when it isn't loaded.
  var t = function (key, en) { return window.i18n ? window.i18n.t(key, en) : en; };
  var onLanguage = function (fn) { if (window.i18n) window.i18n.onChange(fn); };

  /* ------------------------------------------------------------ Theme */
  (function theme() {
    var toggle = $('#theme-toggle');
    if (!toggle) return;

    var meta = document.querySelector('meta[name="theme-color"]');

    function sync() {
      var isDark = document.documentElement.dataset.theme === 'dark';
      toggle.setAttribute('aria-pressed', String(isDark));
      toggle.setAttribute('aria-label', isDark ? t('theme.toLight', 'Switch to light theme') : t('theme.toDark', 'Switch to dark theme'));
      // Keep the browser chrome colour matching the page.
      if (meta) meta.setAttribute('content', isDark ? '#0b1220' : '#f6f8fb');
    }

    toggle.addEventListener('click', function () {
      var next = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) { /* ignore */ }
      sync();
    });

    sync();
    onLanguage(sync);
  })();

  /* ------------------------------------------------------- Mobile nav */
  (function mobileNav() {
    var toggle = $('#nav-toggle');
    var nav = $('#primary-nav');
    if (!toggle || !nav) return;

    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? t('menu.close', 'Close menu') : t('menu.open', 'Open menu'));
    }

    toggle.addEventListener('click', function () {
      setOpen(!nav.classList.contains('is-open'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (!nav.classList.contains('is-open')) return;
      if (!e.target.closest('#primary-nav') && !e.target.closest('#nav-toggle')) setOpen(false);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 720) setOpen(false);
    });

    onLanguage(function () { setOpen(nav.classList.contains('is-open')); });
  })();

  /* ------------------------------- Header state & scroll progress bar */
  (function scrollUi() {
    var header = $('#site-header');
    var bar = $('#scroll-progress');
    var top = $('#back-to-top');
    var ticking = false;

    function update() {
      var y = window.scrollY || document.documentElement.scrollTop;
      var max = document.documentElement.scrollHeight - window.innerHeight;

      if (header) header.classList.toggle('is-scrolled', y > 8);
      if (bar) bar.style.width = (max > 0 ? (y / max) * 100 : 0) + '%';
      if (top) top.hidden = y < 600;

      ticking = false;
    }

    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
    }, { passive: true });

    update();
  })();

  /* ------------------------------------- Active section in navigation */
  (function scrollSpy() {
    var links = $$('.nav-list a[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;

    var map = {};
    var sections = links.map(function (link) {
      var section = document.getElementById(link.getAttribute('href').slice(1));
      if (section) map[section.id] = link;
      return section;
    }).filter(Boolean);

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        links.forEach(function (l) { l.classList.remove('is-active'); });
        var active = map[entry.target.id];
        if (active) active.classList.add('is-active');
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  })();

  /* ------------------------------------------- Reveal-on-scroll blocks */
  (function reveal() {
    var items = $$('.reveal');
    if (!items.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        el.style.transitionDelay = Math.min(i * 60, 240) + 'ms';
        el.classList.add('is-visible');
        obs.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    items.forEach(function (el) { observer.observe(el); });
  })();

  /* ------------------------------------------- Expertise icon draw-in */
  // Measure each stroke so CSS can draw it; the reveal above triggers it.
  if (!reduceMotion) {
    $$('.expertise-icon svg > *').forEach(function (shape) {
      if (shape.getTotalLength) shape.style.setProperty('--len', Math.ceil(shape.getTotalLength()) + 2);
    });
  }

  /* ------------------------------------------------------- Skill meters */
  (function meters() {
    var groups = $$('.meters');
    if (!groups.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      groups.forEach(function (el) { el.classList.add('is-shown'); });
      return;
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-shown');
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.35 });

    groups.forEach(function (el) { observer.observe(el); });
  })();

  /* --------------------------------------------- Animated hero counters */
  (function counters() {
    var nodes = $$('[data-count-to]');
    if (!nodes.length) return;

    if (reduceMotion || !('IntersectionObserver' in window)) return; // static text already correct

    function run(el) {
      var target = parseFloat(el.dataset.countTo);
      var decimals = parseInt(el.dataset.decimals || '0', 10);
      var suffix = el.dataset.suffix || '';
      var duration = 1200;
      var start = null;

      function frame(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / duration, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = (target * eased).toFixed(decimals) + suffix;
        if (p < 1) window.requestAnimationFrame(frame);
      }
      window.requestAnimationFrame(frame);
    }

    var observer = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        run(entry.target);
        obs.unobserve(entry.target);
      });
    }, { threshold: 0.5 });

    nodes.forEach(function (n) { observer.observe(n); });
  })();

  /* ------------------------------------------- Hero terminal typing replay */
  (function terminal() {
    var code = $('.terminal-body code');
    var cursor = code && $('.cursor', code);
    if (!cursor || reduceMotion || !('IntersectionObserver' in window)) return; // static text already correct

    // Replay the markup already in the HTML, so the commands live in one place:
    // the visible terminal is the first scene, each <template> after it another.
    var pre = code.parentNode;
    var scenes = [code.innerHTML]
      .concat($$('template.terminal-scene', pre.parentNode).map(function (t) { return t.innerHTML; }))
      .map(function (html) { return html.replace('<span class="cursor"></span>', '').split('\n'); });

    // Hold the box size so the page doesn't jump; in em so it follows the responsive font size.
    pre.style.minHeight = pre.offsetHeight / parseFloat(window.getComputedStyle(pre).fontSize) + 'em';
    function clear() {
      code.textContent = '';
      code.appendChild(cursor);
    }
    clear();

    // Every step goes through later(), which parks the animation while the
    // terminal is off screen or the tab is hidden, and picks it up on return.
    var visible = false, pending = null;
    function active() { return visible && !document.hidden; }
    function later(fn, ms) {
      window.setTimeout(function () { if (active()) fn(); else pending = fn; }, ms);
    }
    function resume() {
      if (!pending || !active()) return;
      var fn = pending;
      pending = null;
      fn();
    }

    function play(s, i) {
      var lines = scenes[s];
      if (i === lines.length) {
        if (scenes.length === 1) return; // a single scene plays once
        // Hold the finished scene, then clear and run the next one.
        later(function () {
          clear();
          later(function () { play((s + 1) % scenes.length, 0); }, 300);
        }, 3000);
        return;
      }
      if (i) code.insertBefore(document.createTextNode('\n'), cursor);
      var line = document.createElement('span');
      line.innerHTML = lines[i];
      code.insertBefore(line, cursor);

      // Output lines appear whole; blank lines give a beat before the next command.
      if (!$('.c-prompt', line)) {
        later(function () { play(s, i + 1); }, lines[i] ? 110 : 350);
        return;
      }

      // A command: show the prompt, then type everything after it.
      var walker = document.createTreeWalker(line, NodeFilter.SHOW_TEXT);
      var nodes = [], texts = [];
      while (walker.nextNode()) {
        var node = walker.currentNode;
        if (node.parentNode.classList.contains('c-prompt')) continue;
        nodes.push(node);
        texts.push(node.nodeValue);
        node.nodeValue = '';
      }

      var n = 0, c = 0;
      (function type() {
        if (n === nodes.length) { later(function () { play(s, i + 1); }, 400); return; }
        if (c === texts[n].length) { n++; c = 0; type(); return; }
        nodes[n].nodeValue += texts[n].charAt(c++);
        later(type, 30 + Math.random() * 40);
      })();
    }

    var started = false;
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible && !started) {
        started = true;
        later(function () { play(0, 0); }, 400);
      } else {
        resume();
      }
    }, { threshold: 0.4 }).observe(pre);
    document.addEventListener('visibilitychange', resume);
  })();

  /* -------------------------------------------------------- Contact form */
  (function contactForm() {
    var form = $('#contact-form');
    if (!form) return;

    var status = $('#form-status');
    var fields = [
      { input: $('#name'),    error: $('#name-error'),    key: 'form.errName',    message: 'Please tell me your name.' },
      { input: $('#email'),   error: $('#email-error'),   key: 'form.errEmail',   message: 'Please enter a valid email address.' },
      { input: $('#message'), error: $('#message-error'), key: 'form.errMessage', message: 'Please write a short message.' }
    ];

    function validate(field) {
      var input = field.input;
      if (!input) return true;
      var ok = input.checkValidity() && input.value.trim().length > 0;
      if (input.id === 'message') ok = ok && input.value.trim().length >= 10;

      input.setAttribute('aria-invalid', String(!ok));
      if (field.error) {
        field.error.textContent = ok ? '' : (input.id === 'message' && input.value.trim().length
          ? t('form.errShort', 'A little more detail, please (10 characters or more).')
          : t(field.key, field.message));
        field.error.hidden = ok;
      }
      return ok;
    }

    fields.forEach(function (field) {
      if (!field.input) return;
      field.input.addEventListener('blur', function () { validate(field); });
      field.input.addEventListener('input', function () {
        if (field.input.getAttribute('aria-invalid') === 'true') validate(field);
      });
    });

    form.addEventListener('submit', function (e) {
      var valid = fields.map(validate).every(Boolean);

      if (!valid) {
        e.preventDefault();
        var firstBad = fields.filter(function (f) {
          return f.input && f.input.getAttribute('aria-invalid') === 'true';
        })[0];
        if (firstBad) firstBad.input.focus();
        if (status) { status.textContent = t('form.fix', 'Please fix the highlighted fields.'); status.className = 'form-status is-error'; }
        return;
      }

      // Endpoint not configured yet: fall back to the visitor's mail client.
      var action = form.getAttribute('action') || '';
      if (action.indexOf('your-form-id') !== -1) {
        e.preventDefault();
        var subject = encodeURIComponent('Portfolio enquiry from ' + $('#name').value.trim());
        var body = encodeURIComponent($('#message').value.trim() + '\n\n— ' + $('#name').value.trim() + ' (' + $('#email').value.trim() + ')');
        window.location.href = 'mailto:a.h.miraj2031@gmail.com?subject=' + subject + '&body=' + body;
        if (status) { status.textContent = t('form.opening', 'Opening your email client…'); status.className = 'form-status'; }
        return;
      }

      // Configured endpoint: submit in the background so the page never reloads.
      if (!window.fetch) return; // let the browser POST normally
      e.preventDefault();

      var button = form.querySelector('button[type="submit"]');
      if (button) { button.disabled = true; button.textContent = t('form.sending', 'Sending…'); }
      if (status) { status.textContent = ''; status.className = 'form-status'; }

      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      }).then(function (res) {
        if (!res.ok) throw new Error('Request failed');
        form.reset();
        if (status) { status.textContent = t('form.thanks', 'Thanks — your message is on its way. I usually reply within a day.'); status.className = 'form-status is-success'; }
      }).catch(function () {
        if (status) {
          status.innerHTML = t('form.failed', 'Something went wrong. Email me directly at <a href="mailto:a.h.miraj2031@gmail.com">a.h.miraj2031@gmail.com</a>.');
          status.className = 'form-status is-error';
        }
      }).finally(function () {
        if (button) { button.disabled = false; button.textContent = t('form.send', 'Send message'); }
      });
    });
  })();

  /* ----------------------------------------------------- Footer year */
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
