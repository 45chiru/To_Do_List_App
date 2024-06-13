const inputBox = document.getElementById("inputBx");
const listContainer = document.getElementById("list");
function addTask(){
    if(inputBox.value ==''){
        alert("You must add task!")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        let button = document.createElement("button");
        button.innerHTML = "Edit";
        button.onclick = function() {
            let newText = prompt("Enter new task description:", li.innerHTML);
            if (newText !== null && newText !== '') {
                li.innerHTML = newText;
                saveData();
            }
        };
        li.appendChild(button);
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value ="";
    saveData()
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData()
        }
        else if(e.target.tagName==="button"){
           e.target.classList.Edit("Edit");
           saveData()
        }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

// function showList(){
//     listContainer.innerHTML=localStorage.getItem("data")
// }
// showList();
