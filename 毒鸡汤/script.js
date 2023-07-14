const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
const bodyEl = document.body;


jokeBtn.addEventListener('click',generateJoke)


generateJoke()



async function generateJoke() {
  const url = 'https://api.xygeng.cn/one';

  try {
    const response = await fetch(url);
    const datas = await response.json();
    
    jokeEl.innerHTML = datas.data.content;
  } catch (error) {
    jokeEl.innerHTML = 'Failed to retrieve joke.';
    console.error(error);
  }

   // 随机生成 RGB 颜色
   const randomColor = `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;

   // 设置背景色
   bodyEl.style.backgroundColor = randomColor;
   jokeBtn.style.backgroundColor=randomColor;
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  