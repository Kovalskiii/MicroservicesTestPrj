import mongoose from 'mongoose';

const productSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    productImages: [
      {
        type: String,
        required: true,
        match: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/m,
      },
    ],

    price: {
      type: Number,
      required: true,
      match: /^\d+(\d{3})*(\.\d{1,2})?$/m,
    },

    currency: {
      type: String,
      required: true,
    },

    productIsActive: {
      type: Boolean,
      required: true,
    },
  },

  { timestamps: {} },
);

export default mongoose.model('Product', productSchema);
