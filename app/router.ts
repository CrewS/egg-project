import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;
  const userRequired = middleware.userRequired();
  router.get('/', controller.home.index);
  router.get('/login', controller.login.login);
  router.get('/register', controller.login.register);
  router.post('/register_account', controller.user.register);
  router.get('/admin', controller.admin.index);
  router.get('/logout', controller.login.logout);
  router.get('/user/add', controller.user.add);
  router.get('/user/find', controller.user.find);
  router.get('/api/user/get', userRequired, controller.api.user.get);
  router.get('/review', controller.review.review)
  router.get('/review/get', controller.api.review.get)
  router.post('/review/add', controller.api.review.add)
  router.post('/auth', app.passport.authenticate('local', { successRedirect: '/admin',failureRedirect: '/login', }));
};
