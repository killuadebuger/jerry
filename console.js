(() => {
  document.onselectstart = null;
  document.onmousedown = null;
  document.oncontextmenu = null;
  document.oncopy = null;
  document.oncut = null;
  document.onpaste = null;
  // override CSS that disables selection
  const s = document.createElement('style');
  s.textContent = `*{user-select:text !important; -webkit-user-select:text !important; -moz-user-select:text !important; -ms-user-select:text !important;}`;
  document.head.appendChild(s);
  // stop site handlers from cancelling right-click/copy by intercepting events early
  ['contextmenu','copy','cut','paste','selectstart','mousedown','mouseup'].forEach(ev =>
    document.addEventListener(ev, e => { e.stopImmediatePropagation(); }, { capture: true }));
  // also clear inline handlers on elements
  document.querySelectorAll('*').forEach(el => { el.onselectstart = null; el.onmousedown = null; el.oncontextmenu = null; });
  console.log('Selection/contextmenu/copy re-enabled on this page.');
})();
