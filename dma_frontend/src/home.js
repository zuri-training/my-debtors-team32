const ribbon = document.querySelector('.ribbon_span')
const slide = document.querySelector('.slide')

ribbon[0].onclick = function(){
    slide.style.transform = "translatex(0px)";

}
ribbon[1].onclick = function(){
    slide.style.transform = "translatex(-800px)";

}
ribbon[2].onclick = function(){
    slide.style.transform = "translatex(-1600px)";

}
ribbon[3].onclick = function(){
    slide.style.transform = "translatex(-2400px)";

}