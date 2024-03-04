const mongoose = require("./configDb.js");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: [1, "Price Must Be Positive !"] },
  category: { type: String, required: false },
  description: { type: String },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: new Date().toUTCString() },
});

const Product = mongoose.model("Product", productSchema);

//Add this array of sample products to your database

const getAll = async () => {
  try {
    const products = await Product.find();
    if (!products.length) {
      console.log({ msg: "Products Data base Are Empty !" });
    }
    return products;
  } catch (error) {
    throw new Error(error);
  }
};

// getAll().then(data=>console.log(data)).catch(err=>console.log(err));
// console.log(getAll());

const getByName = async (name) => {
  try {
    const product = await Product.find({ name: name });
    if (product == null) {
      return { msg: "Product Not Found !" };
    }
    return product;
  } catch (error) {
    throw new Error(error);
  }
};
const createProduct = async ({ name, price, category, description }) => {
  try {
    await new Product({ name, price, category, description }).save();
    return { msg: "Product Created Succcessfuly" };
  } catch (error) {
    console.log(error);
    throw new Error({ Error: "Error While Creating Product !!" });
  }
};

const insertMany = async () => {
  try {
    // await Product.deleteMany({price:{$gt:1}});
    const products = [
      {
        name: "Laptop",
        price: 1200,
        category: "Electronics",
        description: "High-performance laptop with powerful specs.",
        inStock: true,
      },
      {
        name: "Smartphone",
        price: 800,
        category: "Electronics",
        description: "Latest smartphone with advanced features.",
        inStock: true,
      },
      {
        name: "Headphones",
        price: 150,
        category: "Electronics",
        description: "Over-ear headphones with noise-cancelling technology.",
        inStock: true,
      },
      {
        name: "Smartwatch",
        price: 250,
        category: "Electronics",
        description: "Fitness tracker and smartwatch with health monitoring.",
        inStock: false,
      },
      {
        name: "Camera",
        price: 600,
        category: "Electronics",
        description: "Digital camera with high-resolution imaging.",
        inStock: true,
      },
      {
        name: "Gaming Console",
        price: 400,
        category: "Electronics",
        description:
          "Next-gen gaming console for immersive gaming experiences.",
        inStock: true,
      },
      {
        name: "Bluetooth Speaker",
        price: 80,
        category: "Electronics",
        description: "Portable Bluetooth speaker with crisp sound.",
        inStock: true,
      },
      {
        name: "Tablet",
        price: 300,
        category: "Electronics",
        description: "Slim and lightweight tablet for on-the-go productivity.",
        inStock: true,
      },
      {
        name: "Coffee Maker",
        price: 50,
        category: "Home Appliances",
        description: "Automatic coffee maker for brewing your favorite coffee.",
        inStock: true,
      },
      {
        name: "Fitness Tracker",
        price: 100,
        category: "Electronics",
        description: "Wearable fitness tracker with heart rate monitoring.",
        inStock: false,
      },
      {
        name: "External Hard Drive",
        price: 120,
        category: "Electronics",
        description: "Large-capacity external hard drive for data storage.",
        inStock: true,
      },
      {
        name: "Wireless Mouse",
        price: 30,
        category: "Electronics",
        description: "Ergonomic wireless mouse for comfortable computing.",
        inStock: true,
      },
      {
        name: "Portable Charger",
        price: 20,
        category: "Electronics",
        description: "Compact portable charger for on-the-go device charging.",
        inStock: true,
      },
      {
        name: "Smart Bulbs",
        price: 15,
        category: "Home Appliances",
        description: "Set of smart bulbs for customizable lighting at home.",
        inStock: true,
      },
      {
        name: "Backpack",
        price: 40,
        description: "Durable backpack with multiple compartments for storage.",
        inStock: true,
      },
      {
        name: "Wireless Earbuds",
        price: 120,
        description: "True wireless earbuds for immersive audio experiences.",
        inStock: false,
      },
      {
        name: "Graphic Tablet",
        price: 200,
        description: "Digital graphic tablet for artists and designers.",
        inStock: true,
      },
      {
        name: "Desk Chair",
        price: 150,
        category: "Home Appliances",
        description: "Comfortable desk chair with adjustable features.",
        inStock: true,
      },
      {
        name: "Air Purifier",
        price: 80,
        category: "Home Appliances",
        description: "HEPA air purifier for cleaner and fresher indoor air.",
        inStock: true,
      },
      {
        name: "Electric Toothbrush",
        price: 40,
        category: "Home Appliances",
        description: "Electric toothbrush for effective dental care.",
        inStock: true,
      },
    ];
    await Product.insertMany(products);
    console.log("Products Inserted Succcessfuly");
  } catch (error) {
    console.log({ Error: "Error While Inserting Products !!" + error });
  }
};

// insertMany();

const sortByPrice = async () => {
  try {
    const sortedProducts = await Product.find().sort({ price: "descending" });
    return sortedProducts;
  } catch (error) {
    throw new Error({ Error: "Error While Sorting Products !!" });
  }
};

const sortByName = async () => {
  try {
    const sortedProducts = await Product.find().sort({ name: 1 });
    return sortedProducts;
  } catch (error) {
    throw new Error({ Error: "Error While Sorting Products !!" });
  }
};

const costumPagination = async (pageSize, pageNumber) => {
  try {
    const products = await Product.find()
      .skip((pageNumber - 1) * pageSize)
      .limit(pageSize);
    return products;
  } catch (error) {
    throw new Error({ Error: `Error While Pagination Products !! ${error}` });
  }
};

const costumeAggregation = async (agreggation) => {
  try {
    switch (agreggation) {
      case "productCount":
        const [{ ProductCount }] = await Product.aggregate([
          { $group: { _id: "", ProductCount: { $sum: 1 } } },
          { $project: { _id: 0 } },
        ]);
        return `The Count Of Products is : ${ProductCount}`;
        break;
      case "avgPrice":
        const [{ avgPrice }] = await Product.aggregate([
          { $group: { _id: "", avgPrice: { $avg: "$price" } } },
          { $project: { _id: 0 } },
        ]);
        return `The Average Price Of Products is : ${parseInt(avgPrice)}`;
        break;
      case "byCategory":
        const groupByCat = await Product.aggregate([
          { $group: { _id: "$category", product: { $sum: 1 } } },
        ]);
        return groupByCat;
        break;
      default:
        return {msg:'Please Choose Somthing Eles ! '}
        break;
    }
  } catch (error) {
    throw new Error({
      Error: `Error While Agreggation Products !! ${error}`,
    });
  }
};

// costumeAggregation('avgPrice').then(products=>console.log(products)).catch(err=>console.log(err))

// console.log(getAll());
module.exports = {
  getAll,
  getByName,
  createProduct,
  sortByName,
  sortByPrice,
  costumPagination,
  costumeAggregation
};
