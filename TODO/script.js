const addNewTask = document.querySelector('button.add');
const addItemCont = document.querySelector('div.addItemCont');
const cancelTask = document.querySelector('button.cancelTask');
const input = document.querySelector('input');
const addTask = document.querySelector('button.addTask');
const ul = document.querySelector('ul');
const liEl = [...document.getElementsByClassName('del-item')];


const removeTask = (e) =>{
    e.target.parentNode.remove();
}
const openPanel = () =>{
    addItemCont.style.visibility = 'visible';
}
const collapsePanel = () =>{
    addItemCont.style.visibility = 'hidden';
}

const newTask = () => {
    if(!input.value)return

    const newTaskTitle = input.value;
    const li = document.createElement('li');
    ul.appendChild(li);
    li.innerHTML = `${newTaskTitle} <button class="del-item">-</button>`;
    input.value = ''
    collapsePanel();
    // liEl.forEach(item=>item.addEventListener('click', removeTask))
    li.querySelector('button').addEventListener('click', removeTask)

}

cancelTask.addEventListener('click', collapsePanel);
addNewTask.addEventListener('click', openPanel);
addTask.addEventListener('click',newTask);

document.querySelector('.deleteAll').addEventListener('click', function(){
    ul.innerHTML = '';
})