import Product  from  '../productModel.js'
import message from '../core/messages.js';
import pkg from 'lodash';
const { get } = pkg;


export default async function productSearchByName(req, res) {
  const name = get(req, 'body.name','');

  Product.find({name: { $regex: name, $options: 'i' }})
    .select('-__v -updatedAt -createdAt')
    .exec()
    .then((doc) => {
      if (doc.length) {
        res.status(200).json(message.success('Get products by name. Success', doc));
      } else {
        res.status(404).json(message.fail('No products for provided name. Fail'));
      }
    })
    .catch((error) => {
      res.status(400).json(message.fail('Get products by name. Error', error));
    });
}
