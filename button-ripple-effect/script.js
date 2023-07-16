const body = document.body

body.addEventListener('click', createRipple);

function createRipple(e) {

    const x = e.clientX
    const y = e.clientY

    const buttonTop = e.target.offsetTop
    const buttonLeft = e.target.offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop


  const ripple = document.createElement('span');
  ripple.classList.add('ripple');



  ripple.style.top = yInside + 'px'
  ripple.style.left = xInside + 'px'

  this.appendChild(ripple);

  setTimeout(() => ripple.remove(), 500);
}
