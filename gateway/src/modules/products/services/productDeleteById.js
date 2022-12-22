import axios from "axios";
import message from '../../core/messages.js';
import pkg from 'lodash';
const { get } = pkg;

export default async function productDeleteById(req, res) {
  const productId = get(req, 'params.productId');
  const url = process.env.DOCKER_PRODUCTS_SERVICE_URL || process.env.PRODUCTS_SERVICE_URL;

  axios.delete(`${url}/product/${productId}`, {
  })
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(message.fail('Product delete error. Error', error.response?.data));
    });
}
