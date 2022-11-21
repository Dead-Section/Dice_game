  //this function reload the page
  function reload() {
    var buttonReload = document.querySelector("button");
    buttonReload = window.location.reload();
  }

  //<---------------------------------------------------------------->

  var randonNumber, randonNumber2;

  randonNumber = Math.floor(Math.random() * 6) + 1
  randonNumber2 = Math.floor(Math.random() * 6) + 1

  var imgLayout = "images/dice" + randonNumber + ".png";
  var imgLayout2 = "images/dice" + randonNumber2 + ".png";
  console.log(randonNumber, randonNumber2)

  function changeImg1() {
    var img1 = document.querySelectorAll("img");
    //Player1
    img1[0].setAttribute("src", imgLayout);
    //Player2
    img1[1].setAttribute("src", imgLayout2);
  }


  //<---------------------------------------------------------------->
  //changin the title
  function whoTheWinner() {

    if (randonNumber > randonNumber2) {
      document.querySelector("h1").innerText = "Player 1 wins";
    }if (randonNumber < randonNumber2) {
      document.querySelector("h1").innerText = "Player 2 wins";
    }else if ( randonNumber === randonNumber2) {
      document.querySelector("h1").innerText = "Its a draw";

    }

  }

//<---------------------------------------------------------------->
  //running the function  
  changeImg1();
  whoTheWinner();
