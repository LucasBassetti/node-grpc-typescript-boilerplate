import mongoose from 'mongoose';

const ModelRecord = mongoose.model<IModelRecord>(
  'ModelRecord',
  new mongoose.Schema(
    {
      model: String,
      updated: { type: Date, default: Date.now() },
      uri: { type: String, unique: true },
    },
    // { _id: false },
  ),
);

export { ModelRecord };
