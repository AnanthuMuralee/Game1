var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1)+1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2)+1;

document.getElementsByClassName("img1")[0].setAttribute("src","images/dice" + randomNumber1 + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice" + randomNumber2 + ".png");

if(randomNumber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "󠁳󠁤󠁮󠁢󠁿🔷Player 1 WINS!";
}
else if(randomNumber1 < randomNumber2)
{
  document.querySelector("h1").innerHTML = "🚩Player 2 WINS!";
}
else
{
  document.querySelector("h1").innerHTML = " Refresh To Play ";
}
