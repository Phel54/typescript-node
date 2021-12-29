import express from 'express';
import notesController from './notes.controller';
import  Authentication  from '../middleware/users-auth.middleware';
import  Authorization from '../middleware/authorize-middleware';

const notesRouter = express.Router();


notesRouter.route('/create').post(Authentication.validateToken,Authorization.authorizeRoles('User'),notesController.createNote);

export default notesRouter;