export default class notesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]")
        return notes;
    }
    static saveNote (noteToSave) {

    }
    static deleteNote(id) {
         
    }
    
 }