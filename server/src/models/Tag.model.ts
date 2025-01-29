import mongoose from "mongoose";


const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    set: (value: string) => {
      return `/${value.replace(/^\/+/, "").toLowerCase()}`;
    },
    validate: {
      validator: (value: string) => /^\/[a-z0-9-]+$/.test(value), // Validate format
      message: "Slug must start with '/' and contain only lowercase letters, numbers, and hyphens.",
    }
  }
});

const Tag = mongoose.model("Tag", tagSchema);
export default Tag;