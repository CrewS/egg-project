import { Application } from 'egg';

export default (app: Application) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  const ReviewSchema = new Schema({
    data: { type: Array },
    time: { type: Date },
  });
  return mongoose.model('Review', ReviewSchema);
};
