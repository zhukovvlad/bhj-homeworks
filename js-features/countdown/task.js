//this function creates new Date() object
function futureDate() {
    let out = document.getElementById("timer")
      .textContent
      .split(":")
      .map(item => Number(item));
    console.log(out);
    let now = new Date();
    console.log(now);
    let future = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()+out[0], now.getMinutes()+out[1], now.getSeconds()+out[2], 0);
    console.log(future);
    
    return future;
  }
  
  
  //this function adds zero in front of single digit
  function addZero(n) {
    if (n<10) {
      return "0"+n;
    } else {
      return n;
    }
  }
  
  
  let counter = setInterval(function getCount() {
    let now = new Date().getTime();
    console.log(now);
    let future = futureDate().getTime();
    console.log(future);
    let timeInterval = future - now;
    let hours = Math.floor(timeInterval / (1000 * 3600));
    let minutes = Math.floor((timeInterval % (1000 * 3600)) / (1000 * 60));
    let seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);
    console.log(hours, minutes, seconds);
    
    document.getElementById("timer").textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds);
    
    if (timeInterval < 0) {
      clearInterval(counter);
      alert("You Won");
      document.getElementById("timer").textContent = addZero(0) + ":" + addZero(0) + ":" + addZero(0);
    }
  }, 1000);
  
  counter;