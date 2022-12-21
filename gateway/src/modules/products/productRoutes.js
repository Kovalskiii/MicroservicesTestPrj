import { Router } from 'express';
import serviceHeader from "../core/serviceHeader.js";
import productCreate from "./services/productCreate.js";
import productDeleteById from "./services/productDeleteById.js";
import productGetAll from "./services/productGetAll.js";
import productGetById from "./services/productGetById.js";
import productSearchByName from "./services/productSearchByName.js";

const router = Router();

 router.post('/create', serviceHeader('productCreate'), productCreate);
 router.delete('/:productId', serviceHeader('productDeleteById'), productDeleteById);
 router.get('/getAll', serviceHeader('productGetAll'), productGetAll);
 router.get('/:productId', serviceHeader('productGetById'), productGetById);
 router.post('/searchByName', serviceHeader('productSearchByName'), productSearchByName);

export default router;
