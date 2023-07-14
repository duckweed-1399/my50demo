const counter =document.querySelectorAll('.counter')
const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')

btn.addEventListener('click', () => {
    search.classList.toggle('active')
    input.focus()
})



counter.forEach(counter=>{
    //每次都达到指定的target
counter.innerText='0'

const updateCounter=()=>{
    const target=+counter.getAttribute('data-target')

    const c=+counter.innerText

    const increment=target/200


    if(c<target){
        counter.innerText=`${Math.ceil(c+increment)}`
        setTimeout(updateCounter,1)
    }else{
        counter.innerText=target
    }
}


updateCounter()

})