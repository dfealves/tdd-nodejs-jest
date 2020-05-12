module.exports = (app) => {
  app
    .route("/user")
    .get(app.routes.users.findAll)
    .post(app.routes.users.create);
};
