import mongoose, { model, Schema, Document } from "mongoose";

export interface IGestation extends Document {
  title: string;
  description: string;
  created_at: Date;
}

export const GestationSchema: Schema = new mongoose.Schema<IGestation>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    requered: true,
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const Gestation = model('Gestation', GestationSchema);

export default Gestation;