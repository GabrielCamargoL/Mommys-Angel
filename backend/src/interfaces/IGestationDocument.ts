import { Document } from 'mongoose';

export interface IGestationDocument extends Document {
  gallery: Array<{}>;
  lastMenstruation: Date;
  userId: string;
  created_at: Date
}