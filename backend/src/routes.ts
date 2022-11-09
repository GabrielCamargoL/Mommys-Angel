import { Router } from 'express';
import AuthController from './controllers/AuthController';
import AnnotationController from './controllers/AnnotationController';
import UserController from './controllers/UserController';

import authMiddleware from './middlewares/authMiddleware';

const router = Router();

router.post('/auth', AuthController.authenticate);

router.get('/users', authMiddleware, UserController.index);
router.get('/users/:id', authMiddleware, UserController.Annotation);
router.post('/users', UserController.store);
router.delete('/users/:id', authMiddleware, UserController.delete);

router.get('/annotations', authMiddleware, AnnotationController.index);
router.get('/annotations/:id', authMiddleware, AnnotationController.Annotation);
router.post('/annotations', authMiddleware, AnnotationController.store);
router.delete('/annotations/:id', authMiddleware, AnnotationController.delete);

export default router;