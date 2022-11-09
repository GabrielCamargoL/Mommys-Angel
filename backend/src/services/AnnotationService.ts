import { Request, Response } from "express";
import { Annotation } from "../models/Annotation";

export async function createAnnotation(req: Request, res: Response) {
  const annotationCreated = await Annotation.create(req.body);
  return {
    "message": annotationCreated,
    "status": 201
  };
}

export async function findAnnotation(req: Request, res: Response) {
  const { id } = req.params;

  try {
    const annotation = await Annotation.findById(id);
    if (annotation) {
      return {
        "message": annotation,
        "status": 200
      };
    }

    return {
      "message": "Anotação Não encontrada",
      "status": 404
    }
  }
  catch (err) {
    return {
      "message": {
        "error": err
      },
      "status": 500
    }
  }
}

export async function deleteAnnotation(req: Request, res: Response) {
  const { id } = req.params;

  const annotation = await Annotation.findByIdAndDelete(id);
  if (annotation) {
    return {
      "message": "Annotation deletado com sucesso",
      "status": 200
    };
  }
  return {
    "message": "Annotation não encontrado",
    "status": 404
  }
}