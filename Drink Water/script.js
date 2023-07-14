
const smallcups=document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

//todo
smallcups.forEach((cup, idx2)=>{
    cup.addEventListener('click',()=>{
        //让它慢慢涨
    
    })
    
})

//todo

function highlightCups(idx){

    

    smallCups.forEach((cup, idx2) => {
        if(idx2 <= idx) {
            cup.classList.add('full')
        } else {
            cup.classList.remove('full')
        }
    })



    updateBigCup()
}

function updateBigCup(){
const fullCups=document.querySelectorAll('.cup-small').length
const totalCups=smallcups.length

if(fullCups==0){
//todo
    percentage.style.visibility="hidden"
percentage.style.height=0
}else{
    percentage.style.visibility="visible"
    percentage.style.height=`${fullCups / totalCups * 330}px`
   percentage.innerText=`${fullCups/totalCups*100}%`
}


if(fullCups==totalCups){
remained.style.visibility="hidden"

}else{
remained.style.visibility="visible"
liters.innerText = `${2 - (250 * fullCups / 1000)}L`
}
}