import Product  from  '../productModel.js'
import message from '../core/messages.js';

export default async function productGetAll(req, res) {

  Product.find()
    .select('-__v -updatedAt -createdAt')
    .then((docs) => {
      if (docs.length) {
        res.status(200).json(message.success('Get all products. Success', docs));
      } else {
        res.status(404).json(message.fail('No products found. Fail'));
      }
    })
    .catch((error) => {
      res.status(400).json(message.fail('Get all products. Error', error));
    });
}
