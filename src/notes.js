import { displayContainer, allNotes } from "./index.js"

let deleteBtns = document.querySelectorAll('button.delete')
let editBtns = document.querySelectorAll('button.edit')

const selectBtns = document.querySelector('fieldset.select')
const projectForm = document.querySelector('fieldset.new-project')
const taskForm = document.querySelector('fieldset.new-task')
const noteForm = document.querySelector('fieldset.new-note')
const saveEditBtn = document.querySelector('button.save-edit')

export function displayNotes() {
    while(displayContainer.firstChild){
        displayContainer.removeChild(displayContainer.firstChild);
    }    
    let notesContainer = document.createElement('div')
    notesContainer.classList.add('notes-container')
    for (let note of allNotes) {
        let noteCard = document.createElement('div')
        noteCard.classList.add('note')
        noteCard.setAttribute('data-array-index', `${allNotes.indexOf(note)}`)
        
        let noteText = document.createElement('div')
        noteText.classList.add('note-text')
        noteText.textContent = note.content

        let noteOptions = document.createElement('div')
        noteOptions.classList.add('note-options')

        let deleteNote = document.createElement('button')
        deleteNote.classList.add('delete')
        deleteNote.setAttribute('data-array-index', `${allNotes.indexOf(note)}`)
        deleteNote.textContent = 'x'
        
        let editNote = document.createElement('button')
        editNote.classList.add('edit')
        editNote.setAttribute('data-array-index', `${allNotes.indexOf(note)}`)
        editNote.textContent = 'edit'

        noteCard.appendChild(noteText)
        noteOptions.appendChild(deleteNote)
        noteOptions.appendChild(editNote)
        noteCard.appendChild(noteOptions)
        notesContainer.appendChild(noteCard)
    }
    displayContainer.appendChild(notesContainer)
    deleteNote()
    editNote()
} 

export function deleteNote() {
    deleteBtns = document.querySelectorAll('button.delete')
    deleteBtns.forEach((button) => {
        button.addEventListener('click', () => {
            let arrayIndex = button.getAttribute('data-array-index')
            
            let domElements = document.querySelectorAll(`[data-array-index="${arrayIndex}"]`)
            domElements.forEach((element) => {
                element.parentNode.removeChild(element)
            })

            allNotes.splice(arrayIndex, 1)
            displayNotes()
        })
    })
}

export function editNote() {
    editBtns = document.querySelectorAll('button.edit')
    editBtns.forEach((button) => {
        button.addEventListener('click', function() {
            let arrayIndex = button.getAttribute('data-array-index')
    
            document.querySelector('.form-container').style.display = "flex"
            selectBtns.style.display = 'none'
            projectForm.style.display = 'none'
            taskForm.style.display = 'none'
            noteForm.style.display = 'flex'
            saveEditBtn.style.display = 'block'

            document.querySelector('fieldset.new-note>textarea').value = allNotes[arrayIndex].content 
           
            saveEditBtn.addEventListener('click', () => {
                let noteContent = document.querySelector('fieldset.new-note>textarea').value
                
                allNotes[arrayIndex].content = noteContent

                displayNotes()
                document.querySelector('.form-container').style.display = "none"
                document.querySelector('fieldset.new-note>textarea').value = ''
                saveEditBtn.style.display = 'none'
            }, {once: true})
        })
    })
}