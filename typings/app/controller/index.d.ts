// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAdmin from '../../../app/controller/admin';
import ExportHome from '../../../app/controller/home';
import ExportLogin from '../../../app/controller/login';
import ExportReview from '../../../app/controller/review';
import ExportUser from '../../../app/controller/user';
import ExportApiReview from '../../../app/controller/api/review';
import ExportApiUser from '../../../app/controller/api/user';

declare module 'egg' {
  interface IController {
    admin: ExportAdmin;
    home: ExportHome;
    login: ExportLogin;
    review: ExportReview;
    user: ExportUser;
    api: {
      review: ExportApiReview;
      user: ExportApiUser;
    }
  }
}
