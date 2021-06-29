var randomnNo1=Math.ceil(Math.random()*6);
var randomnNo2=Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","./images/dice"+randomnNo1+".png");
document.querySelector(".img2").setAttribute("src","./images/dice"+randomnNo2+".png");
if(randomnNo1>randomnNo2)
{
    document.querySelector("h1").textContent="🚩 Player 1 Won!";
}
else if(randomnNo1<randomnNo2)
{
    document.querySelector("h1").textContent="Player 2 Won! 🚩";
}
else
{
    document.querySelector("h1").textContent="DRAW!";
}