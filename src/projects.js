import { displayContainer, allProjects } from "./index.js"

export default function displayProjects() {
    for (const project of allProjects) {
        let projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        projectDiv.textContent = project.title

        let projectTasks = document.createElement('ul')
        for (const task of project.content) {
            let taskLi = document.createElement('li')
            taskLi.textContent = task.title
            projectTasks.appendChild(taskLi)
        }

        projectDiv.appendChild(projectTasks)
        displayContainer.appendChild(projectDiv)
    }
}