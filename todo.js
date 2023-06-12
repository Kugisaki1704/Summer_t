let inputTag=document.getElementsByTagName("input")[0];
let todo = document.getElementsByClassName("list")[0];

function addnewtodo(){
    if(inputTag.value.length<1)
    {
        return;
    }

    let newTag = document.createElement("p");
    newTag.textContent=inputTag.value;
    todo.appendChild(newTag);
}