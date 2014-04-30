// Main script

!(function (global) {
  global.onload = function () {
    var menuItems = document.querySelectorAll('#main_navigation li a');
    for (var i = 0, miLength = menuItems.length; i < miLength; i++) {
      if (global.location.href.indexOf(menuItems[i].href) > -1) {
        menuItems[i].parentNode.classList.add('active');
      }
    }
  };
})(this);