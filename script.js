
let sliderFirst = document.querySelector('#slider_first');
let sliderLeftIcon = document.querySelector('.slider_left_icon');
let sliderRightIcon = document.querySelector('.slider_right_icon');




let count = 0
function slider() {
    for (let i = 0; i < sliderFirst.children.length; i++) {
        sliderFirst.children[i].style.transform = `translateX(${-290 * count}px)`

    }

}
setInterval(() => {
    if (count < sliderFirst.children.length - 3) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
}, 3000);
sliderRightIcon.addEventListener('click', () => {
    if (count < sliderFirst.children.length - 3) {
        count++
        slider()
    } else {
        count = 0
        slider()
    }
})
sliderLeftIcon.addEventListener('click',()=>{
    if(count>0){
        count--
        slider()
    }else{
        count=0
        slider()
    }
})