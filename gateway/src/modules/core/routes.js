import productRouter from '../products/productRoutes.js'

export default function routes(app) {
  app.use('/product', productRouter);
  app.get('/', function(req, res) {
    res.send("Gateway server is alive")
  });
}
