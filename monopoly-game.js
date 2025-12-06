const todo_input = document.querySelector("#todo-input")
const add_btn = document.querySelector("#add-btn")
const task = document.querySelector(".task")

// Add new task
function writting_thing(){
    const inputValue = todo_input.value.trim()
    if(!inputValue) return

    const div = document.createElement("div")
    div.className = "hell active"

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.className = "checkbox"

    const p = document.createElement("p")
    p.textContent = inputValue

    const editBtn = document.createElement("button")
    editBtn.textContent = "Edit"
    editBtn.onclick = function(){ editTask(this) }

    const delBtn = document.createElement("button")
    delBtn.textContent = "DELETE"
    delBtn.onclick = function(){ deleteTask(this) }

    div.appendChild(checkbox)
    div.appendChild(p)
    div.appendChild(editBtn)
    div.appendChild(delBtn)

    task.appendChild(div)

    todo_input.value = ""
}

// Delete task
function deleteTask(btn){
    const item = btn.parentElement
    item.remove()
}

// Edit task
function editTask(btn){
    const item = btn.parentElement
    const newText = prompt("Edit task:", item.querySelector("p").textContent)
    if(newText !== null && newText.trim() !== ""){
        item.querySelector("p").textContent = newText
    }
}

// Checkbox change → completed or active
task.addEventListener("change", function(e){
    if(e.target.classList.contains("checkbox")){
        const item = e.target.parentElement
        if(e.target.checked){
            item.classList.add("completed")
            item.classList.remove("active")
        } else {
            item.classList.add("active")
            item.classList.remove("completed")
        }
    }
})

// Filters
function all(){
    const items = document.querySelectorAll(".hell")
    items.forEach(item => item.style.display = "flex")
}

function active(){
    const items = document.querySelectorAll(".hell")
    items.forEach(item => {
        if(item.classList.contains("completed")){
            item.style.display = "none"
        } else {
            item.style.display = "flex"
        }
    })
}

function completed(){
    const items = document.querySelectorAll(".hell")
    items.forEach(item => {
        if(item.classList.contains("completed")){
            item.style.display = "flex"
        } else {
            item.style.display = "none"
        }
    })
}
