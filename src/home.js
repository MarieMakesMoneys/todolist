import { allProjects, allTasks, displayContainer, taskFactory } from "./index.js"

let deleteBtns = document.querySelectorAll('button.delete')
let editBtns = document.querySelectorAll('button.edit')

const selectBtns = document.querySelector('fieldset.select')
const projectForm = document.querySelector('fieldset.new-project')
const taskForm = document.querySelector('fieldset.new-task')
const noteForm = document.querySelector('fieldset.new-note')
const saveEditBtn = document.querySelector('button.save-edit')

export function displayTasks(array) {
    while (displayContainer.firstChild) {
        displayContainer.removeChild(displayContainer.firstChild)
    }
    for (const item of array) {
        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task')
        
        if (item.priority === '0') {
            taskDiv.classList.add('priority-zero')
        } else if (item.priority === '1') {
            taskDiv.classList.add('priority-one')
        } else if (item.priority === '2') {
            taskDiv.classList.add('priority-two')
        }

        let taskContent = document.createElement('div')
        taskContent.classList.add('task-content')

        let taskCheck = document.createElement('button')
        taskCheck.classList.add('check')
        taskCheck.setAttribute('data-array-index', array.indexOf(item))
        if (item.status === 'red') {
            taskCheck.classList.add('red')
        } else if (item.status === 'green') {
            taskCheck.classList.add('green')
        } else if (item.status === 'blank') {
            taskCheck.classList.add('blank')
        }
        taskContent.appendChild(taskCheck)

        let taskText = document.createElement('div')
        taskText.classList.add('task-text')
        taskContent.appendChild(taskText)

        let taskTitle = document.createElement('div')
        taskTitle.classList.add('title')
        taskTitle.textContent = item.title
        taskText.appendChild(taskTitle)

        let taskDescr = document.createElement('div')
        taskDescr.classList.add('descr')
        taskDescr.textContent = item.descr
        taskText.appendChild(taskDescr)

        let taskDate = document.createElement('div')
        taskDate.classList.add('dueDate')
        taskDate.textContent = displayDate(item)
        taskText.appendChild(taskDate)

        let taskOptions = document.createElement('div')
        taskOptions.classList.add('task-options')

        let taskEdit = document.createElement('button')
        taskEdit.classList.add('edit')
        taskEdit.setAttribute('data-array-index', array.indexOf(item))
        taskEdit.setAttribute('data-project', `${item.project}`)
        taskEdit.textContent = 'edit'
        taskOptions.appendChild(taskEdit)

        let taskDelete = document.createElement('button')
        taskDelete.classList.add('delete')
        taskDelete.setAttribute('data-array-index', array.indexOf(item))
        taskDelete.setAttribute('data-project', `${item.project}`)
        taskDelete.textContent = 'x'
        taskOptions.appendChild(taskDelete)

        taskDiv.appendChild(taskContent)
        taskDiv.appendChild(taskOptions)
        displayContainer.appendChild(taskDiv)
    }
    
    deleteTask()
    editTask()
    changeCheckColor(array)
}

function displayDate(input) {
    let fullDate = input.dueDate
    let year = fullDate.slice(0,4)
    let month = fullDate.slice(4,6)
    let day = fullDate.slice(6)
    let validDate = day + '/' + month + '/' + year 
    return validDate
}

function deleteTask() {
    deleteBtns = document.querySelectorAll('button.delete')
    deleteBtns.forEach((button) => {
        button.addEventListener('click', () => {
            let arrayIndex = button.getAttribute('data-array-index')
            
            let domElements = document.querySelectorAll(`.form-container [data-array-index="${arrayIndex}"]`)
            domElements.forEach((element) => {
                element.parentNode.removeChild(element)
            })

            let projectName = button.getAttribute('data-project')
            for (let i = 0; i < allProjects.length; i++) {
                if (projectName === allProjects[i].title) {
                    let parentProject = allProjects[i]
                    let taskTitle = allTasks[arrayIndex].title
                    for (let j = 0; j < parentProject.content.length; j++) {
                        if (taskTitle === parentProject.content[j].title) {
                            parentProject.content.splice(j, 1)
                        }
                    }
                }
            }

            allTasks.splice(arrayIndex, 1)

            let storedTasks = JSON.stringify(allTasks)
            localStorage.setItem('tasks', storedTasks)

            displayTasks(allTasks)
        })
    })
}

function editTask() {
    editBtns = document.querySelectorAll('button.edit')
    editBtns.forEach((button) => {
        button.addEventListener('click', function() {
            let arrayIndex = button.getAttribute('data-array-index')
    
            document.querySelector('.form-container').style.display = "flex"
            selectBtns.style.display = 'none'
            projectForm.style.display = 'none'
            taskForm.style.display = 'flex'
            noteForm.style.display = 'none'
            saveEditBtn.style.display = 'block'

            
            document.querySelector('fieldset.new-task>select#project').value = allTasks[arrayIndex].project
            let oldProjectIndex;
            let projectName = button.getAttribute('data-project')
            for (let i = 0; i < allProjects.length; i++) {
                if (projectName === allProjects[i].title) {
                    document.querySelector('fieldset.new-task>select#project').selectedIndex = i
                    oldProjectIndex = i
                }
            }
            document.querySelector('fieldset.new-task>input#title').value = allTasks[arrayIndex].title
            document.querySelector('fieldset.new-task>input#descr').value = allTasks[arrayIndex].descr
            let inputDate = allTasks[arrayIndex].dueDate
            let year = inputDate.slice(0,4)
            let month = inputDate.slice(4,6)
            let day = inputDate.slice(6)
            let outputDate = year + '-' + month + '-' + day 
            document.querySelector('fieldset.new-task>input#due-date').value = outputDate
            document.querySelector('fieldset.new-task>input#priority').value = allTasks[arrayIndex].priority
 
            saveEditBtn.addEventListener('click', () => {
                let taskProject = document.querySelector('fieldset.new-task>select#project').value
                let indexOfProject = document.querySelector('fieldset.new-task>select#project').selectedIndex
                let taskTitle = document.querySelector('fieldset.new-task>input#title').value
                let taskDescr = document.querySelector('fieldset.new-task>input#descr').value
                let taskDate = document.querySelector('fieldset.new-task>input#due-date').value
                taskDate = taskDate.replaceAll("-", "")
                let taskPriority = document.querySelector('fieldset.new-task>input#priority').value
                let taskStatus = document.querySelector(`button[data-array-index="${arrayIndex}"]`).classList.value.split(' ')[1]

                let formerProject = allProjects[oldProjectIndex].content
                let chosenProject = allProjects[indexOfProject].content
                let formerTaskTitle = allTasks[arrayIndex].title
                if (oldProjectIndex === indexOfProject) {
                    for (let j = 0; j < chosenProject.length; j++) {
                        if (formerTaskTitle === chosenProject[j].title) {
                            chosenProject[j].title = taskTitle
                            chosenProject[j].descr = taskDescr
                            chosenProject[j].dueDate = taskDate
                            chosenProject[j].project = chosenProject
                            chosenProject[j].priority = taskPriority
                        }
                    }
                    allTasks[arrayIndex].project = taskProject
                    allTasks[arrayIndex].title = taskTitle
                    allTasks[arrayIndex].descr = taskDescr
                    allTasks[arrayIndex].dueDate = taskDate
                    allTasks[arrayIndex].priority = taskPriority

                    let storedTasks = JSON.stringify(allTasks)
                    localStorage.setItem('tasks', storedTasks)
                } else {
                    let taskTitle = allTasks[oldProjectIndex].title
                    for (let j = 0; j < formerProject.length; j++) {
                        if (taskTitle === formerProject[j].title) {
                            formerProject.splice(j, 1)
                        }
                    }
                    allTasks.splice(oldProjectIndex, 1)
                    
                    let newTask = taskFactory(taskTitle, taskDescr, taskDate, taskProject, taskPriority)
                    allTasks.push(newTask)
                    chosenProject.push(newTask)

                    let storedTasks = JSON.stringify(allTasks)
                    localStorage.setItem('tasks', storedTasks)
                }

                displayTasks(allTasks)

                document.querySelector('.form-container').style.display = "none"
                saveEditBtn.style.display = 'none'
                
                document.querySelector('fieldset.new-task>select#project').selectedIndex = 0
                document.querySelector('fieldset.new-task>input#title').value = ''
                document.querySelector('fieldset.new-task>input#descr').value = ''
                document.querySelector('fieldset.new-task>input#due-date').value = ''
                document.querySelector('fieldset.new-task>input#priority').value = ''
                
            }, {once: true})
        })
    })
}

export function changeCheckColor(array) {
    let checkboxes = document.querySelectorAll('button.check')
    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            let arrayIndex = checkbox.getAttribute('data-array-index')
            console.log(arrayIndex)
            let taskStatus = array[arrayIndex].status
            if (taskStatus === 'red') {
                array[arrayIndex].status = 'green'
            } else if (taskStatus === 'green') {
                array[arrayIndex].status = 'blank'
            } else if (taskStatus === 'blank') {
                array[arrayIndex].status = 'red'
            }
            displayTasks(array)
        })
    })
}