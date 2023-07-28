import notesView from "/notesView.js";

const app = document.getElementById("app");
const view = new notesView(app,{
    onNoteAdd() {
        console.log("Let's add a note! ");
    },
    onNoteEdit( newTitle , newBody ){
        console.log(newTitle);
        console.log(newBody);
    }
})

