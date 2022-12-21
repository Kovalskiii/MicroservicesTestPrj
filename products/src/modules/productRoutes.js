import { Router } from 'express';
import serviceHeader from "./core/serviceHeader.js";
import productCreate from "./controllers/productCreate.js";
import productDeleteById from "./controllers/productDeleteById.js";
import productGetAll from "./controllers/productGetAll.js";
import productGetById from "./controllers/productGetById.js";
import productSearchByName from "./controllers/productSearchByName.js";

const router = Router();

router.post('/create', serviceHeader('productCreate'), productCreate);
router.delete('/:productId', serviceHeader('productDeleteById'), productDeleteById);
router.get('/getAll', serviceHeader('productGetAll'), productGetAll);
router.get('/:productId', serviceHeader('productGetById'), productGetById);
router.post('/searchByName', serviceHeader('productSearchByName'), productSearchByName);

export default router;
