import { Request, Response } from "express";
import { Gestation } from "../models/Gestation";

export async function createGestation(req: Request, res: Response) {
  const GestationCreated = await Gestation.create(req.body);
  return {
    "message": GestationCreated,
    "status": 201
  };
}

export async function findGestation(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const gestation = await Gestation.findById(id);
    if (gestation) return { "message": gestation, "status": 200 };

    return { "message": "gestação Não encontrada", "status": 404 }
  }
  catch (err) {
    return { "message": { "error": err }, "status": 500 }
  }
}

export async function deleteGestation(req: Request, res: Response) {
  const { id } = req.params;

  const gestation = await Gestation.findByIdAndDelete(id);
  if (gestation) return { "message": "gestação deletado com sucesso", "status": 200 };

  return { "message": "gestação não encontrado", "status": 404 }
}