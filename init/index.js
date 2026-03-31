const mongoose = require("mongoose");
const listing = require("../models/listing");
const initdata = require("./data");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main()
  .then((result) => {
    console.log("db is also working");
  })
  .catch((err) => {
    console.log(err);
  });

const initDB = async () => {
  await listing.deleteMany({});
  await listing.insertMany(initdata.data);
  console.log("data was initialize");
};

initDB();
