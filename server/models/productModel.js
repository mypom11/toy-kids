import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gerne: {
    type: String,
    required: true,
  },
  ages: {
    type: String,
    required: true,
  },
  registDate: {
    type: Date,
  },
  like: {
    type: Number,
  },
  detail: {
    type: String,
  },
  comment: [
    {
      user_id: {
        type: String,
      },
      registDate: {
        type: Date,
      },
      useYn: {
        type: Boolean,
      },
    },
  ],
});

const Product = mongoose.model('Product', productSchema);

export default Product;
