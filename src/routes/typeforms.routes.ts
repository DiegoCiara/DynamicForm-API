
import TypeformController from '@controllers/TypeformController';
import Router from 'express';

const routes = Router();

routes.get('/', TypeformController.findAll);
routes.get('/models/:id', TypeformController.findById);
routes.get('/name/:name', TypeformController.findByType);
routes.post('/:id/aditionals', TypeformController.insertAditionals);

export default routes;
