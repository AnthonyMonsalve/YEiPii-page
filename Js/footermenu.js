function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}var acordeon = document.getElementById("acordeon-content"),
acordeonBody = [].concat(_toConsumableArray(document.querySelectorAll(".acordeon__body")));

function openMenu(element) {
  var parent = element.target.parentNode,
  lastChild = parent.lastElementChild,
  menu = lastChild.firstElementChild;

  acordeonBody.map(function (el) {return el.style.height = 0;});

  if (lastChild.clientHeight) {
    lastChild.style.height = 0;
  } else {
    var altoMenu = menu.clientHeight;
    lastChild.style.height = altoMenu + "px";
  }
}

function getTarget(e) {
  if (e.target.tagName === "DIV") {
    openMenu(e);
  }
}

acordeon.addEventListener("click", getTarget);