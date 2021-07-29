let mijnButton = document.querySelector(".button");
let mijnEersteStap = document.querySelector(".bezos");
function eersteStap(){
    mijnEersteStap.classList.add("onzichtbaar")
}
mijnButton.addEventListener("click", eersteStap)
