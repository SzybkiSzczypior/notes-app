import notesView from "/notesView.js";

const app = document.getElementById("app");
const view = new notesView(app,{
    onNoteSelect() {
        console.log("note has been selected");
    }
})