import axios from 'axios';
import message from '../../core/messages.js';
import pkg from 'lodash';
const { get } = pkg;

export default async function productSearchByName(req, res) {
  const name = get(req, 'body.name','');
  const url = process.env.DOCKER_PRODUCTS_SERVICE_URL || process.env.PRODUCTS_SERVICE_URL;

  axios.post(`${url}/product/searchByName`, {
    name
  })
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(message.fail('Get products by name. Error', error.response?.data));
    });
}
