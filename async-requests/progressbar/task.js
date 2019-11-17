let message = document.forms[0]; 
let prog = document.getElementById('progress');
console.log(message);

message.addEventListener('submit', (e) => {
  e.preventDefault();
  //console.log("It's working!");
  let formData = new FormData(message);
  //console.log(formData);
  let request = new XMLHttpRequest();

  request.onprogress = function(event) {
    console.log(event.loaded);
    prog.value = event.loaded / 100000000;
  };
  
  request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php', true);
  request.send(formData);  
})