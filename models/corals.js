// const coral = [
//   {
//     species: "Acropora",
//     name: "Princess Peach",
//     difficulty: "Hard",
//     price: "$200 1inch Frag",
//     qty: "3",
//     img: "https://e4snhovjacp.exactdn.com/wp-content/uploads/2022/01/TSA-Princess-Peach.png?strip=all&lossy=1&ssl=1",
//   },
//   {
//     species: "Euphyllia",
//     name: "Rapunzel",
//     difficulty: "hard",
//     price: "$200 per head",
//     qty: "1",
//     img: "https://www.queencitycorals.com/wp-content/uploads/2022/05/May2022ReshootTorchEG01.jpg",
//   },
//   {
//     species: "Micromussa",
//     name: "Holy Grail Acans/Micromussa",
//     difficulty: "easy",
//     price: "$100 per 4x polyps",
//     qty: "6",
//     img: "https://cdn.shopify.com/s/files/1/0364/5266/3436/products/TCKUFOHGMicro_500x.jpg?v=1603031220",
//   },
// ];


const { Decimal128 } = require('bson');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coralSchema = new Schema(
  {
    species: {
      type: String,
      //   required: true,
    },
    name: {
      type: String,
      //   required: true,
    },
    difficulty: {
      type: String,
      //   required: true,
    },
    price: {
      type: Decimal128,
      //   required: true, i need to change this  to a decimal128
    },
    qty: {
      type: Decimal128,
    },
    img: {
      type: String,
      // required: true, this is only for needing everything validated in order to pass 
    },
    completed: Boolean,
  },
  { timestamps: true }
);


module.exports = mongoose.model('Coral', coralSchema);

/*
enables the following from what is shown above 
Book.create();
Book.find();
Book.findById();
Book.findByIdAndUpdate();
Book.findByIdAndDelete();
*/