

var options = {
  strings: ['<i>First</i> sentence.', 'THAR LINN HTET'],
  typeSpeed: 80,
  loop:true,
  loopCount:Infinity
};

var typed = new Typed('.name', options);

const menuBar = document.querySelector('.menu-bar')
const curtain = document.querySelector('.curtain')
const slideHello = document.querySelector('.slide-hello')
const curtainUpBtn = document.querySelector('.curtain-button-container svg')
const textInfoContainer = document.querySelector('.text-info-container')
const imageInfoContainer = document.querySelector('.image-info-container')
const expSuccessContainer = document.querySelector('.exp-success-container')
curtainUpBtn.addEventListener('click', function(){
    curtain.style.transform="translateY(-1000px)"
    textInfoContainer.classList.add("animate__fadeInLeft" ,"animate__delay-1s" )
    imageInfoContainer.classList.add("animate__tada", "animate__delay-.9s" )
    expSuccessContainer.classList.add("animate__fadeInRight", "animate__delay-2s")
})

 

  setTimeout(function(){
    slideHello.style.transform = 'translateX(-10px)'
},900)

  setTimeout(function(){
  slideHello.style.transform = 'translateX(300px)'
  },8000)

  setTimeout(function(){
    slideHello.style.transform = 'translateX(-10px)'
},1000)



menuBar.addEventListener('click', function(){
  document.querySelector('.menu').classList.toggle('menuToggle')
})