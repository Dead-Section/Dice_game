
  var arrayImage = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]

function randomSelction() {
  var x = document.querySelector("img").setAttribute(item);

  var n = Math.random();
  var item = arrayImage[n];
}


function reload(){
  var pageReload = document.querySelector("button");
  pageReload = window.location.reload();
}




  // <button onClick="window.location.reload();">Refresh Page</button>
