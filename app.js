let form = document.querySelector('form')
let taskInput = document.querySelector("#task-input");
let taskList = document.querySelector('#task') // this is the UL
let savedTask = []

window.addEventListener('load',function(e){
    JSON.parse(localStorage.getItem("savedTask"))
    for(let a = 0; a < task.length; a++){
        //taskList.append(task[a])
        console.log(a)
    }
})
//EVENT LISTENER TO REMOVE TASK VIA THE DELETE BUTTON
taskList.addEventListener('click', function(e){
    //console.log(e.target)
    if( e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
} if( e.target.tagName === "LI"){
    e.target.classList.toggle('finished')
}
})

// EVENT LISTENER ON THE FORM TO ADD TASK W/ A DELETE BUTTON
form.addEventListener('submit', function(event){
    event.preventDefault();
    const newTask = document.createElement('li');
    newTask.innerText = taskInput.value;
    taskList.append(newTask);
    savedTask.push(newTask.innerText);
    console.log(savedTask);
    localStorage.setItem('savedTask',JSON.stringify(savedTask))
    console.log(localStorage)
    const deleteBTN = document.createElement('button');
    deleteBTN.innerText = "Delete";
    deleteBTN.classname = 'delete';
    newTask.appendChild(deleteBTN);
    form.reset();// clears out the value from the task input
    
    
})


   
