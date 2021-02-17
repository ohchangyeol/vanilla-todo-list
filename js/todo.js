const toDoForm = document.querySelector(".js-toDoForm"),
    toDoinput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const todos_ls = 'toDos';

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentElement;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    });
    console.log(cleanToDos);
    toDos = cleanToDos;
    saveTodos();
}
function saveTodos(){
    localStorage.setItem(todos_ls,JSON.stringify(toDos));
    // localStorage에는 string 으로만 인식하기에 문자열외엔 반환하지않음. 
    // JSON.stringify() 오브젝트를 string 으로 바꿔주는 메소드. 
}

function paintToDo(text){
    const li = document.createElement('li');
    const delBtn = document.createElement("button");
    const span = document.createElement('sapn');
    const newId = toDos.length + 1 ;

    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo)
    span. innerText = text ; 

    li.appendChild(delBtn);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.id = newId;
    const toDoObj = {
        //오브젝트로 반환한 이유 - local 에 저장해야 하기에 오브젝트로 반환 후 로컬에 저장.
        text : text,
        id : newId
    };
    toDos.push(toDoObj);
    saveTodos();
}
function handleSubmit(evnet){
    evnet.preventDefault();
    const currentValue = toDoinput.value;
    paintToDo(currentValue);
    toDoinput.value = "";
}
function loadToDos(){
    const loadedToDos = localStorage.getItem(todos_ls);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        })
    }
}

function init (){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit)
}
init();