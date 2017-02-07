$(function() {
  test();
});

function test() {
  var F = this.declaredClass + "._containerSelect(): ";
  console.debug(F,"Starting");
  $("#blue").html("ABCD");
  console.debug(F,"End ");
}
