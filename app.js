let list = document.querySelector('#list');

let index = document.getElementsByTagName("li").length;

// add to todo
function createList() {
    let item = document.createElement('li');
    item.innerHTML = `<a onclick=removeItem(${index})>
        ${document.getElementById("todoInput").value}
        </a>` ;
    console.log(index);
    index++;

    list.appendChild(item);
    document.getElementById("todoInput").value = ""
}

// remove todo
function removeItem(i) {
   
    list.children[i].className = "crossedOut";
    console.log(i);
    setTimeout(function () {
        list.children[i].remove();
    }, 1000);

    index = document.getElementsByTagName("li").length - 1;
}
