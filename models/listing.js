const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://unsplash.com/photos/vagator-or-ozran-beach-aerial-panoramic-view-in-north-goa-india-SI9OBANtEx0",
    set: (v) =>
      v === ""
        ? "https://unsplash.com/photos/vagator-or-ozran-beach-aerial-panoramic-view-in-north-goa-india-SI9OBANtEx0"
        : v,
  },
  price: Number,
  location: String,
  country: String,
});

const listing = mongoose.model("listing", listingSchema);
module.exports = listing;
