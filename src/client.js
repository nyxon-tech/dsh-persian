// Source of the browser half. `node scripts/build.mjs` inlines the font and writes ../client.js.
window.__ModuleLoader__.load({
  id: '@nyxon-tech/dsh-persian',
  factory() {
    const PLUGIN_ID = '@nyxon-tech/dsh-persian';
    const FAMILY = 'DSH Persian';
    const FONT_URL = 'data:font/woff2;base64,__VAZIRMATN_WOFF2_BASE64__';

    // Arabic-script blocks plus ZWNJ and the directional marks; Latin text keeps the host font.
    const PERSIAN_RANGE = [
      'U+0600-06FF', 'U+0750-077F', 'U+0870-089F', 'U+08A0-08FF',
      'U+FB50-FDFF', 'U+FE70-FEFC', 'U+200C', 'U+200E-200F',
    ].join(', ');

    // Markdown roots carry hashed CSS-module classes whose local name contains "markdown".
    const MARKDOWN_ROOT = '[class*="markdown" i]';
    const DIRECTED_BLOCKS = 'ul, ol, li, blockquote, table';
    const STAMP = 'data-dsh-persian-dir';

    const css = `
@font-face {
  font-family: "${FAMILY}";
  src: url(${FONT_URL}) format("woff2");
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
  unicode-range: ${PERSIAN_RANGE};
}

/* The Persian face comes first; its unicode-range lets Latin text fall through to the host and user fonts. */
:root:root, body:is(body) {
  --dsw-font-family: "${FAMILY}", var(--dsh-font-family-text, var(--dsh-font-family-text-default)), var(--dsh-font-family-text-default);
  --dsw-font-family-brand: "Montserrat", "${FAMILY}", var(--dsh-font-family-text-default);
  --ds-font-family-code: "${FAMILY}", var(--dsh-font-family-code, var(--dsh-font-family-code-default)), var(--dsh-font-family-code-default);
}

/* Each paragraph takes its direction from its first strong letter: Persian flows right to left, English left to right. */
:where(p, li, h1, h2, h3, h4, h5, h6, dt, dd, td, th, caption, figcaption, summary, blockquote),
:where([class*="_bubble"], [class*="Bubble"], [data-lexical-editor] > *),
:where(textarea, input:not([type]), input[type="text"], input[type="search"], input[type="email"], input[type="url"]) {
  unicode-bidi: plaintext;
}

/* Code, paths, terminals and math always read left to right, isolated from the surrounding Persian text. */
:where(pre, code, kbd, samp, var, .katex, .md-code-block, .xterm, [class*="terminal" i], [class*="codeBlock" i]) {
  direction: ltr;
  unicode-bidi: isolate;
}
:where(pre, pre *, .md-code-block, .md-code-block *) {
  unicode-bidi: isolate;
  text-align: left;
}

/* Mirror Markdown lists, quotes, tables and task boxes when their content is right to left. */
:is(ul, ol)[${STAMP}]:dir(rtl) {
  padding-left: 0;
  padding-right: 18px;
}
:is(ul, ol) ol[${STAMP}]:dir(rtl) {
  padding-right: 0;
}
blockquote[${STAMP}]:dir(rtl) {
  border-left: 0;
  border-right: 2px solid var(--dsw-alias-label-caption);
  padding-left: 0;
  padding-right: 14px;
}
li[${STAMP}]:dir(rtl) > input[type="checkbox"] {
  margin: 0 0 0 8px;
}
table[${STAMP}]:dir(rtl) :is(th, td) {
  text-align: start;
}
`;

    /** Mark Markdown blocks with dir="auto" so the browser resolves their direction from their own text. */
    function stamp(element) {
      if (element.hasAttribute('dir') || element.closest(MARKDOWN_ROOT) === null) return;
      if (element.closest('pre, .md-code-block') !== null) return;
      element.setAttribute('dir', 'auto');
      element.setAttribute(STAMP, '');
    }

    function scan(node) {
      if (node.nodeType !== 1) return;
      if (node.matches(DIRECTED_BLOCKS)) stamp(node);
      for (const element of node.querySelectorAll(DIRECTED_BLOCKS)) stamp(element);
    }

    return {
      apply(ctx) {
        ctx.effect(() => {
          const tag = document.createElement('style');
          tag.dataset.plugin = PLUGIN_ID;
          tag.dataset.pluginCss = `${PLUGIN_ID}/persian.css`;
          tag.textContent = css;
          document.head.appendChild(tag);
          return () => {
            tag.remove();
          };
        }, 'dsh-persian: font and direction stylesheet');

        ctx.effect(() => {
          const observer = new MutationObserver((records) => {
            for (const record of records) {
              for (const node of record.addedNodes) scan(node);
            }
          });
          observer.observe(document.body, { childList: true, subtree: true });
          scan(document.body);
          return () => {
            observer.disconnect();
            for (const element of document.querySelectorAll(`[${STAMP}]`)) {
              element.removeAttribute('dir');
              element.removeAttribute(STAMP);
            }
          };
        }, 'dsh-persian: Markdown block direction');
      },
    };
  },
});
