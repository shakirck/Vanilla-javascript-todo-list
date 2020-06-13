const list = document.getElementById('list');
const addTask = document.getElementById('add-input');
const addBtn =document.getElementById('task-add-btn');
const taskCounter = document.getElementById('task-counter');
const todoListContainer=document.querySelector('.todo-list-container')
const cases = document.getElementById('cases');
let tasks = 0;
let id = 0;
//add the tasks to the list 
function addToList(){
    var li = document.createElement('li');
    var value = addTask.value;
    if(value.length > 0){
    li.innerHTML= `
    <input type="checkbox" id="checkbox-${id}">
    <label class="check" for="checkbox-${id}"></label>
    <p class="task-name">${value}</p>
    <img src="assets/images/trash.svg" class="delete-task"></img src="">

    `
    li.classList.add('task-item')
    list.appendChild(li);
    addTask.value=''
    tasks++;
    id++;
    
    }
}

//check if enter key is pressed or not 
function checkAndAddToList(e){
    if(e.key=='Enter'){
        addToList();
    }
}

//update total number of tasks
function updateTaskCounter(){

    taskCounter.innerText=tasks;
}

// deleting from the list and adding checkmarks
function operations(e){
if(e.target.className =='delete-task'){
    console.log('delete');
    e.target.parentNode.style.display='';
    // e.target.parentNode.classList.add('remove');
    e.target.parentNode.remove();
    tasks--;
}
else if (e.target.className=='check')
    console.log('check');

    let item = e.target;
    let parent = e.target.parentNode;
    item.checked==true? parent.classList.add('strike'):parent.classList.remove('strike')
//check if the size of list is 0 ,if then all the hidden elements are cleared
// clearScreen();
}

 var todos;
 //for viewing completed and non completed tasks separately
 function views(e){
     todos = list.children;

      for(todo of todos){
          if(e.target.id=='all'){
              todo.style.display = 'flex';
          }else if (e.target.id == 'completed'){
              if(todo.classList.contains('strike')){
                  todo.style.display='flex';

              }else{
                  todo.style.display='none';
              }
          }
          else if (e.target.id == 'not-completed'){
              
            if(todo.classList.contains('strike')){
                todo.style.display='none';

            }else{
                todo.style.display='flex';
            }
        }
          
      }
 }
//clear list once the total tasks are 0.used because the list are actually hidden when pressing delete
// function clearScreen(){
//      if(tasks==0){
//          list.innerHTML='';
//      }
//  }
 
 //event listeners
addBtn.addEventListener('click',addToList);
addTask.addEventListener('keypress',checkAndAddToList);
list.addEventListener('click',operations);
todoListContainer.addEventListener('click',updateTaskCounter)
cases.addEventListener('click',views);