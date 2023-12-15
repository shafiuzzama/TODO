document.querySelector("form").addEventListener("submit", myTodo)
function myTodo(event){
event.preventDefault();
var task=document.getElementById("task").value;
var priority=document.getElementById("Priority").value;
// console.log(task,priority)
var tr=document.createElement("tr");

var td1=document.createElement("td");
td1.textContent=task;

var td2=document.createElement("td");
td2.textContent=priority;

var td3=document.createElement("td");
td3.textContent="delete";
tr.append(td1,td2,td3);
document.querySelector("tbody").append(tr)
if(priority=="High"){
td2.style.backgroundColor="green";
}else{
td2.style.backgroundColor="red"
}
td3.addEventListener("click",deleteTask)

}
function deleteTask(event){
    // td3.removeEventListener("click", clickHandler);
//  console.log(event.target.parentNode.remove());

event.target.parentNode.remove()

}