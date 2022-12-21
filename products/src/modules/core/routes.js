import productRouter from '../productRoutes.js'

export default function routes(app) {
  app.use('/product', productRouter);
  app.get('/', function(req, res) {
    res.send("Products server is alive")
  });
}
