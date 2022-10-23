import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  mainCodeName: {
    type: String,
    required: true,
    trim: true,
  },
  subCode: {
    type: String,
    required: true,
  },
  useYn: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
