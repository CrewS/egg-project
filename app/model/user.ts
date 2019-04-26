import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const UserSchema = new Schema({
    username: { type: String },
    password: { type: String },
    email: { type: String },
  });
  return mongoose.model('User', UserSchema);
};
