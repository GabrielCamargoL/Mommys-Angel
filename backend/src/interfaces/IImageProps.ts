import { Document } from 'mongoose';

export interface IImageProps extends Document {
  name: string,
  file: string
}