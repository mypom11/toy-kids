import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
  mainCodeName: {
    type: String,
    required: true,
    trim: true,
  },
  subCode: [
    {
      title: {
        type: String,
      },
      useYn: {
        type: Boolean,
      },
    },
  ],
});

const Category = mongoose.model('Category', categorySchema);

export default Category;
