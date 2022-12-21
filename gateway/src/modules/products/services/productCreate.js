import axios from 'axios';
import message from '../../core/messages.js';
import pkg from 'lodash';
const { get } = pkg;

export default async function productCreate(req, res) {
  const name = get(req, 'body.name', '');
  const description = get(req, 'body.description', '');
  const productImages = get(req, 'body.productImages', []);
  const currency = get(req, 'body.currency', 'usd');
  const productIsActive = get(req, 'body.productIsActive', true);
  const price = get(req, 'body.price', 0);

  axios.post(`${process.env.PRODUCTS_SERVICE_URL}/product/create`, {
    name,
    description,
    productImages,
    currency,
    productIsActive,
    price
  })
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(message.fail('Product is not created. Error', error.response?.data));
    });
}
