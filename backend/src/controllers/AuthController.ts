import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../models/User';

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

    const token = jwt.sign({ id: user._id }, 'segredo', { expiresIn: '1d' });

    user.password = undefined;

    return res.json({
      user,
      token
    })
  }
}

export default new AuthController();