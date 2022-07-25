

// Code for Player 1 Selection
var randomNumber1=Math.floor(Math.random()*6)+1;
   if(randomNumber1==1)
      {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice1.png");
      }
   else if(randomNumber1==2)
      {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice2.png");
      }
   else if(randomNumber1==3)
      {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice3.png");
      }
   else if(randomNumber1==4)
      {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice4.png");
      }
   else if(randomNumber1==5)
      {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice5.png");
      }
   else
      {
        document.getElementsByClassName("img1")[0].setAttribute("src","images/dice6.png");
      }


// Code for Player 2 Selection
var randomNumber2=Math.floor(Math.random()*6)+1;
   if(randomNumber2==1)
      {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice1.png");
      }
   else if(randomNumber2==2)
      {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice2.png");
      }
   else if(randomNumber2==3)
      {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice3.png");
      }
   else if(randomNumber2==4)
      {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice4.png");
      }
   else if(randomNumber2==5)
      {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice5.png");
      }
   else
      {
        document.getElementsByClassName("img2")[0].setAttribute("src","images/dice6.png");
      }
    
// Decide and Display the Winner
  if(randomNumber1===randomNumber2)
  {
    document.querySelector("h1").textContent="Draw";
  }
  else if(randomNumber1>=randomNumber2)
  {
    document.querySelector("h1").textContent="Player1 Wins";
  }
  else if(randomNumber1<=randomNumber2)
  {
    document.querySelector("h1").textContent="Player2 Wins";
  }
 
     