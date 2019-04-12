import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router, middleware } = app;
  const userRequired = middleware.userRequired();
  router.get('/', controller.home.index);
  router.get('/login', controller.login.login);
  router.get('/admin', controller.admin.index);
  router.get('/logout', controller.login.logout);
  router.get('/user/add', controller.user.add);
  router.get('/user/find', controller.user.find);
  router.get('/api/user/get', userRequired, controller.api.user.get);

  router.post('/auth', app.passport.authenticate('local', { successRedirect: '/admin',failureRedirect: '/login', }));
};
