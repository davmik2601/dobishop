import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 80,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
    max: 1000000,
  },
  description: {
    type: String,
    maxlength: 5000,
  },
  count: {
    type: Number,
    required: true,
    min: 0,
    max: 5000,
    default: 0,
  },
  onSale: {
    type: Boolean,
    required: true,
    default: false,
  },
  images: [
    {
      type: String,
      required: true,
      default: '',
    }
  ],
  sale: {
    type: Number,
    required: true,
    default: 0,
  },
  categories: [
    {
      type: mongoose.Types.ObjectId,
      ref: 'Category',
    }
  ],

}, {
  timestamps: true
});

const Product = mongoose.model("Product", productSchema);

export default Product;