export default class notesView {
    constructor(root,{onNoteSelect,onNoteAdd,onNoteEdit,onNoteDelete}={} ){
        this.root = root;
        this.onNoteSelect = onNoteSelect;
        this.onNoteAdd = onNoteAdd;
        this.onNoteDelete = onNoteDelete;
        this.onNoteEdit = onNoteEdit;
        this.root.innerHTML=`
        <div class="notes__sidebar">
            <button class="notes__add" type="button">Add Note</button>
            <div class="notes__list"></div>
                
        </div>
        <div class="notes__preview">
            <input class="notes__title" type="text" placeholder="New Note...">
            <textarea class="notes__body">Take Note...</textarea>
        </div> 
        `;
    }
}