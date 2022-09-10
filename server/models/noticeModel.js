import mongoose from 'mongoose';

const noticeSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  registDate: {
    type: Date,
  },
  detail: {
    type: String,
    required: true,
  },
  useYn: {
    type: Boolean,
  },
});

const Notice = mongoose.model('Notice', noticeSchema);

export default Notice;
