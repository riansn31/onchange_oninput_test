function doColor() {
  var canvas = document.getElementById("myCanvas");
  var colorinput = document.getElementById("colorPicker");
  var color = colorinput.value;
  canvas.style.backgroundColor = color;
}
function doSquare() {
  var canvas = document.getElementById("myCanvas");
  var rangeInput = document.getElementById("rangeInput");
  var size = rangeInput.value;
  var ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "";
  ctx.fillRect(50, 50, size, size);
}
