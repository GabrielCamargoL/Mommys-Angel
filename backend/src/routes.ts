import { Request, Response, Router } from 'express';
import multer from 'multer';
import AuthController from './controllers/AuthController';
import GestationController from './controllers/GestationController';
import UserController from './controllers/UserController';

import authMiddleware from './middlewares/authMiddleware';


class Welcome {
  static getWelcome(req: Request, res: Response) {
    return res.send({ message: "Mommys Angel's API 👶 👩 🤰 " })
  }
}

const router = Router();
const upload = multer();

router.get('/', Welcome.getWelcome);

router.post('/auth', AuthController.authenticate);

router.get('/users', authMiddleware, UserController.index);
router.get('/users/:id', authMiddleware, UserController.Gestation);
router.post('/users', UserController.store);
router.delete('/users/:id', authMiddleware, UserController.delete);

router.get('/gestations', authMiddleware, GestationController.index);
router.get('/gestations/:id', authMiddleware, GestationController.Gestation);
router.post('/gestations', authMiddleware, GestationController.store);
router.put('/gestations/:id/images', authMiddleware, upload.array('image'), GestationController.uploadImages);
router.delete('/gestations/:id', authMiddleware, GestationController.delete);

export default router;