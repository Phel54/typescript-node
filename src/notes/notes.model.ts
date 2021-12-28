import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import INotes from './notes.interface';
import NotesModelInterface from './notes.interface';


const noteSchema = new Schema(
	{
        title: String,
        note:String,
        user:{
            type: Schema.Types.ObjectId,
            ref: 'Users',
            required: true,
           },
        isDeleted:{
            type:Boolean,
            default:false
        }
},
{ timestamps: true }
);

//Firstway
// noteSchema.statics.build = (attribute: INotes) => {
//     return new Note(attribute);
// }

// const Note = mongoose.model<any, NotesModelInterface>('Notes', noteSchema, 'Notes');

//Second way of adding the interface
// const NotesModel = (attribute: INotes) =>{
//     return new Note(attribute)
// }

//Another way
const Note = mongoose.model<INotes>('Notes', noteSchema, 'Notes');


export default Note;