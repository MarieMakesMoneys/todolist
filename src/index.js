import { displayTasks, changeCheckColor } from './home.js'
import { displayTimeline, sortedTasks } from './timeline.js'
import { displayProjects } from './projects.js'
import { displayNotes } from './notes.js'

// OBJECT FACTORIES

const taskFactory = (title, descr, dueDate, project, priority, status) => {
    return {title, descr, dueDate, project, priority, status}
}

const projectFactory = (title, descr, content) => {
    return {title, descr, content}
}

const noteFactory = (content) => {
    return {content}
}

// DUMMY CONTENT FOR STYLING PURPOSES

const flour = taskFactory("Flour", "1kg of flour", '20221114', "Groceries", '1', 'red')
const bread = taskFactory("Bread", "2 loaves of bread", '20231130', "Groceries", '2', 'green')
const packBathroom = taskFactory("Pack bathroom", "drawers + towels", '20221215', "Moving prep", '0', 'blank')
const packKitchen = taskFactory("Pack kitchen", "drawers + food", '20221214', "Moving prep", '0', 'green')
const packBedroom = taskFactory("Pack bedroom", "drawers + bed", '20230123', "Moving prep", '0', 'blank')

let groceries = projectFactory("Groceries", "go buy food", [])
let movingPrep = projectFactory("Moving prep", "get ready for a new chapter", [])

let note1 = noteFactory("0blbfjkzbfkjbe fzswjfhzshf kzugfbkz hdgfoizhsgo ishoghze ijgbez sif guifg iqsjzh fuiz f zfgiu zfiuzeif ziu fizh fizu g")
let note2 = noteFactory("1islfe bgiuegieu zgiuh zo ozpdp zifoh oegh  odp sfiiz foie hg")
let note3 = noteFactory("2blbfjkzbfkjbe fzswjfhzshf kzugfbkz hdgfoizhsgo ishoghze ijgbez sif guifg iqsjzh fuiz f zfgiu zfiuzeif ziu fizh fizu g")
let note4 = noteFactory("3islfe bgiuegieu zgiuh zo ozpdp zifoh oegh  odp sfiiz foie hg")

// STRUCTURAL ARRAYS & EXPORTS
const displayContainer = document.querySelector('.container')

let toDoList = projectFactory("To do list", "find all your tasks here", [])

let allTasks = []
let allProjects = [toDoList] // will be [toDoList]
let allNotes = []

export {taskFactory, allTasks, allNotes, allProjects, displayContainer, submitForm, displaySidebarProjects, displayDropdownOptions, displayEachProject }

// LOCAL STORAGE TESTS

const keys = Object.keys(localStorage)
for (let key of keys) {
    if (key === 'notes') {
        let storedNotes = localStorage.getItem(key)
        allNotes = JSON.parse(storedNotes)
    }
    if (key === 'projects') {
        let storedProjects = localStorage.getItem(key)
        allProjects = JSON.parse(storedProjects)
    }
    if (key === 'tasks') {
        let storedTasks = localStorage.getItem(key)
        allTasks = JSON.parse(storedTasks)
    }
}

// SIDEBAR DISPLAY
const sidebarProjectsList = document.querySelector('.projects-container')
function displaySidebarProjects() {
    while (sidebarProjectsList.firstChild) {
        sidebarProjectsList.removeChild(sidebarProjectsList.firstChild)
    }
    for (let project of allProjects) {
        let projectBtn = document.createElement('div')
        projectBtn.classList.add('title')
        projectBtn.setAttribute('data-array-index', allProjects.indexOf(project))
        projectBtn.textContent = project.title
        sidebarProjectsList.appendChild(projectBtn)
    }
}
displaySidebarProjects()


// HOME DISPLAY
displayTasks(allTasks)
const homeBtn = document.querySelector('.home>.header')
homeBtn.addEventListener('click', () => {
    displayTasks(allTasks)
    changeCheckColor(allTasks)
})


// TIMELINE DISPLAY
const timelineBtn = document.querySelector('.timeline>.header')
timelineBtn.addEventListener('click', () => {
    displayTimeline()
    changeCheckColor(sortedTasks)
})


// ALL PROJECTS DISPLAY
const projectsSectionBtn = document.querySelector('.projects>.header')
projectsSectionBtn.addEventListener('click', () => {
    displayProjects()
})

// INDIVIDUAL PROJECT DISPLAY
let projectBtns = document.querySelectorAll(".projects-container>.title")
function displayEachProject() {
    projectBtns = document.querySelectorAll(".projects-container>.title")
    for (let projectBtn of projectBtns) {
        let arrayIndex = projectBtn.getAttribute('data-array-index')
        let projectName = allProjects[arrayIndex]
        
        projectBtn.addEventListener('click', () => {
            while(displayContainer.firstChild){
                displayContainer.removeChild(displayContainer.firstChild);
            }
            displayTasks(projectName.content)
            changeCheckColor(projectName.content)
        })
    }
}
displayEachProject() 

// NOTES DISPLAY
const notesBtn = document.querySelector('.notes>.header')
notesBtn.addEventListener('click', () => {
    displayNotes(allNotes)
})

// FORM DISPLAY
const newBtn = document.querySelector('.new.header')
newBtn.addEventListener('click', () => {
    document.querySelector('.form-container').style.display = "flex"
    selectBtns.style.display = 'flex'
    projectForm.style.display = 'none'
    taskForm.style.display = 'none'
    noteForm.style.display = 'none'
    saveEditBtn.style.display = 'none'
    saveBtn.style.display = 'none'
})

const exitBtn = document.querySelector('.close-form')
exitBtn.addEventListener('click', () => {
    document.querySelector('.form-container').style.display = "none"
})

const selectBtns = document.querySelector('fieldset.select')

const newProjectBtn = document.querySelector('button.new-project')
const newTaskBtn = document.querySelector('button.new-task')
const newNoteBtn = document.querySelector('button.new-note')

const projectForm = document.querySelector('fieldset.new-project')
const taskForm = document.querySelector('fieldset.new-task')
const noteForm = document.querySelector('fieldset.new-note')

const saveBtn = document.querySelector('button.save')
const saveEditBtn = document.querySelector('button.save-edit')


newProjectBtn.addEventListener('click', () => {
    projectForm.style.display = 'flex'
    saveBtn.style.display = 'block'
    selectBtns.style.display = 'none'
})

newTaskBtn.addEventListener('click', () => {
    taskForm.style.display = 'flex'
    saveBtn.style.display = 'block'
    selectBtns.style.display = 'none'
})

newNoteBtn.addEventListener('click', () => {
    noteForm.style.display = 'flex'
    saveBtn.style.display = 'block'
    selectBtns.style.display = 'none'
})

function displayDropdownOptions() {
    const projectDropdown = document.querySelector('.new-task>select#project')
    while (projectDropdown.firstChild) {
        projectDropdown.removeChild(projectDropdown.firstChild)
    }
    for (let project of allProjects) {
        let option = document.createElement('option')
        option.setAttribute('value', `${project.title.toLowerCase()}`)
        option.setAttribute('id', allProjects.indexOf(project))
        option.textContent = project.title 
        projectDropdown.appendChild(option)
    }
}
displayDropdownOptions()

function submitForm() {
    saveBtn.addEventListener('click', () => {
        if (projectForm.style.display == 'flex') {
            let projectTitle = document.querySelector('fieldset.new-project>input#title').value
            let projectDescr = document.querySelector('fieldset.new-project>textarea#descr').value

            let newProject = projectFactory(projectTitle, projectDescr, [])
            allProjects.push(newProject)

            let storedProjects = JSON.stringify(allProjects)
            localStorage.setItem('projects', storedProjects)

            displaySidebarProjects()
            projectBtns = document.querySelectorAll(".projects-container>.title")

            document.querySelector('.form-container').style.display = "none"
            saveBtn.style.display = 'none'
            document.querySelector('fieldset.new-project>input#title').value = ''
            document.querySelector('fieldset.new-project>textarea#descr').value = ''
            displayDropdownOptions()
            displayProjects()
            displayEachProject()             
        } else if (taskForm.style.display == 'flex') {
            let taskProject = document.querySelector('fieldset.new-task>select#project').value
            let indexOfProject = document.querySelector('fieldset.new-task>select#project').selectedIndex
            let taskTitle = document.querySelector('fieldset.new-task>input#title').value
            let taskDescr = document.querySelector('fieldset.new-task>input#descr').value
            let taskDate = document.querySelector('fieldset.new-task>input#due-date').value
            let taskPriority = document.querySelector('fieldset.new-task>input#priority').value
            let taskStatus = 'red'

            taskDate = taskDate.replaceAll("-", "")
            
            let newTask = taskFactory(taskTitle, taskDescr, taskDate, taskProject, taskPriority, taskStatus)
            allTasks.push(newTask)
            let chosenProject = allProjects[indexOfProject]
            chosenProject = chosenProject.content
            chosenProject.push(newTask)

            let storedTasks = JSON.stringify(allTasks)
            localStorage.setItem('tasks', storedTasks)

            displayTasks(allTasks)
            document.querySelector('.form-container').style.display = "none"
            document.querySelector('fieldset.new-task>input#title').value = ''
            document.querySelector('fieldset.new-task>input#descr').value = ''
            saveBtn.style.display = 'none'
        } else if (noteForm.style.display == 'flex') {
            let noteContent = document.querySelector('fieldset.new-note>textarea').value

            let newNote = noteFactory(noteContent)
            allNotes.push(newNote)

            let storedNotes = JSON.stringify(allNotes)
            localStorage.setItem('notes', storedNotes)

            displayNotes()

            document.querySelector('.form-container').style.display = 'none'
            document.querySelector('fieldset.new-note>textarea').value = ''
            saveBtn.style.display = 'none'
        }
    })
}
submitForm()