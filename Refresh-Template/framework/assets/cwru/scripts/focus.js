(function () {
  var active = document.createElement('pre');
  document.body.appendChild(active);
  active.tabindex = -1;
  with (active.style) { // warning: `with` I know what I'm doing!
    position = 'fixed';
    padding = '2px';
    bottom = right = '20px';
    margin = 0;
    fontSize = 12;
    color = '#fff';
    background = '#0a304e';
    whiteSpace = 'pre-wrap';
    maxWidth = '95%';
  }

  var lastActive = null;
  var showActive = function () {
    var el = document.activeElement;
    var html = '';
    var attrs = el.attributes;
    var i = 0;

    if (el !== lastActive && el !== active) {
      for (; i < attrs.length; i++) {
        html += ' ' + attrs[i].name + '="' + attrs[i].value + '"';
      }

      active.textContent = '<' + el.nodeName.toLowerCase() + html + '>';
      lastActive = el;
    }

    requestAnimationFrame(showActive);
  };

  showActive();
})();