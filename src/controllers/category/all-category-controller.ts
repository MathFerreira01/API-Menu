import { Request, Response } from 'express';
import allCategoriesService from '../../services/category/all-categories-service';

const allCategoriesController = async (req: Request, res: Response) => {
   const response = await allCategoriesService();

   return res.status(response.statusCode).json(response.body);
};

export default allCategoriesController;
