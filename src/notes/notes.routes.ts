import express from 'express';
import notesController from './notes.controller';
import  Authentication  from 'src/middleware/users-auth.middleware';
import  Authorization from 'src/middleware/authorize-middleware';

const notesRouter = express.Router();


notesRouter.route('/create').post(notesController.createNote);

export default notesRouter;