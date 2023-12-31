const bg =document.querySelector('.bg');
const loading =document.querySelector('.Loading-text');

let load =0; 

let int =setInterval(blurEffect,30);

function blurEffect() {
    load++;
    if (load > 99) {
        clearInterval(int);
    }
    loading.innerText = `${load}%`;
    loading.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

  