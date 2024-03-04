const { json } = require("express");
const productModel = require("../models/product.model");

const getAll = async (req, res) => {
  res.json(await productModel.getAll());
};

const getByName = async (req, res) => {
  try {
    const { name } = req.params;
    if (name) {
      res.json(await productModel.getByName(name));
    } else {
      res.status(100).json({ msg: "Please Enter A Name !" });
    }
  } catch (error) {
    res.status(500).json({ msg: `Somthing Went Wrong !! ${error}` });
  }
};

const sortByName = async (req, res) => {
  try {
    res.json(await productModel.sortByName());
  } catch (error) {
    res.status(500).json({ msg: `Somthing Went Wrong !! ${error}` });
  }
};

const sortByPrice = async (req, res) => {
  try {
    res.json(await productModel.sortByPrice());
  } catch (error) {
    res.status(500).json({ msg: `Somthing Went Wrong !! ${error}` });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;
    if (!name || !price || !category || !description) {
      return res.status(400).json({
        warning: "name, price, category, description Are Required Field !",
      });
    }
    res.json(
      await productModel.createProduct({ name, price, category, description })
    );
  } catch (error) {
    res.status(500).json({ msg: `Somthing Went Wrong !! ${error}` });
  }
};

const costumPagination = async (req, res) => {
  try {
    const { page, size } = req.query;
    if (!page || !size) {
      return res.status(400).json({
        warning: "Enter Page Number and Page Size !",
      });
    }
    res.json(await productModel.costumPagination(size, page));
  } catch (error) {
    res.status(500).json({ msg: `Somthing Went Wrong !! ${error}` });
  }
};

const costumeAggregation = async (req, res) => {
  try {
    const { choice } = req.query;
    if (!choice) {
      return res.status(400).json({
        warning: "Enter Your Choice of Agreggation !",
      });
    }
    res.json(await productModel.costumeAggregation(choice));
  } catch (error) {
    res.status(500).json({ msg: `Somthing Went Wrong !! ${error}` });
  }
};
module.exports = {
  getAll,
  getByName,
  sortByName,
  sortByPrice,
  createProduct,
  costumPagination,
  costumeAggregation,
};
