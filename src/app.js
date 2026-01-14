let notes = []

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
}

document.addEventListener('DOMContentLoaded', function () {
    renderNotes()
})