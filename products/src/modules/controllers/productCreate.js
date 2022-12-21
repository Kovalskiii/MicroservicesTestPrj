import mongoose from 'mongoose';
import Product  from  '../productModel.js'
import message from '../core/messages.js';
import pkg from 'lodash';
const { get } = pkg;


export default async function productCreate(req, res) {

  const productId = new mongoose.Types.ObjectId();
  const name = get(req, 'body.name', '');
  const description = get(req, 'body.description', '');
  const productImages = get(req, 'body.productImages', []);
  const currency = get(req, 'body.currency', 'usd');
  const productIsActive = get(req, 'body.productIsActive', true);
  const price = get(req, 'body.price', 0);

  // Create product
  const product = new Product({
    _id: productId,
    name,
    description,
    productImages: productImages,
    price,
    currency,
    productIsActive,
  });

  const payload = {
    productId: productId,
  };

  product
    .save()
    .then(() => {
      res.status(200).json(message.success('Product created. Success', payload));
    })
    .catch((error) => {
      res.status(400).json(message.fail('Product is not created. Error', error));
    });
}
