$(document).on("click touchend", ".gallery-imageholder", function() {
  var content = window.getComputedStyle(this, null).getPropertyValue("list-style-image");
  src = content.slice(4, -1).replace(/"/g, "");
  lity(src);
});
