let notes = []

function loadNotes() {
    const savedNotes = localStorage.getItem('quickNotes')
    return savedNotes ? JSON.parse(savedNotes) : []
}

function renderNotes() {
    const notesContainer = document.getElementById('notesContainer');

    if (notes.length === 0) {
        notesContainer.innerHTML = `
      <div class="empty-state">
        <h2>No notes yet</h2>
        <p>Create your first note to get started!</p>
        <button class="add-note-btn" >+ Add Your First Note</button>
      </div>
    `
        return
    }

    notesContainer.innerHTML = notes.map(note => `
    <div class="note-card">
      <h3 class="note-title">${note.title}</h3>
      <p class="note-content">${note.content}</p>
    </div>
    `).join('')
}

document.addEventListener('DOMContentLoaded', function () {
    renderNotes()
})