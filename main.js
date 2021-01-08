const slideList = [{
    img:"images/bonsai1.jpg",
    text:'First bonsai'
},
{img:"images/bonsai2.jpg",
    text:'Second bonsai'},
{img:"images/bonsai3.jpg",
    text:'Few bonsai'}];

const time = 2000;
let active = 0;

const image = document.querySelector('img.slider')
const h1 = document.querySelector('h1.slider')
const dots = [...document.querySelectorAll('.dots span')];   

changeDot = ()=>{
   const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
   dots[activeDot].classList.remove('active');
   dots[active].classList.add('active');
}
const changeSlide = ()=>{
    active++;
    if(active === slideList.length ){
    active = 0};
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}
let indexInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e)=>{
    if(e.keyCode == 37 || e.keyCode == 39){
        clearInterval(indexInterval)
        e.keyCode == 37 ? active-- : active++
        if(active == slideList.length ){
            active = 0;
            
        }
        else if(active < 0){
            active = slideList.length -1;
        }
        console.log('ok')
        image.src = slideList[active].img;
        h1.textContent = slideList[active].text;
        changeDot();
        indexInterval = setInterval(changeSlide, time)

    }

}


// utwórz funkcje keyChangeSlide. Zadanie może wymagać także zmian poza funkcją.
window.addEventListener('keydown', keyChangeSlide)