// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportTest from '../../../app/service/Test';
import ExportNews from '../../../app/service/news';
import ExportReview from '../../../app/service/review';
import ExportUser from '../../../app/service/user';

declare module 'egg' {
  interface IService {
    test: ExportTest;
    news: ExportNews;
    review: ExportReview;
    user: ExportUser;
  }
}
