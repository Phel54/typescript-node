import express from 'express';
import notesController from './notes.controller';
const notesRouter = express.Router();


notesRouter.route('/create').post(notesController.createNote);

export default notesRouter;