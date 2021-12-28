import notesServices from "./notes.services";
import INotes from "./notes.interface";
import {Request, Response} from 'express';
import apiResponse from '../middleware/apiResponse'

class NotesController {

    async createNote(req:Request, res:Response){
        const notesData: INotes = req.body;
        try {
            const notes = await notesServices.createNote(notesData);
         } catch (error: any) {
        console.log(error)
        return apiResponse.errorResponse(res, error)
         }
    }
}

export default new NotesController();