const { Router } = require("express");
const productContoller = require("../controllers/product.controller");

const route = Router();

route.get("/", productContoller.getAll);

route.get("/pagination", productContoller.costumPagination);

route.get("/aggregation", productContoller.costumeAggregation);

route.get("/:name", productContoller.getByName);

route.get("/sort/byName", productContoller.sortByName);

route.get("/sort/byPrice", productContoller.sortByPrice);

route.post("/create", productContoller.createProduct);

module.exports = route;
