import Note from "./notes.model";
import INotes from "./notes.interface";

class NoteServices {

    async createNote(noteData:INotes){
        let note = new Note(noteData);
        return note.save()
    }
}

export default new NoteServices();