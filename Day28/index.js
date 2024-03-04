const mongoose = require("mongoose");

async function connectDb() {
  mongoose
    .connect("mongodb://127.0.0.1:27017/productManagement")
    .then(() => console.log("Connected To Database successfuly.."))
    .catch((err) => console.log("Somthing Went Wrong !!", err));
}

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: [1, "Price Must Be Positive"] },
  description: { type: String },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: new Date().toISOString() },
});

const Product = mongoose.model("Product", productSchema);

//Add this array of sample products to your database
const products = [
  {
    name: 'Laptop',
    price: 1200,
    description: 'High-performance laptop with powerful specs.',
    inStock: true,
  },
  {
    name: 'Smartphone',
    price: 800,
    description: 'Latest smartphone with advanced features.',
    inStock: true,
  },
  {
    name: 'Headphones',
    price: 150,
    description: 'Over-ear headphones with noise-cancelling technology.',
    inStock: true,
  },
  {
    name: 'Smartwatch',
    price: 250,
    description: 'Fitness tracker and smartwatch with health monitoring.',
    inStock: false,
  },
  {
    name: 'Camera',
    price: 600,
    description: 'Digital camera with high-resolution imaging.',
    inStock: true,
  },
  {
    name: 'Gaming Console',
    price: 400,
    description: 'Next-gen gaming console for immersive gaming experiences.',
    inStock: true,
  },
  {
    name: 'Bluetooth Speaker',
    price: 80,
    description: 'Portable Bluetooth speaker with crisp sound.',
    inStock: true,
  },
  {
    name: 'Tablet',
    price: 300,
    description: 'Slim and lightweight tablet for on-the-go productivity.',
    inStock: true,
  },
  {
    name: 'Coffee Maker',
    price: 50,
    description: 'Automatic coffee maker for brewing your favorite coffee.',
    inStock: true,
  },
  {
    name: 'Fitness Tracker',
    price: 100,
    description: 'Wearable fitness tracker with heart rate monitoring.',
    inStock: false,
  },
  {
    name: 'External Hard Drive',
    price: 120,
    description: 'Large-capacity external hard drive for data storage.',
    inStock: true,
  },
  {
    name: 'Wireless Mouse',
    price: 30,
    description: 'Ergonomic wireless mouse for comfortable computing.',
    inStock: true,
  },
  {
    name: 'Portable Charger',
    price: 20,
    description: 'Compact portable charger for on-the-go device charging.',
    inStock: true,
  },
  {
    name: 'Smart Bulbs',
    price: 15,
    description: 'Set of smart bulbs for customizable lighting at home.',
    inStock: true,
  },
  {
    name: 'Backpack',
    price: 40,
    description: 'Durable backpack with multiple compartments for storage.',
    inStock: true,
  },
  {
    name: 'Wireless Earbuds',
    price: 120,
    description: 'True wireless earbuds for immersive audio experiences.',
    inStock: false,
  },
  {
    name: 'Graphic Tablet',
    price: 200,
    description: 'Digital graphic tablet for artists and designers.',
    inStock: true,
  },
  {
    name: 'Desk Chair',
    price: 150,
    description: 'Comfortable desk chair with adjustable features.',
    inStock: true,
  },
  {
    name: 'Air Purifier',
    price: 80,
    description: 'HEPA air purifier for cleaner and fresher indoor air.',
    inStock: true,
  },
  {
    name: 'Electric Toothbrush',
    price: 40,
    description: 'Electric toothbrush for effective dental care.',
    inStock: true,
  },
];

async function sortByPrice() {
  await Product.find()
    .sort({ price: -1 })
    .then((products) => console.log(products))
    .catch((err) => console.log(err));
}

async function sortByName() {
    await Product.find().sort({name:1}).then(products=>console.log(products));
}
async function paginationProducts() {
  await Product.find()
    .limit(5)
    .then((products) => {
      console.log(products);
    });
}
async function costumPaginationProducts(pageSize, pageNumber) {
  await Product.find()
    .skip((pageNumber - 1) * pageSize)
    .limit(pageSize)
    .then((products) => {
      console.log(products);
    });
}
async function productsCount() {
  const [{ ProductCount }] = await Product.aggregate([
    { $group: { _id: "", ProductCount: { $sum: 1 } } },
    { $project: { _id: 0 } },
  ]);
  console.log(`The Count Of Products is : ${ProductCount}`);
}

async function averagePrice() {
  const [{avgPrice}] = await Product.aggregate([{ $group: { _id: "", avgPrice: { $avg: "$price" } } }]);
  console.log(`Average Price For Products is : ${avgPrice}`);
}

(async function main() {
  await connectDb();
  //   await paginationProducts();
  await costumPaginationProducts(4,5);
//   productsCount();
//   averagePrice();
// sortByName();
  //   await sortByPrice();
  //--Insertion Into Database
    // await Product.insertMany(products);
    // await Product.deleteMany({price:{$gt:1}})

})();
