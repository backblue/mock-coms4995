(function () {
  'use strict';
  var storageKey = 'mock-coms4995-dark-mode';
  var dark = false;
  try { dark = localStorage.getItem(storageKey) === 'true'; } catch (error) {}
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('dark-mode-toggle');
    if (!toggle) return;
    toggle.checked = dark;
    toggle.addEventListener('change', function () {
      document.documentElement.dataset.theme = toggle.checked ? 'dark' : 'light';
      try { localStorage.setItem(storageKey, String(toggle.checked)); } catch (error) {}
    });
  });
}());
