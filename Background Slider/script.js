const body=document.body


const slides=document.querySelectorAll('.slide')

const leftBtn=document.getElementById('left')

const rightBtn=document.getElementById('right')

//几个function,分别功能
let a=0



rightBtn.addEventListener('click', () => {
   a++
  
    if (a > slides.length - 1) {
      a = 0
    }
  
    setBgToBody()
    setActiveSlide()
  })
  
  leftBtn.addEventListener('click', () => {
    a--
  
    if (a< 0) {
      a= slides.length - 1
    }
  
    setBgToBody()
    setActiveSlide()
  })
function setBgToBody(){
 body.style.backgroundImage=slides[a].style.backgroundImage
}

function setActiveSlide(){

    slides.forEach(slide=>slide.classList.remove('active'))
slides[a].classList.add('active')
}
