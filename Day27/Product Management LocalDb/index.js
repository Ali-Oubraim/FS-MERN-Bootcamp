const express = require("express");
const productRoute = require("./routes/product.route");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/products',productRoute);

app.listen(PORT, () => {
  console.log("Server Running For Products API..");
});
