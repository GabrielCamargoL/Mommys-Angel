import { Request, Response } from 'express';
import Gestation from '../models/Gestation';
import { createGestation, deleteGestation, findGestationByUserId, uploadImages } from '../services/GestationService';

class GestationController {
  async index(req: Request, res: Response) {
    return res.json(await Gestation.find());
  }

  async Gestation(req: Request, res: Response) {
    const findResponse = await findGestationByUserId(req, res)
    return res.status(findResponse.status).json(findResponse.message);
  }

  async store(req: Request, res: Response) {
    const createResponse = await createGestation(req, res);
    return res.status(createResponse.status).json(createResponse.message)
  }

  async uploadImages(req: Request, res: Response) {
    const updatedGestation = await uploadImages(req, res);
    return res.status(updatedGestation.status).json(updatedGestation.message)
  }

  async delete(req: Request, res: Response) {
    const deleteResponse = await deleteGestation(req, res);
    return res.status(deleteResponse.status).json(deleteResponse.message);
  }
}

export default new GestationController();