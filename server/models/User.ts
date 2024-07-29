import { Schema, model } from "mongoose";

interface IUser {
  name: string;
  email: string;
  avatar?: string;
  hashedPassword: string;
}

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  // setup as a string for now but will change depending on the method: image upload, link src, or gravatar.
  avatar: String,
  hashedPassword: {
    type: String,
    required: true,
  }
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.hashedPassword;
  }
})

const User = model<IUser>("User", userSchema);

export default User;