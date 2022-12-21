import Product  from  '../productModel.js'
import message from '../core/messages.js';
import pkg from 'lodash';
const { get } = pkg;


export default async function productGetById(req, res) {
  const productId = get(req, 'params.productId');

  Product.findById(productId)
    .select('-__v -updatedAt -createdAt')
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(message.success('Get product by id. Success', doc));
      } else {
        res.status(404).json(message.fail('No products for provided id. Fail'));
      }
    })
    .catch((error) => {
      res.status(400).json(message.fail('Get product by id. Error', error));
    });
}
