import { Router } from 'express';
import AuthController from './controllers/AuthController';
import GestationController from './controllers/GestationController';
import UserController from './controllers/UserController';

import authMiddleware from './middlewares/authMiddleware';

const router = Router();

router.post('/auth', AuthController.authenticate);

router.get('/users', authMiddleware, UserController.index);
router.get('/users/:id', authMiddleware, UserController.Gestation);
router.post('/users', UserController.store);
router.delete('/users/:id', authMiddleware, UserController.delete);

router.get('/Gestations', authMiddleware, GestationController.index);
router.get('/Gestations/:id', authMiddleware, GestationController.Gestation);
router.post('/Gestations', authMiddleware, GestationController.store);
router.delete('/Gestations/:id', authMiddleware, GestationController.delete);

export default router;