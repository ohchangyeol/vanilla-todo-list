const body = document.querySelector("body");

const image_number = 8 ;


function paintImage(imgNumber){
    const image = new Image();
    image.src= `./images/${imgNumber + 1 }.jpg`;
    body.style.color = `#fff`;
    image.classList.add("bgimage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random() * image_number);
    return number;
}

function init (){
    const randomNumber = genRandom();
    paintImage(randomNumber);
};
init();