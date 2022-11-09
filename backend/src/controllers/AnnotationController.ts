import { Request, Response } from 'express';
import Annotation from '../models/Annotation';
import { createAnnotation, deleteAnnotation, findAnnotation } from '../services/AnnotationService';

class AnnotationController {
  async index(req: Request, res: Response) {
    return res.json(await Annotation.find());
  }

  async Annotation(req: Request, res: Response) {
    const findResponse = await findAnnotation(req, res)
    return res.status(findResponse.status).json(findResponse.message);
  }

  async store(req: Request, res: Response) {
    const createResponse = await createAnnotation(req, res);
    return res.status(createResponse.status).json(createResponse.message)
  }

  async delete(req: Request, res: Response) {
    const deleteResponse = await deleteAnnotation(req, res);
    return res.status(deleteResponse.status).json(deleteResponse.message);
  }
}

export default new AnnotationController();