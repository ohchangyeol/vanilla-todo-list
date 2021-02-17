//get Method 
const form = document.querySelector(".js-form"),
    input = document.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

//class Mameing 
const user_ls = "currentUser",
    show_cn = 'showing';

//function 

function saveName(text){
    //이름을 로컬에 저장.
    localStorage.setItem(user_ls, text);
}
function handleSubmit(e){
    // form의 이벤트가 발생했을 때
    e.preventDefault();
    const currebtValue = input.value;
    // console.log(currebtValue);
    paintGreeting(currebtValue);
    saveName(currebtValue);
    
}

function askForName(){
    form.classList.add(show_cn);
    form.addEventListener("submit",handleSubmit)
}

function paintGreeting(text){
    form.classList.remove(show_cn);
    greeting.classList.add(show_cn);
    greeting.innerText = `안녕하세요, ${text}님`;
}

function loadName(){
    const curretUser = localStorage.getItem(user_ls);
    if(curretUser === null){
        // 없는 경우
        askForName();
    }else{ 
        // 있는 경우
        paintGreeting(curretUser);
    }
}
function init(){
    loadName();
}
init();