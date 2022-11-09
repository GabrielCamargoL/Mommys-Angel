import mongoose, { model, Schema, Document } from "mongoose";

export interface IAnnotation extends Document {
  title: string;
  description: string;
  created_at: Date;
}

export const AnnotationSchema: Schema = new mongoose.Schema<IAnnotation>({
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

export const Annotation = model('Annotation', AnnotationSchema);

export default Annotation;