import { displayContainer } from "./index.js"

export default function displayTasks(array) {
    for (const item of array) {
        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        
        if (item.priority === 0) {
            taskDiv.classList.add('priority-zero')
        } else if (item.priority === 1) {
            taskDiv.classList.add('priority-one')
        } else if (item.priority === 2) {
            taskDiv.classList.add('priority-two')
        }

        let taskTitle = document.createElement('div')
        taskTitle.classList.add('title')
        taskTitle.textContent = item.title
        taskDiv.appendChild(taskTitle)

        let taskDescr = document.createElement('div')
        taskDescr.classList.add('descr')
        taskDescr.textContent = item.descr
        taskDiv.appendChild(taskDescr)

        let taskDate = document.createElement('div')
        taskDate.classList.add('dueDate')
        taskDate.textContent = item.dueDate
        taskDiv.appendChild(taskDate)

        displayContainer.appendChild(taskDiv)
    }
}