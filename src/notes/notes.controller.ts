import notesServices from "./notes.services";
import INotes from "./notes.interface";
import {Request, Response} from 'express';
import apiResponse from '../util/apiResponse'

class NotesController {

    async createNote(req:Request, res:Response){
        const notesData: INotes = req.body;
        try {
            const notes = await notesServices.createNote(notesData);
            return apiResponse.successResponseWithData(res,'Note Created Successfully',notes)
         } catch (error: any) {
        console.log(error)
        return apiResponse.errorResponse(res, error)
         }
    }
}

export default new NotesController();