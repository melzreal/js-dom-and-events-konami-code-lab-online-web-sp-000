const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]
let pressed = 0;

function init() {
  document.body.addEventListener('keydown', function(e){

  const key = parseInt(e.detail || e.which);
  if (key === code[pressed]) {
    pressed++;
    if (pressed.length === code.length) {
      alert("Holeee!");
      let index = 0;
    }
  } else {
    index = 0;
  }
});
}
