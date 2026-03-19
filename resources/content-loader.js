(function () {
  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o && o[k]; }, obj);
  }

  document.querySelectorAll('[data-content]').forEach(function (el) {
    var val = get(window.CONTENT, el.getAttribute('data-content'));
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-content-html]').forEach(function (el) {
    var val = get(window.CONTENT, el.getAttribute('data-content-html'));
    if (val !== undefined) el.innerHTML = val;
  });
})();
