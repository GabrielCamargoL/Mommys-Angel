import { Request, Response } from "express";
import { User } from "../models/User";
import jwt from 'jsonwebtoken';
import { responseWithStatus } from "../utils/responseWithStatus";

export async function createUser(req: Request, res: Response) {
  const { username, email, password } = req.body

  const userExists = await User.find({ email })

  if (userExists.length > 0) return { "message": { "error": "Este e-mail já foi usado!", }, "status": 409 };

  const user = await User.create(req.body);
  user.password = undefined;
  const token = jwt.sign({ id: user.id, }, 'segredo');

  return responseWithStatus({ user, token }, 201);
}


export async function findUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    return { "message": user, "status": 200 };
  } catch (err) {
    return { "message": { "error": "usuário não encontrado" }, "status": 404 }
  }
}

export async function deleteUser(req: Request, res: Response) {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    return { "message": "usuário deletado com sucesso", "status": 200 };
  } catch (err) {
    return { "message": { "error": "usuário não encontrado" }, "status": 404 }
  }
}