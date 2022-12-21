import message from '../../core/messages.js';
import axios from "axios";

export default async function productGetAll(req, res) {
  axios.get(`${process.env.PRODUCTS_SERVICE_URL}/product/getAll`)
    .then((response) => {
      res.status(response.status).json(response.data);
    })
    .catch((error) => {
      res.status(400).json(message.fail('Get all products. Error', error.response.data));
    });
}
