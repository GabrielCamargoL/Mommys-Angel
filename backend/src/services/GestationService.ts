import { Request, Response } from "express";
import multer from "multer";
import * as fs from 'node:fs';
import { Gestation } from "../models/Gestation";



export async function createGestation(req: Request, res: Response) {
  const GestationCreated = await Gestation.create(req.body);
  return {
    "message": GestationCreated,
    "status": 201
  };
}

export async function findGestationByUserId(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const gestation = await Gestation.find({ userId: id });
    if (gestation.length === 0) return { "message": "gestação Não encontrada", "status": 404 }

    return { "message": gestation, "status": 200 };

  }
  catch (err) {
    return { "message": { "error": err }, "status": 500 }
  }
}

export async function uploadImages(req: Request, res: Response) {
  const { id } = req.params;
  if (!req.files) {
    return { "message": "Envie pelo menos uma imagem por favor", "status": 400 }
  }

  const files = Object.assign(req.files)
  const gestation = await Gestation.findOne({ userId: id });
  if (!gestation) return { "message": "gestação não encontrado", "status": 404 }

  let updatedImages = []
  updatedImages = gestation.gallery;


  for (var key of Object.keys(files)) {
    updatedImages.push({
      "originalName": files[key].originalname,
      "mimeType": files[key].mimetype,
      "file": new Buffer(files[key].buffer).toString("base64")
    });
  }

  await gestation.update({ gallery: updatedImages });

  return { "message": "imagens enviadas com sucesso com sucesso", "status": 200 };

}

export async function deleteGestation(req: Request, res: Response) {
  const { id } = req.params;

  const gestation = await Gestation.findByIdAndDelete(id);
  if (gestation) return { "message": "gestação deletado com sucesso", "status": 200 };

  return { "message": "gestação não encontrado", "status": 404 }
}