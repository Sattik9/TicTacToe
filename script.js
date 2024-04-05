let turn = true;
const boxes = document.querySelectorAll(".box");

for (let elements of boxes) {
  elements.addEventListener("click", (evt) => {
    
    if (turn) {
      elements.innerHTML = "X";
      turn = false;
    } else {
      elements.innerHTML = "O";
      turn = true;
    }
    elements.disabled = true;
    
  });
}

function resetGame(){
         location.reload();
}