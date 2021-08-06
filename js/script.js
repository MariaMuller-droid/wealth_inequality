let mijnButton = document.querySelector(".bezos .button");
let mijnEersteStap = document.querySelector(".bezos");
let mijnTweedeButton = document.querySelector(".oprah .button");
let mijnOprahKader= document.querySelector("div .oprah");
let mijnMadonnaKader = document.querySelector(".madonna");
let mijnDerdeButton = document.querySelector(".madonna .button");
let mijnZoomIn = document.querySelector(".zoomin");
let mijnPagina = document.querySelector("html");

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
    mijnZoomIn.classList.add("onzichtbaar");
    mijnPagina.classList.add("zoomedin");
    window.scrollTo(22500, 239200);
}

mijnZoomIn.addEventListener("click", vierdeStap);
