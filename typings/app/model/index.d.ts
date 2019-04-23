// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportReview from '../../../app/model/review';
import ExportUser from '../../../app/model/user';

declare module 'egg' {
  interface IModel {
    Review: ReturnType<typeof ExportReview>;
    User: ReturnType<typeof ExportUser>;
  }
}
