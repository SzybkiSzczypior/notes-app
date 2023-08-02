import notesView from "./notesView.js";

export default class App {
    constructor(root){
        this.notes = [];
        this.activeNote = null;
        this.view = new notesView(root);
        
    }

    _handlers () {
        return {
            onNoteSelect: noteId => {
                console.log("note selected : "+ noteId);
            },
            onNoteAdd: () => {
                console.log("note selected : "+ noteId);
            },
            onNoteEdit: (title,body) => {
                console.log(title, body);
            },
            onNoteDelete: noteId => {
                console.log("note selected : "+ noteId);
            }
            
        }
    }
}