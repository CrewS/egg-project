// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportUserRequired from '../../../app/middleware/user_required';

declare module 'egg' {
  interface IMiddleware {
    userRequired: typeof ExportUserRequired;
  }
}
