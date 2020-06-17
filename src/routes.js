import { Router } from 'express';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/api/v1/users/auth/sign_in', SessionController.store);

export default routes;
