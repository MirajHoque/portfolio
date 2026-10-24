# Portfolio — DevOps & Platform Engineer

A fast, dependency-free portfolio site. No build step, no framework, no npm install
to view it: plain HTML, CSS and JavaScript, plus a small amount of automation to keep
the security headers honest.

```
index.html            The whole page (all content lives here)
404.html              Not-found page
assets/css/styles.css Design tokens, layout, components
assets/js/main.js     Theme, navigation, scroll effects, form handling
assets/js/theme-init.js  Applies the saved theme before first paint
assets/img/           Favicon, social preview image
assets/files/         Your résumé PDF
scripts/              Header generation and link checking
.github/workflows/    CI checks and GitHub Pages deployment
```

## Run it locally

```bash
make serve      # http://localhost:8080
make check      # the same checks CI runs
make help       # everything available
```

No Make? `python3 -m http.server 8080` works just as well.

## Make it yours

Everything you need to change is listed here. Search for the quoted strings.

| What | Where | Search for |
|---|---|---|
| Your name | `index.html`, `site.webmanifest`, `assets/img/og-image.svg` | `Ashraful Hoque Miraj` |
| Job title and intro | `index.html` hero section | `I build cloud platforms` |
| Your domain | `index.html` meta tags, `robots.txt`, `sitemap.xml` | `example.com` |
| Project repository names | `index.html` projects section | `your-repo` |
| Email address | `index.html`, `assets/js/main.js` | `a.h.miraj2031@gmail.com` |
| Experience entries | `index.html` timeline section | `timeline-item` |
| Projects | `index.html` projects section | `project-title` |
| Proficiency rings | `index.html` skills section | `ring-item` |
| Proficiency bars | `index.html` skills section | `bar-item` |
| Expertise cards | `index.html` expertise section | `expertise-item` |
| Certifications | `index.html` certifications section | `cert-badge` |
| Résumé PDF | `assets/files/resume.pdf` | replace the file |
| Contact form endpoint | `index.html` form `action` | `your-form-id` |

### Skills and expertise

Two sections cover this ground and they do different jobs. **Skills** is the numbers:
rings for individual tools, bars for areas. **Expertise** is the words: one circle per
platform, saying what you actually do with it. The eight generic category cards that used
to close the Skills section were saying the same thing a third time, so the expertise grid
replaced them. Ask and I can put them back.

### Skill meters

Each ring and bar takes its value from a single `--pct` custom property in the markup,
and the visible number next to it. Change both together, or the label will disagree with
the drawing. Rings are for individual tools and are read one at a time; the bars share
one scale so the areas can be compared against each other, which is why they are sorted
high to low. Keep the ring count at six or fewer, and put the tools you actually want to
be hired for there.

A word on the numbers themselves: self-assigned percentages are soft evidence, and some
hiring managers discount them. That is why every meter carries a concrete caption
underneath, the years of hands-on use for rings and the specific tools for bars. Those
captions are doing the persuading. If you would rather not publish ratings at all, delete
the two `meters` blocks and the section still stands on the cards below them.

The experience timeline carries the real roles: Brillmark LLC, Cognitive Automation
Technologies and Akaar IT Limited. Entries alternate either side of a centre spine on
wide screens and collapse to a single left rail below 900px; the first entry gets the
filled marker via `class="timeline-item is-current"`, so move that class when you change
jobs. The bullet points under each role are placeholder achievements with invented figures,
and they now sit next to named employers. Replace the numbers with your own before the
site goes public.

The project cards and the three hero statistics are still placeholder text written for a
mid-to-senior DevOps engineer. Rewrite it with your own numbers. Concrete figures
("cut deploy time from 40 minutes to 6") read far better than adjectives, and hiring
managers scan for them.

After editing, regenerate the headers and re-check the links:

```bash
make csp
make check
```

### Social preview image

`assets/img/og-image.png` is what LinkedIn, Slack and X show when your link is shared.
Edit `assets/img/og-image.svg`, then re-render it:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --window-size=1200,630 \
  --screenshot="$PWD/assets/img/og-image.png" \
  "file://$PWD/assets/img/og-image.svg"
```

### Contact form

Out of the box the form validates input and then opens the visitor's mail client.
For real inbox delivery, create a free form endpoint (Formspree, Basin, Web3Forms),
paste the URL into the form's `action` attribute, and run `make csp` so the policy
allows it. The JavaScript then submits in the background with no page reload.

## Deploy

The repository ships with three hosting configurations. Pick one.

**GitHub Pages** — push to `main`. `.github/workflows/deploy.yml` publishes the site.
Enable it once under *Settings → Pages → Source: GitHub Actions*. Note that Pages
ignores `_headers`, so the security headers only apply on Netlify, Cloudflare Pages
or Vercel. For a project repository served from a subpath, the relative asset paths
already work; a custom domain or a `username.github.io` repository needs no changes.

**Netlify or Cloudflare Pages** — connect the repository, leave the build command
empty, publish directory `.`. Both read `_headers`; Netlify also reads `netlify.toml`.

**Vercel** — import the repository as a static project. `vercel.json` supplies the
headers and clean URLs.

### Custom domain

Point an `A`/`CNAME` record at your host, enable HTTPS, and update `example.com` in
the meta tags, `robots.txt` and `sitemap.xml`. Then resubmit the sitemap in
[Google Search Console](https://search.google.com/search-console).

## What CI checks

| Job | What it protects |
|---|---|
| `headers` | The generated headers match the current HTML. Editing the JSON-LD block without regenerating the policy hash fails here, not in a visitor's browser. |
| `html` | Valid, well-formed markup. |
| `links` | Every local file reference and in-page anchor resolves. |
| `lighthouse` | Performance, accessibility, best practices and SEO stay at or above 95. |

## Choices worth knowing about

- **No framework.** The page is a few tens of kilobytes and renders instantly. A
  portfolio that loads slowly undercuts the argument you are making on it.
- **No web fonts.** System fonts mean zero font requests, no layout shift and no
  third-party origin in the CSP.
- **Content Security Policy with no inline scripts.** Inline blocks that must stay
  inline (the structured-data JSON) are allow-listed by hash, generated by
  `scripts/generate-csp.py`.
- **Light by default, dark on request.** The page loads light regardless of the
  operating system setting; the toggle switches to dark and the choice is remembered
  in `localStorage`. To follow the visitor's OS instead, change the one line in
  `assets/js/theme-init.js` that reads the stored value.
- **Accessibility.** Semantic landmarks, a skip link, visible focus rings, labelled
  form fields with live error messages, `aria-expanded` on the menu, and full
  keyboard operation. Animations are disabled for visitors who ask for reduced motion.
- **Progressive enhancement.** With JavaScript disabled the page is still readable,
  navigable and the form still submits.
- **Structured data.** A `Person` schema block helps search engines associate the
  site with you rather than treating it as an anonymous page.

## Licence

Yours. Use it, change it, ship it.
