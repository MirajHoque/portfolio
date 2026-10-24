/* Runs before first paint so the correct theme is applied with no flash.
   Light is the default. Only a stored choice moves it to dark. */
(function () {
  // Scripting is available: the stylesheet uses this to enable effects that
  // would otherwise hide content from visitors without JavaScript.
  document.documentElement.classList.add('js');
  try {
    document.documentElement.dataset.theme =
      localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  } catch (e) { /* private mode: keep the default */ }
})();
