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
    console.log("all listings deleted");
  };

// const initDB = async () => {
//   await listing.deleteMany({});
//   initdata.data = initdata.data.map((obj) => ({
//     ...obj,
//     owner: "6a53428eb58cb2f4de56cacb",
//   }));
//   await listing.insertMany(initdata.data);
//   console.log("data was initialize");
// };

initDB();
