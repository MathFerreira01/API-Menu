import { Request, Response } from 'express';
import createProductService from '../../services/product/create-product-service';

const createProductController = async (req: Request, res: Response) => {
   const response = await createProductService(req.body);
   
   return res.status(response.statusCode).json(response.body);
};

export default createProductController;
