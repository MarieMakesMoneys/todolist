import { displayContainer, allNotes } from "./index.js"

export default function displayNotes() {
    let notesContainer = document.createElement('div')
    notesContainer.classList.add('notes-container')
    for (let note of allNotes) {
        let noteCard = document.createElement('div')
        noteCard.classList.add('note-card')
        
        let noteText = document.createElement('div')
        noteText.classList.add('note-text')
        noteText.textContent = note.content

        let deleteNote = document.createElement('button')
        deleteNote.classList.add('delete')
        deleteNote.textContent = 'x'
        
        noteCard.appendChild(noteText)
        noteCard.appendChild(deleteNote)
        notesContainer.appendChild(noteCard)
    }
    displayContainer.appendChild(notesContainer)
}  