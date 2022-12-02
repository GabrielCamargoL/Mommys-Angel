import { Document } from 'mongoose';

export interface IGestationDocument extends Document {
  gallery: Array<{}>;
  lastMenstruation: number;
  userId: string;
  created_at: Date
}