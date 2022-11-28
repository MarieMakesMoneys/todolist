import displayTasks from './home.js'
import displayTimeline from './timeline.js'
import displayProjects from './projects.js'
import displayNotes from './notes.js'
import submitForm from './new.js'

// OBJECT FACTORIES

const taskFactory = (title, descr, dueDate, project, priority) => {
    return {title, descr, dueDate, project, priority}
}

const projectFactory = (title, descr, content) => {
    return {title, descr, content}
}

const noteFactory = (content) => {
    return {content}
}

// DUMMY CONTENT FOR STYLING PURPOSES

const flour = taskFactory("Flour", "1kg of flour", 20221114, "Groceries", 1)
const bread = taskFactory("Bread", "2 loaves of bread", 20231130, "Groceries", 2)
const packBathroom = taskFactory("Pack bathroom", "drawers + towels", 20221215, "Moving prep", 0)
const packKitchen = taskFactory("Pack kitchen", "drawers + food", 20221214, "Moving prep", 0)
const packBedroom = taskFactory("Pack bedroom", "drawers + bed", 20230123, "Moving prep", 0)

let toDoList = projectFactory("To do list", "find all your tasks here", [])
let groceries = projectFactory("Groceries", "go buy food", [flour, bread])
let movingPrep = projectFactory("Moving prep", "get ready for a new chapter", [packBathroom, packKitchen, packBedroom])

let note1 = noteFactory("blbfjkzbfkjbe fzswjfhzshf kzugfbkz hdgfoizhsgo ishoghze ijgbez sif guifg iqsjzh fuiz f zfgiu zfiuzeif ziu fizh fizu g")
let note2 = noteFactory("islfe bgiuegieu zgiuh zo ozpdp zifoh oegh  odp sfiiz foie hg")
let note3 = noteFactory("blbfjkzbfkjbe fzswjfhzshf kzugfbkz hdgfoizhsgo ishoghze ijgbez sif guifg iqsjzh fuiz f zfgiu zfiuzeif ziu fizh fizu g")
let note4 = noteFactory("islfe bgiuegieu zgiuh zo ozpdp zifoh oegh  odp sfiiz foie hg")

// STRUCTURAL ARRAYS
const displayContainer = document.querySelector('.container')

let allTasks = [flour, bread, packBathroom, packKitchen, packBedroom]
let allProjects = [groceries, movingPrep, toDoList]
let allNotes = [note1, note2, note3, note4]

export {allTasks, allNotes, allProjects, displayContainer}

// choix entre projet, tache ou liste
// ouvre le formulaire adapté
// crée soit une nouvelle array (projet), 
// soit un nouvel élément dans une array projet (et dans l'array allTasks)
// soit un nouvel élément dans l'array allNotes


// SIDEBAR DISPLAY
const sidebarProjectsList = document.querySelector('.projects-container')
function displaySidebarProjects() {
    for (let project of allProjects) {
        let projectBtn = document.createElement('div')
        projectBtn.classList.add('title')
        projectBtn.textContent = project.title
        sidebarProjectsList.appendChild(projectBtn)
    }
}
displaySidebarProjects()


// HOME DISPLAY
const homeBtn = document.querySelector('.home>.header')
homeBtn.addEventListener('click', () => {
    while(displayContainer.firstChild){
        displayContainer.removeChild(displayContainer.firstChild);
    }
    displayTasks(allTasks)
})


// TIMELINE DISPLAY
const timelineBtn = document.querySelector('.timeline>.header')
timelineBtn.addEventListener('click', () => {
    while(displayContainer.firstChild){
        displayContainer.removeChild(displayContainer.firstChild);
    }
    displayTimeline()
})


// ALL PROJECTS DISPLAY
const projectsSectionBtn = document.querySelector('.projects>.header')
projectsSectionBtn.addEventListener('click', () => {
    while(displayContainer.firstChild){
        displayContainer.removeChild(displayContainer.firstChild);
    }
    displayProjects()
})

// INDIVIDUAL PROJECT DISPLAY

const projectBtns = document.querySelectorAll(".projects-container>.title")
for (let projectBtn of projectBtns) {
    
    let projectNameIn = projectBtn.textContent.toLowerCase().split(" ")
    let projectNameOut = projectNameIn[0]
    for (let i = 1; i < projectNameIn.length; i++ ) {
        projectNameOut += projectNameIn[i].charAt(0).toUpperCase() + projectNameIn[i].slice(1)
    }
    let projectName = eval(projectNameOut)

    projectBtn.addEventListener('click', () => {
        while(displayContainer.firstChild){
            displayContainer.removeChild(displayContainer.firstChild);
        }
        displayTasks(projectName.content)
    })
}

// NOTES DISPLAY
const notesBtn = document.querySelector('.notes>.header')
notesBtn.addEventListener('click', () => {
    while(displayContainer.firstChild){
        displayContainer.removeChild(displayContainer.firstChild);
    }
    displayNotes()
})

// FORM DISPLAY
const newBtn = document.querySelector('.new.header')
newBtn.addEventListener('click', () => {
    document.querySelector('.form-container').style.display = "flex"
})

const exitBtn = document.querySelector('.close-form')
exitBtn.addEventListener('click', () => {
    document.querySelector('.form-container').style.display = "none"
})