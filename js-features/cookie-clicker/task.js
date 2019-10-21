let begin = new Date().getTime();
let arr = [begin, 0];
const image = document.getElementById("cookie")
image.onclick = function() {
  let speed;
  document.getElementById("clicker__counter").textContent ++;
  
  if (document.getElementById("clicker__counter").textContent % 2 === 0) {
    image.width = image.width / 1.1;
    image.height = image.height / 1.1;
    arr[0] = new Date().getTime();
  } else {
    image.width = image.width * 1.1;
    image.height = image.height * 1.1;
    arr[1] = new Date().getTime();
  }
  speed = (1000 / Math.abs(arr[1] - arr[0])).toFixed(3);
  document.getElementById("clicker__rate").textContent = speed;
  console.log(arr);
}