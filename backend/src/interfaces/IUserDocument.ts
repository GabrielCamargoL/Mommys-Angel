import { Document } from 'mongoose';

export interface IUserDocument extends Document {
  username: string;
  email: string;
  password: string;
  activeGestation: string;
  created_at: Date
}