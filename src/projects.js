import { displayContainer, allProjects, displayDropdownOptions, displaySidebarProjects, displayEachProject } from "./index.js"

let deleteBtns = document.querySelectorAll('button.delete')
let editBtns = document.querySelectorAll('button.edit')

const selectBtns = document.querySelector('fieldset.select')
const projectForm = document.querySelector('fieldset.new-project')
const taskForm = document.querySelector('fieldset.new-task')
const noteForm = document.querySelector('fieldset.new-note')
const saveEditBtn = document.querySelector('button.save-edit')

export function displayProjects() {
    while(displayContainer.firstChild){
        displayContainer.removeChild(displayContainer.firstChild);
    }
    for (const project of allProjects) {
        let projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        projectDiv.setAttribute('data-array-index', `${allProjects.indexOf(project)}`)

        let projectName = document.createElement('div')
        projectName.textContent = project.title

        let projectDescr = document.createElement('div')
        projectDescr.classList.add('project-descr')
        projectDescr.textContent = project.descr

        let projectTasks = document.createElement('ul')
        for (const task of project.content) {
            let taskLi = document.createElement('li')
            if (task.status === 'green') {
                taskLi.classList.add('green')
            }
            taskLi.textContent = task.title
            projectTasks.appendChild(taskLi)
        }

        let projectOptions = document.createElement('div')
        projectOptions.classList.add('project-options')

        let deleteBtn = document.createElement('button')
        deleteBtn.classList.add('delete')
        deleteBtn.setAttribute('data-array-index', `${allProjects.indexOf(project)}`)
        deleteBtn.textContent = 'x'

        let editBtn = document.createElement('button')
        editBtn.classList.add('edit')
        editBtn.setAttribute('data-array-index', `${allProjects.indexOf(project)}`)
        editBtn.textContent = 'edit'

        projectName.appendChild(projectDescr)
        projectName.appendChild(projectTasks)
        projectOptions.appendChild(deleteBtn)
        projectOptions.appendChild(editBtn)

        projectDiv.appendChild(projectName)
        projectDiv.appendChild(projectOptions)
        displayContainer.appendChild(projectDiv)
    }
    deleteProject()
    editProject()
}
 
export function deleteProject() {
    deleteBtns = document.querySelectorAll('button.delete')
    deleteBtns.forEach((button) => {
        button.addEventListener('click', () => {
            let arrayIndex = button.getAttribute('data-array-index')
            allProjects.splice(arrayIndex, 1)
            let domElements = document.querySelectorAll(`[data-array-index="${arrayIndex}"]`)
            domElements.forEach((element) => {
                element.parentNode.removeChild(element)
            })

            let storedProjects = JSON.stringify(allProjects)
            localStorage.setItem('projects', storedProjects)

            displayProjects()
            displaySidebarProjects()
            displayDropdownOptions()
        })
    })
}

export function editProject() {
    editBtns = document.querySelectorAll('button.edit')
    editBtns.forEach((button) => {
        button.addEventListener('click', () => {
            let arrayIndex = button.getAttribute('data-array-index')
            document.querySelector('.form-container').style.display = "flex"
            selectBtns.style.display = 'none'
            projectForm.style.display = 'flex'
            taskForm.style.display = 'none'
            noteForm.style.display = 'none'
            saveEditBtn.style.display = 'block'

            document.querySelector('fieldset.new-project>input#title').value = allProjects[arrayIndex].title
            document.querySelector('fieldset.new-project>textarea#descr').value = allProjects[arrayIndex].descr
                

            saveEditBtn.addEventListener('click', () => {
                let projectTitle = document.querySelector('fieldset.new-project>input#title').value
                let projectDescr = document.querySelector('fieldset.new-project>textarea#descr').value
                let projectContent = allProjects[arrayIndex].content
                allProjects[arrayIndex].title = projectTitle
                allProjects[arrayIndex].descr = projectDescr
                allProjects[arrayIndex].content = projectContent

                let storedProjects = JSON.stringify(allProjects)
                localStorage.setItem('projects', storedProjects)

                displayProjects()
                displaySidebarProjects()
                displayDropdownOptions()
                displayEachProject()

                document.querySelector('.form-container').style.display = "none"
                document.querySelector('fieldset.new-project>input#title').value = ''
                document.querySelector('fieldset.new-project>textarea#descr').value = ''
                saveEditBtn.style.display = 'none'
            }, {once: true})
        })
    })
}