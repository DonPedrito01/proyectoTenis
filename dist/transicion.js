let imagen1 = document.querySelector ("#img-1");
let imagen2 = document.querySelector ("#img-2");

window.addEventListener ("mousemove", function(e){
    let pixel = e.clientX + "px";
    imagen1.style.width = pixel;
})