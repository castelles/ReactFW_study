import { Router } from 'express';
import User from './app/models/user';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Caio Arthur',
    email: 'caio.telles@itbam.org.br',
    password_hash: '12345678',
  });
  res.json(user);
});

export default routes;
