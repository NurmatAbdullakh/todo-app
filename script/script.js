const tasks=document.querySelector(".tasks")
const addButton=document.querySelector(".addButton")
const input=document.querySelector(".input")
const clear=document.querySelector(".clear")
let tasksList=[]

const Rerendering=()=>{
    tasks.innerHTML=''
    
    tasksList.forEach((item,index)=>{
        const textClassName=item.isDone ? "text done" : "text"
        tasks.innerHTML+=`<li class="item">
        <span class="${textClassName}">${item.task}</span>
        <div class="buttons">
            <img class="done" onclick="doneClick(\'${item.task}\')" src="./images/Vector.svg" alt="">
            <img class="delete" onclick="deleteClick(\'${item.task}\')" src="./images/↳ Icon Color.svg" alt="">
        </div>
    </li> `
    })
}

addButton.addEventListener("click",()=>{
    const value=input.value
    if(value.trim()){
        tasksList.unshift({task:value,isDone:false})
        input.value=""
    }else{
        alert("Please enter anything")
    }
    Rerendering()
})

function deleteClick(task){
    const currentIndex=tasksList.findIndex(v=>v.task===task)
    tasksList.splice(currentIndex,1)
    Rerendering()
}
function doneClick(task){
    const currentIndex=tasksList.findIndex(v=>v.task===task)
    tasksList[currentIndex].isDone=true
    Rerendering()
}
clear.addEventListener("click",()=>{
    tasksList=[]
    Rerendering()
})