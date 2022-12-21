// ===== START SERVER =====//
const server = (app) => {
  const PORT = +process.env.PORT || 8000;

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  })
    .on('error', (err) => {
      console.log(err);
      process.exit();
    });
};

export default server;
