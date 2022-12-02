import mongoose, { model, Schema, Document } from "mongoose";
import { IImageProps } from "../interfaces/IImageProps";

export interface IGestation extends Document {
  gallery: Array<IImageProps>;
  lastMenstruation: number;
  userId: string;
  created_at: Date
}

export const GestationSchema: Schema = new mongoose.Schema<IGestation>({
  gallery: {
    type: [{}],
    required: false,
  },
  lastMenstruation: {
    type: Number,
    requered: true,
  },
  userId: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

export const Gestation = model('Gestation', GestationSchema);

export default Gestation;