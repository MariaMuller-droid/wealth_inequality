let mijnButton = document.querySelector(".bezos .button");
let mijnEersteStap = document.querySelector(".bezos");
let mijnTweedeButton = document.querySelector(".oprah .button");
let mijnOprahKader= document.querySelector("div .oprah");
let mijnMadonnaKader = document.querySelector(".madonna");
let mijnDerdeButton = document.querySelector(".madonna .button");
let mijnZoomIn = document.querySelector(".zoomin");
let mijnPagina = document.querySelector("html");
let averageOne = document.querySelector(".average");
let zoomOutButton = document.querySelector(".average .button");
let mijnAverageInfo = document.querySelectorAll(".avgeu");
let hoverFieldOne = document.getElementById('medianEuHover');
let hoverFieldTwo = document.getElementById("medianAfHover");
let mijnHoverImgOne = document.querySelector(".hoverAverageOne");
let mijnHoverImgTwo = document.querySelector(".hoverAverageTwo");
let paraTwo = document.querySelector(".paraTwo");
let paraThree = document.querySelector(".paraThree");



function eersteStap(){
    mijnEersteStap.classList.add("onzichtbaar")
}
mijnButton.addEventListener("click", eersteStap)

function tweedeStap(){
    mijnTweedeButton.classList.add("onzichtbaar");
    mijnOprahKader.classList.add("fotoOprah");
    mijnMadonnaKader.classList.remove("onzichtbaar");
}

mijnTweedeButton.addEventListener("click", tweedeStap);

function derdeStap(){
    mijnDerdeButton.classList.add("onzichtbaar");
    mijnOprahKader.classList.add("fotoMadonna");
    mijnMadonnaKader.classList.add("onzichtbaar");
    mijnZoomIn.classList.remove("onzichtbaar");
}

mijnDerdeButton.addEventListener("click", derdeStap);


function vierdeStap(){
  let i = 0;
    mijnZoomIn.classList.add("onzichtbaar");
    mijnPagina.style.zoom = "2500%";
    averageOne.classList.remove("onzichtbaar");
    window.scrollTo(22500, 239200);

    while(mijnAverageInfo.length> i){
      mijnAverageInfo[i].classList.remove("onzichtbaar");
      i++;
    }

}

mijnZoomIn.addEventListener("click", vierdeStap);

function blueHover(){
  mijnHoverImgOne.classList.toggle("muisOver");
  paraTwo.classList.toggle("muisOver");
}

hoverFieldOne.addEventListener("mouseover", blueHover);
hoverFieldOne.addEventListener("mouseout", blueHover);

function vijfdeStap(){
 hoverFieldTwo.classList.remove("onzichtbaar");
 //hoverFieldOne.classList.add("onzichtbaar");
 paraTwo.style.opacity = "1";
 averageOne.style.backgroundImage = "url('../wealth_inequality/img/MED_EU.png')";
}

hoverFieldOne.addEventListener("click", vijfdeStap);

function redHover(){
  mijnHoverImgTwo.classList.toggle("muisOver");
  paraThree.classList.toggle("muisOver");
}

hoverFieldTwo.addEventListener("mouseover", redHover);
hoverFieldTwo.addEventListener("mouseout", redHover);

function zesdeStap(){
 //hoverFieldTwo.classList.add("onzichtbaar");
 paraThree.style.opacity = "1";
 //mijnHoverImg.classList.add("onzichtbaar");
 averageOne.style.backgroundImage = "url('../wealth_inequality/img/MED_AF.png')";
}

hoverFieldTwo.addEventListener("click", zesdeStap);


function zoomOut(){
  let ii = 0;
    while(mijnAverageInfo.length> ii){
      mijnAverageInfo[ii].classList.add("onzichtbaar");
      ii++;
    }
    mijnZoomIn.classList.remove("onzichtbaar");
    mijnPagina.style.zoom = "78%";
  //  mijnPagina.classList.remove("zoomedin");
    window.scrollTo(0, 7000);
}

zoomOutButton.addEventListener("click", zoomOut);
