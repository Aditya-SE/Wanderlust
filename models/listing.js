const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    filename: {
      type: String,
      default: "listingimage",
    },
  },
  price: Number,
  location: String,
  country: String,
});

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;
