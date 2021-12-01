import mongoose from 'mongoose';
import HitApi from './models/hitApi.model';

mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

// print mongoose logs in dev env
if (process.env.ENV === 'development') {
  mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */

export const connectToMongo = () => {
  mongoose.connect(process.env.MONGO_URI);
  return mongoose.connection;
};

export const getMongoConnection = () => mongoose.connection;

const models = { HitApi };
export default models;
