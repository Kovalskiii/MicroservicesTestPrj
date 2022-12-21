import axios from "axios";
import message from '../../core/messages.js';
import pkg from 'lodash';
const { get } = pkg;

export default async function productGetById(req, res) {
  const productId = get(req, 'params.productId');

  axios.get(`${process.env.PRODUCTS_SERVICE_URL}/product/${productId}`)
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(message.fail('Get product by id. Error', error.response.data));
    });
}
