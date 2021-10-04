import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 1,
    maxlength: 50,
  },
  parent: {
    type: mongoose.Types.ObjectId,
    default: null,
    ref: "Category",
  }
}, {
  timestamps: true
});

const Category = mongoose.model("Category", categorySchema);

export default Category;