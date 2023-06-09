import IProduct from '../../interfaces/IProducts';
import updateProductRepository from '../../repositories/product/update-product-repository';

const updateProductService = async (id: string, params: IProduct) => {
   try {
      await updateProductRepository(id, params);
      return {
         statusCode: 200,
         body: 'Product successfully updated!',
      };
   } catch (error) {
      return { statusCode: 400, body: 'Error updating Product, try again later.' };
   }
};

export default updateProductService;
