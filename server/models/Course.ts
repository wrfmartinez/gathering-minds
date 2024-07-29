import { Schema, model } from "mongoose";

interface ICourse {
  title: string;
  videoSrc?: string;
  text: string;
  description: string;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  videoSrc: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Course = model<ICourse>("Course", courseSchema);

export default Course;