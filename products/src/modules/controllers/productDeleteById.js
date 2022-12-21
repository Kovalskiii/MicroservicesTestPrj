import Product  from  '../productModel.js'
import message from '../core/messages.js';
import pkg from 'lodash';
const { get } = pkg;


export default async function productDeleteById(req, res) {

  const productId = get(req, 'params.productId');

  Product.findByIdAndDelete({ _id: productId })
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(message.success('Product deleted. Success'));
      } else {
        res.status(404).json(message.fail('Product not found. Fail'));
      }
    })
    .catch((error) => {
      res.status(400).json(message.fail('Product delete error. Error', error));
    });
}
