/* ============================================================================
   Portfolio — translations
   English lives in the HTML, so the page is complete without this file.
   Elements opt in with one of:
     data-i18n="key"                 replace the text
     data-i18n-html="key"            replace the markup (trusted strings below)
     data-i18n-attr="attr:key; ..."  replace attributes
   Switching back to English restores what the HTML shipped with.
   Tool, product and command names stay in English in every language.
   ========================================================================== */
(function () {
  'use strict';

  var LANGS = { en: 'English', ja: '日本語', es: 'Español', bn: 'বাংলা' };
  var MAIL = '<a href="mailto:a.h.miraj2031@gmail.com">a.h.miraj2031@gmail.com</a>';

  var STRINGS = {
    ja: {
      'meta.title': 'Ashraful Hoque Miraj — DevOps／プラットフォームエンジニア',
      'a11y.skip': 'メインコンテンツへスキップ',
      'a11y.top': 'ページの先頭へ戻る',
      'lang.label': '言語',
      'nav.label': 'メインナビゲーション',
      'nav.skills': 'スキル',
      'nav.expertise': '専門分野',
      'nav.contact': 'お問い合わせ',
      'theme.title': 'テーマを切り替え',
      'theme.toLight': 'ライトテーマに切り替え',
      'theme.toDark': 'ダークテーマに切り替え',
      'menu.open': 'メニューを開く',
      'menu.close': 'メニューを閉じる',

      'hero.title': '<span class="accent">止まらない</span>クラウド基盤を構築します。',
      'hero.lede': 'コミットから本番環境までの道筋に責任を持ち、常にスムーズに保ちます。AWS と Azure にまたがるオーケストレーション、Infrastructure as Code、CI/CD、オブザーバビリティ、セキュリティを、高速・安全に、そして夜間の呼び出しが鳴らないように設計・運用します。',
      'hero.book': 'ミーティングを予約',
      'stat.uptime': '稼働率を維持',
      'stat.deploy': 'デプロイの高速化',
      'stat.cost': 'クラウドコスト削減',

      'skills.kicker': 'スキル',
      'skills.title': 'ツールボックス',
      'skills.sub': '自己評価による習熟度と、その裏付けとなる経験年数です。ツールは目的を達成するための手段にすぎません。ここに挙げたのは、私が最もよく使うものです。',
      'skills.core': '主要ツール',
      'skills.depth': '分野別の習熟度',
      'ring.4daily': '4年 · 日常的に使用',
      'ring.3prod': '3年 · 本番環境',
      'ring.2prod': '2年 · 本番環境',
      'bar.iac': 'Infrastructure as Code',
      'bar.cicd': 'CI/CD',
      'bar.containers': 'コンテナとオーケストレーション',
      'bar.obs': 'オブザーバビリティと SRE',
      'bar.cloud': 'クラウドプラットフォーム',
      'bar.security': 'セキュリティとテスト',
      'bar.securityMeta': 'DAST · Locust · 最小権限',

      'exp.kicker': '専門分野',
      'exp.title': '私の専門分野',
      'exp.sub': '日々担っている責任と、それぞれへの取り組み方です。',
      'exp.cloud': 'クラウドアーキテクチャ',
      'exp.cloudDesc': 'AWS と Azure にまたがるアカウント、ネットワーク、IAM（EC2、ECS、S3、RDS、Lambda、AKS）を、最初のデプロイから最小権限で設計します。',
      'exp.iac': 'Infrastructure as Code',
      'exp.iacDesc': 'Terraform と Pulumi で再利用可能なモジュールとリモートステートを活用し、plan はアプリケーションコードと同じようにレビューします。',
      'exp.containers': 'コンテナ化',
      'exp.containersDesc': '軽量な Dockerfile、バージョン管理されたイメージ、プライベートレジストリにより、テストしたものをそのまま本番で動かします。',
      'exp.orch': 'オーケストレーション',
      'exp.orchDesc': 'Deployment、Service、Ingress を使ったコンテナワークロードのデプロイ、スケーリング、運用。',
      'exp.cicd': 'CI/CD パイプライン',
      'exp.cicdDesc': 'GitHub Actions と Azure DevOps によるビルド・リリースパイプライン。誰かがポータルを操作しなくても、マージするだけでリリースされる仕組みです。',
      'exp.obs': 'オブザーバビリティとオンコール',
      'exp.obsDesc': 'Prometheus、Grafana、Loki によるメトリクス、ログ、ダッシュボード。そして、ユーザーが実際に感じる症状をもとに発報するアラート。',
      'exp.sec': 'セキュリティと負荷テスト',
      'exp.secDesc': 'パイプラインに組み込んだ DAST スキャンと、ユーザーより先に限界点を見つける Locust の負荷テスト。',
      'exp.linux': 'Linux と自動化',
      'exp.linuxDesc': 'シェルスクリプト、プロセス管理、ネットワーク、本番サーバーの日常的な運用管理。',

      'contact.kicker': 'お問い合わせ',
      'contact.title': 'インフラについて話しましょう',
      'contact.sub': '採用、業務委託、あるいは深夜2時にクラスタで困っているときも。届いたメッセージにはすべて目を通します。',
      'contact.email': 'メール',
      'contact.note': '通常1日以内に返信します。ダッカ（UTC+6）を拠点としており、ヨーロッパや米国の業務時間にも対応できます。',
      'form.name': 'お名前',
      'form.email': 'メールアドレス',
      'form.message': 'メッセージ',
      'form.send': '送信する',
      'form.sending': '送信中…',
      'form.errName': 'お名前を入力してください。',
      'form.errEmail': '有効なメールアドレスを入力してください。',
      'form.errMessage': '簡単なメッセージをご記入ください。',
      'form.errShort': 'もう少し詳しくご記入ください（10文字以上）。',
      'form.fix': '入力内容をご確認ください。',
      'form.opening': 'メールアプリを開いています…',
      'form.thanks': 'ありがとうございます。メッセージを送信しました。通常1日以内に返信します。',
      'form.failed': 'エラーが発生しました。' + MAIL + ' まで直接メールでご連絡ください。',
      'footer.email': 'メール'
    },

    es: {
      'meta.title': 'Ashraful Hoque Miraj — Ingeniero DevOps y de Plataformas',
      'a11y.skip': 'Saltar al contenido principal',
      'a11y.top': 'Volver arriba',
      'lang.label': 'Idioma',
      'nav.label': 'Navegación principal',
      'nav.skills': 'Habilidades',
      'nav.expertise': 'Especialidades',
      'nav.contact': 'Contacto',
      'theme.title': 'Cambiar tema',
      'theme.toLight': 'Cambiar al tema claro',
      'theme.toDark': 'Cambiar al tema oscuro',
      'menu.open': 'Abrir menú',
      'menu.close': 'Cerrar menú',

      'hero.title': 'Construyo plataformas en la nube que <span class="accent">no se caen</span>.',
      'hero.lede': 'Me encargo del camino desde el commit hasta producción, y lo mantengo despejado. Orquestación, infraestructura como código, CI/CD, observabilidad y seguridad en AWS y Azure, pensadas para ser rápidas, seguras y con guardias tranquilas.',
      'hero.book': 'Reservar una reunión',
      'stat.uptime': 'disponibilidad mantenida',
      'stat.deploy': 'despliegues más rápidos',
      'stat.cost': 'reducción de costes en la nube',

      'skills.kicker': 'Habilidades',
      'skills.title': 'La caja de herramientas',
      'skills.sub': 'Nivel autoevaluado, con los años de experiencia detrás de cada número. Las herramientas son un medio, no un fin: estas son las que más uso.',
      'skills.core': 'Herramientas principales',
      'skills.depth': 'Nivel por área',
      'ring.4daily': '4 años · a diario',
      'ring.3prod': '3 años · producción',
      'ring.2prod': '2 años · producción',
      'bar.iac': 'Infraestructura como código',
      'bar.cicd': 'CI/CD',
      'bar.containers': 'Contenedores y orquestación',
      'bar.obs': 'Observabilidad y SRE',
      'bar.cloud': 'Plataformas en la nube',
      'bar.security': 'Seguridad y pruebas',
      'bar.securityMeta': 'DAST · Locust · mínimo privilegio',

      'exp.kicker': 'Especialidades',
      'exp.title': 'Mis especialidades',
      'exp.sub': 'De qué me encargo en el día a día y cómo abordo cada parte.',
      'exp.cloud': 'Arquitectura en la nube',
      'exp.cloudDesc': 'Cuentas, redes e IAM en AWS y Azure &mdash; EC2, ECS, S3, RDS, Lambda y AKS &mdash; con mínimo privilegio desde el primer despliegue.',
      'exp.iac': 'Infraestructura como código',
      'exp.iacDesc': 'Terraform y Pulumi con módulos reutilizables, estado remoto y planes revisados como código de aplicación.',
      'exp.containers': 'Contenedorización',
      'exp.containersDesc': 'Dockerfiles ligeros, imágenes versionadas y registros privados, para que lo que corre en producción sea exactamente lo que se probó.',
      'exp.orch': 'Orquestación',
      'exp.orchDesc': 'Despliegue, escalado y operación de cargas de trabajo en contenedores con Deployments, Services e Ingress.',
      'exp.cicd': 'Pipelines de CI/CD',
      'exp.cicdDesc': 'Pipelines de build y release en GitHub Actions y Azure DevOps, configurados para que un merge se publique solo, sin que nadie tenga que hacer clic en un portal.',
      'exp.obs': 'Observabilidad y guardias',
      'exp.obsDesc': 'Métricas, logs y dashboards con Prometheus, Grafana y Loki, y alertas que saltan ante los síntomas que realmente notan los usuarios.',
      'exp.sec': 'Seguridad y pruebas de carga',
      'exp.secDesc': 'Escaneos DAST en el pipeline y pruebas de carga con Locust que encuentran el punto de quiebre antes que los usuarios.',
      'exp.linux': 'Linux y automatización',
      'exp.linuxDesc': 'Scripting en shell, gestión de procesos, redes y administración diaria de servidores en producción.',

      'contact.kicker': 'Contacto',
      'contact.title': 'Hablemos de infraestructura',
      'contact.sub': 'Contratación, proyectos por encargo o un clúster que falla a las 2 de la madrugada: leo todo lo que llega aquí.',
      'contact.email': 'Correo',
      'contact.note': 'Tiempo de respuesta habitual: menos de un día. Con base en Daca (UTC+6), con disponibilidad que se solapa con el horario de Europa y EE. UU.',
      'form.name': 'Nombre',
      'form.email': 'Correo electrónico',
      'form.message': 'Mensaje',
      'form.send': 'Enviar mensaje',
      'form.sending': 'Enviando…',
      'form.errName': 'Por favor, indica tu nombre.',
      'form.errEmail': 'Introduce una dirección de correo válida.',
      'form.errMessage': 'Escribe un mensaje breve.',
      'form.errShort': 'Un poco más de detalle, por favor (10 caracteres o más).',
      'form.fix': 'Revisa los campos marcados.',
      'form.opening': 'Abriendo tu cliente de correo…',
      'form.thanks': 'Gracias, tu mensaje está en camino. Suelo responder en menos de un día.',
      'form.failed': 'Algo salió mal. Escríbeme directamente a ' + MAIL + '.',
      'footer.email': 'Correo'
    },

    bn: {
      'meta.title': 'Ashraful Hoque Miraj — DevOps ও প্ল্যাটফর্ম ইঞ্জিনিয়ার',
      'a11y.skip': 'মূল কনটেন্টে যান',
      'a11y.top': 'উপরে ফিরে যান',
      'lang.label': 'ভাষা',
      'nav.label': 'প্রধান নেভিগেশন',
      'nav.skills': 'দক্ষতা',
      'nav.expertise': 'বিশেষজ্ঞতা',
      'nav.contact': 'যোগাযোগ',
      'theme.title': 'থিম পরিবর্তন করুন',
      'theme.toLight': 'লাইট থিমে যান',
      'theme.toDark': 'ডার্ক থিমে যান',
      'menu.open': 'মেনু খুলুন',
      'menu.close': 'মেনু বন্ধ করুন',

      'hero.title': 'আমি এমন ক্লাউড প্ল্যাটফর্ম তৈরি করি, যা <span class="accent">সবসময় সচল থাকে</span>।',
      'hero.lede': 'কমিট থেকে প্রোডাকশন পর্যন্ত পুরো পথের দায়িত্ব আমার, আর সেই পথ আমি সবসময় পরিষ্কার রাখি। AWS ও Azure জুড়ে অর্কেস্ট্রেশন, ইনফ্রাস্ট্রাকচার অ্যাজ কোড, CI/CD, অবজারভেবিলিটি ও সিকিউরিটি, যা দ্রুত, নিরাপদ এবং অন-কলের ঝামেলামুক্ত।',
      'hero.book': 'মিটিং বুক করুন',
      'stat.uptime': 'আপটাইম বজায় রাখা',
      'stat.deploy': 'দ্রুততর ডিপ্লয়মেন্ট',
      'stat.cost': 'ক্লাউড খরচ হ্রাস',

      'skills.kicker': 'দক্ষতা',
      'skills.title': 'টুলবক্স',
      'skills.sub': 'নিজের মূল্যায়নে দক্ষতার মাত্রা, প্রতিটি সংখ্যার পেছনে অভিজ্ঞতার বছরসহ। টুল কেবল লক্ষ্যে পৌঁছানোর মাধ্যম; এগুলোই আমি সবচেয়ে বেশি ব্যবহার করি।',
      'skills.core': 'মূল টুলস',
      'skills.depth': 'ক্ষেত্রভিত্তিক দক্ষতা',
      'ring.4daily': '৪ বছর · প্রতিদিন',
      'ring.3prod': '৩ বছর · প্রোডাকশন',
      'ring.2prod': '২ বছর · প্রোডাকশন',
      'bar.iac': 'ইনফ্রাস্ট্রাকচার অ্যাজ কোড',
      'bar.cicd': 'CI/CD',
      'bar.containers': 'কন্টেইনার ও অর্কেস্ট্রেশন',
      'bar.obs': 'অবজারভেবিলিটি ও SRE',
      'bar.cloud': 'ক্লাউড প্ল্যাটফর্ম',
      'bar.security': 'সিকিউরিটি ও টেস্টিং',
      'bar.securityMeta': 'DAST · Locust · ন্যূনতম প্রিভিলেজ',

      'exp.kicker': 'বিশেষজ্ঞতা',
      'exp.title': 'আমার বিশেষজ্ঞতা',
      'exp.sub': 'প্রতিদিন আমি যেসব দায়িত্ব পালন করি, এবং প্রতিটি কাজে আমার দৃষ্টিভঙ্গি।',
      'exp.cloud': 'ক্লাউড আর্কিটেকচার',
      'exp.cloudDesc': 'AWS ও Azure জুড়ে অ্যাকাউন্ট, নেটওয়ার্কিং ও IAM &mdash; EC2, ECS, S3, RDS, Lambda ও AKS &mdash; প্রথম ডিপ্লয়মেন্ট থেকেই ন্যূনতম প্রিভিলেজ নীতিতে।',
      'exp.iac': 'ইনফ্রাস্ট্রাকচার অ্যাজ কোড',
      'exp.iacDesc': 'Terraform ও Pulumi দিয়ে পুনর্ব্যবহারযোগ্য মডিউল, রিমোট স্টেট, আর অ্যাপ্লিকেশন কোডের মতোই রিভিউ করা প্ল্যান।',
      'exp.containers': 'কন্টেইনারাইজেশন',
      'exp.containersDesc': 'হালকা Dockerfile, ভার্সনযুক্ত ইমেজ ও প্রাইভেট রেজিস্ট্রি, যাতে প্রোডাকশনে ঠিক সেটাই চলে যা টেস্ট করা হয়েছে।',
      'exp.orch': 'অর্কেস্ট্রেশন',
      'exp.orchDesc': 'Deployment, Service ও Ingress দিয়ে কন্টেইনারভিত্তিক ওয়ার্কলোড ডিপ্লয়, স্কেল ও পরিচালনা।',
      'exp.cicd': 'CI/CD পাইপলাইন',
      'exp.cicdDesc': 'GitHub Actions ও Azure DevOps-এ বিল্ড ও রিলিজ পাইপলাইন, এমনভাবে সাজানো যে মার্জ করলেই রিলিজ হয়ে যায়; কাউকে পোর্টালে ক্লিক করতে হয় না।',
      'exp.obs': 'অবজারভেবিলিটি ও অন-কল',
      'exp.obsDesc': 'Prometheus, Grafana ও Loki দিয়ে মেট্রিকস, লগ ও ড্যাশবোর্ড, আর এমন অ্যালার্ট যা ব্যবহারকারীরা আসলে যে সমস্যা টের পান তার ভিত্তিতেই বাজে।',
      'exp.sec': 'সিকিউরিটি ও লোড টেস্টিং',
      'exp.secDesc': 'পাইপলাইনে DAST স্ক্যান, আর Locust লোড টেস্ট যা ব্যবহারকারীদের আগেই সিস্টেমের সীমা খুঁজে বের করে।',
      'exp.linux': 'Linux ও অটোমেশন',
      'exp.linuxDesc': 'শেল স্ক্রিপ্টিং, প্রসেস ম্যানেজমেন্ট, নেটওয়ার্কিং এবং প্রোডাকশন সার্ভারের দৈনন্দিন পরিচালনা।',

      'contact.kicker': 'যোগাযোগ',
      'contact.title': 'চলুন ইনফ্রাস্ট্রাকচার নিয়ে কথা বলি',
      'contact.sub': 'নিয়োগ, কন্ট্রাক্ট, কিংবা রাত ২টায় কোনো ক্লাস্টারে আটকে গেছেন? এখানে আসা প্রতিটি বার্তা আমি পড়ি।',
      'contact.email': 'ইমেইল',
      'contact.note': 'সাধারণত এক দিনের মধ্যে উত্তর দিই। ঢাকায় (UTC+6) থাকি, ইউরোপ ও যুক্তরাষ্ট্রের কর্মঘণ্টার সাথেও স্বচ্ছন্দে কাজ করতে পারি।',
      'form.name': 'নাম',
      'form.email': 'ইমেইল',
      'form.message': 'বার্তা',
      'form.send': 'বার্তা পাঠান',
      'form.sending': 'পাঠানো হচ্ছে…',
      'form.errName': 'অনুগ্রহ করে আপনার নাম লিখুন।',
      'form.errEmail': 'অনুগ্রহ করে একটি সঠিক ইমেইল ঠিকানা দিন।',
      'form.errMessage': 'অনুগ্রহ করে একটি ছোট বার্তা লিখুন।',
      'form.errShort': 'আরেকটু বিস্তারিত লিখুন (অন্তত ১০টি অক্ষর)।',
      'form.fix': 'চিহ্নিত ঘরগুলো ঠিক করুন।',
      'form.opening': 'আপনার ইমেইল অ্যাপ খোলা হচ্ছে…',
      'form.thanks': 'ধন্যবাদ, আপনার বার্তা পাঠানো হয়েছে। সাধারণত এক দিনের মধ্যে উত্তর দিই।',
      'form.failed': 'কিছু একটা সমস্যা হয়েছে। সরাসরি ' + MAIL + ' ঠিকানায় ইমেইল করুন।',
      'footer.email': 'ইমেইল'
    }
  };

  var root = document.documentElement;
  var current = 'en';
  var listeners = [];

  // Remember the English each element shipped with, so it can be restored.
  var entries = [];
  function collect(selector, read) {
    Array.prototype.forEach.call(document.querySelectorAll(selector), read);
  }
  collect('[data-i18n]', function (el) {
    entries.push({ el: el, key: el.dataset.i18n, en: el.textContent });
  });
  collect('[data-i18n-html]', function (el) {
    entries.push({ el: el, key: el.dataset.i18nHtml, en: el.innerHTML, html: true });
  });
  collect('[data-i18n-attr]', function (el) {
    el.dataset.i18nAttr.split(';').forEach(function (pair) {
      var parts = pair.split(':');
      if (parts.length !== 2) return;
      var attr = parts[0].trim();
      entries.push({ el: el, key: parts[1].trim(), attr: attr, en: el.getAttribute(attr) || '' });
    });
  });
  var englishTitle = document.title;

  function t(key, en) {
    var dict = STRINGS[current];
    return (dict && dict[key]) || en;
  }

  var picker = document.getElementById('lang-select');

  function apply(lang) {
    current = LANGS[lang] ? lang : 'en';
    root.lang = current;
    entries.forEach(function (e) {
      var value = t(e.key, e.en);
      if (e.attr) e.el.setAttribute(e.attr, value);
      else if (e.html) e.el.innerHTML = value;
      else e.el.textContent = value;
    });
    document.title = t('meta.title', englishTitle);
    if (picker) picker.value = current;
    listeners.forEach(function (fn) { fn(current); });
  }

  // Shared with main.js for the strings it writes itself (form messages, button labels).
  window.i18n = {
    t: t,
    onChange: function (fn) { listeners.push(fn); }
  };

  var saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* private mode: keep English */ }
  if (saved && saved !== 'en') apply(saved);

  if (picker) {
    picker.value = current;
    picker.addEventListener('change', function () {
      apply(picker.value);
      try { localStorage.setItem('lang', current); } catch (e) { /* ignore */ }
    });
  }
})();
