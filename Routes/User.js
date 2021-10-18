import { Router } from 'express';
import UserController from '../Controllers/Users.js';

const router = Router();

router.get('/', UserController.fetchUsers);
router.post('/', UserController.addUser);
router.put('/:id', UserController.updateUser);
router.delete('/:id', UserController.deleteUser);

export default router;