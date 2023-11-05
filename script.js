let leftClick = document.getElementById("arrowLeft");
let rightClick = document.getElementById("arrowRight");
let carusel = document.getElementById("carusel");

leftClick.addEventListener("click", goLeft);
rightClick.addEventListener("click", goRight);

const caruselElem = 3;
const width = 100/caruselElem;
const item = carusel.children.length - caruselElem
let current = 0;

for (let i = 0; i< carusel.childElementCount; i++)
{
    carusel.children[i].style.width = `${width}%`;
}

function goLeft()
{

}
function goRight()
{

}