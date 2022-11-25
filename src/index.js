const taskFactory = (title, descr, dueDate, priority) => {
    return {title, descr, dueDate, priority}
}

const eggs = taskFactory("Eggs", "3 fresh eggs", "26/11/2022", 0)


const newBtn = document.querySelector('.new.header')
newBtn.addEventListener('click', () => {
    document.querySelector('.form-container').style.display = "flex"
})

const closeForm = document.querySelector('.close-form')
closeForm.addEventListener('click', () => {
    document.querySelector('.form-container').style.display = "none"
})
/* 
on clique sur "New"
un formulaire s'ouvre
on choisit de créer un nouveau projet, une nouvelle tâche, ou une nouvelle note
si on clique projet :
    on choisit un titre
    quand on sauve, ça crée a new array, dont le nom = le titre concatené
si on clique tâche :
    on sélectionne dans quel projet inscrire cette tâche
    on peut choisir le titre, la description, la date et la priorité de la tâche
    -> taskFactory crée un nouvel obj tâche dans arrayProject
si on clique notes : 
    text area
    -> notesFactory

tous les projets sont rangés dans l'array "allTasks" (an array of arrays of objects)

quand la page charge, on est sur HOME
    display de l'array allTasks

clique sur Timeline :
    display de l'array allTasks où les tâches sont rangées dans l'ordre chrono

clique sur Projects :
    display de l'array projects : 
        display de chaque array project
        titre + titre de chaque tâche indenté
    clique sur le nom d'un projet :
        display de son array et des tâches contenues

clique sur Notes :
    display de l'array Notes : 
        chaque item est display sur sa carte avec un bouton X

    

-> créer un module par page (home, timeline, projects, notes, new)





*/