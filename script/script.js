const tasks=document.querySelector(".tasks")
const addButton=document.querySelector(".addButton")
const input=document.querySelector(".input")
let tasksList=[]


const Rerendering=()=>{
    tasks.innerHTML=''
    tasksList.forEach((item,index)=>{
        tasks.innerHTML+=`<li class="item">
        <span class="text ">${item.task}</span>
        <div class="buttons">
            <img class="done" src="./images/Vector.svg" alt="">
            <img class="delete" onclick="deleteClick(\'${item.task}\')" src="./images/↳ Icon Color.svg" alt="">
        </div>
    </li> `
    })
}
addButton.addEventListener("click",()=>{
    const value=input.value
    tasksList.push({task:value})
    Rerendering()
})

function deleteClick(task){
    const currentIndex=tasksList.findIndex(v=>v.task===task)
    tasksList.splice(currentIndex,1)
    Rerendering()
}