var btLeft = document.getElementById("btnLeft");
var btRight = document.getElementById("btnRight");
var sliderList = document.querySelectorAll(".slide-item");
console.log(sliderList);
var now = 0;
btLeft.onclick = function() {
    Slider(now - 1)
}
btRight.onclick = function(){
    Slider(now + 1)
}

function Slider(say){
sliderList[now].className = "slide-item";
now = [say + sliderList.length] % sliderList.length;
sliderList[now].className = "slide-item active";
}


