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
