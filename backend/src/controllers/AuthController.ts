import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';
import Gestation from '../models/Gestation';

class AuthController {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password')

    if (!user) {
      return res.sendStatus(404);
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.sendStatus(401);
    }

    const gestations = await Gestation.find({ userId: user.id });

    const token = jwt.sign({ id: user._id }, 'segredo');

    user.password = undefined;

    return res.json({
      user,
      gestations,
      token
    })
  }
}

export default new AuthController();