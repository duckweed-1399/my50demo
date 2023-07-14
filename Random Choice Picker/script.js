const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')
const dropdownItems = document.querySelectorAll(".dropdown-item")
const confirm=document.getElementById('confirm')


textarea.focus()


dropdownItems.forEach((item)=>{
    item.addEventListener("click", ()=> {
      var age = this.textContent;
      
      setTimeout(()=>{
        createTag(age);
      },100)
      
    });
  });

  confirm.addEventListener('click',randomSelect)

function createTag(tagText) {
    // 创建 <div> 元素作为标签容器
    var tagDiv = document.createElement("div");
    tagDiv.classList.add("tag");
  
    // 创建 <span> 元素来显示标签文本
    var tagSpan = document.createElement("span");
    tagSpan.textContent = tagText;
  
    // 添加标签文本至标签容器
    tagDiv.appendChild(tagSpan);
  
    // 插入标签容器到页面
    tags.appendChild(tagDiv);
  }
  
 
  
function randomSelect(){
    const times=30
const interval=setInterval(()=>{
    const randomTag=pickRandomTag()
    if(randomTag!=undefined){
        highlightTag(randomTag)

        setTimeout(()=>{
            unHighlightTag(randomTag)
        },100)
    }
},100)

setTimeout(() => {
    clearInterval(interval)
    setTimeout(()=>{
        const randomTag = pickRandomTag()

        highlightTag(randomTag)
    },100)
},times * 100);


}
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}
