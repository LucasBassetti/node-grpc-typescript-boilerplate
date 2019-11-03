import mongoose from 'mongoose';
import { ModelRecord } from './schemas';

const MONGO_URI = process.env.MONGO_URI;

const singleton = Symbol('Mongo');
const singletonEnforcer = Symbol('MongoEnforcer');

mongoose.connection.on('error', () => {
  console.log('MongoDB connection error:');
});

mongoose.connection.once('open', () => {
  console.log("We're connected to the database!");
});

mongoose.connection.on('disconnected', () => {
  console.log('Server terminated');
  process.exit(0);
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(
      'Mongoose default connection is disconnected due to application termination',
    );
  });
});

class Mongo {
  ModelRecord: mongoose.Model;

  constructor(enforcer: Symbol) {
    if (enforcer !== singletonEnforcer) {
      throw new Error('Cannot construct singleton');
    }

    this.ModelRecord = ModelRecord;
  }

  async connect() {
    try {
      await mongoose.connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async close() {
    await mongoose.close();
  }

  static get instance(): Mongo {
    if (!this[singleton]) {
      this[singleton] = new Mongo(singletonEnforcer);
    }

    return this[singleton];
  }
}

const mongo: Mongo = Mongo.instance;

export { mongo };
