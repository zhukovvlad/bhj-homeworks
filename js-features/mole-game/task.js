function getHole(index) {
    let hole = document.getElementById("hole"+index);
    return hole;
  }
  
  let dead = document.getElementById('dead');
  let lost = document.getElementById('lost');
  
  for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    
    hole.onclick = function() {
      if (hole.className.includes('hole_has-mole')) {
        dead.textContent ++;
      } else {
        lost.textContent ++;
      }
      
      if (dead.textContent == 10) {
        alert("You won");
        dead.textContent = 0;
        lost.textContent = 0;
      };
    
      if (lost.textContent == 10) {
        alert("You lost");
        dead.textContent = 0;
        lost.textContent = 0;
      };
    }
  }