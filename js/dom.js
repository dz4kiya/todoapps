const UNCOMPLETED_LIST_TODO_ID = "todos";

function makeTodo(data, timestamp) {
    const textTitle = document.createElement("h2");
    textTitle.innerText = data;

    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = timestamp;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner")
    textContainer.append(textTitle, textTimestamp); //memasukkan textTitle dan textTimestamp ke textContainer

    const container = document.createElement("div");
    container.classList.add("item","shadow")
    container.append(textContainer);

    return container;
}

function addTodo() {
    const uncompletedTODOList = document.getElementById(UNCOMPLETED_LIST_TODO_ID);

    const textTodo = document.getElementById("title").value; //mengambil inputan yg ber id title terus dimasukkan ke variabel textTodo
    const timestamp = document.getElementById("date").value;

    /* console.log("todo" + textTodo);                           //menampilkan ke console browser
    console.log("timestamp" + timestamp);

     for (let i = 0; i < 10; i++) {
        const todo = makeTodo();
        uncompletedTODOList.append(todo);
    } */

    const todo = makeTodo(textTodo, timestamp);
    uncompletedTODOList.append(todo);

    
}

