import mongoose from 'mongoose'


var reviewSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }, 
  rating: {
    type: Number,
    required: true,
    default:0
  }, 
  comments: {
    type: String
  }
}, {timeStamps: true})

var productSchema = mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  catogery: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  countInStock: {
    type: Number,
    required: true,
    default:0
  }, 
  numreviews: {
    type: Number,
    required: true,
    default: 0
  }, 
  reviews: [reviewSchema]
}, { timeStamps: true });

export var Product = mongoose.model('products', productSchema)