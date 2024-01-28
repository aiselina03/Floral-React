import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose, { Schema } from "mongoose";
const app = express();
app.use(express.json());
app.use(cors());

const productSchema = new Schema({
  name: String,
  price: Number,
  image: String,
});
const ProductModel = mongoose.model("ProductModel", productSchema);

app.get("/", async (req, res) => {
  try {
    const products = await ProductModel.find({});
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.findById(id);
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, price, image } = req.body;
    const newProducts = new ProductModel({ name, price, image });
    await newProducts.save();
    res.json(newProducts);
  } catch (error) {
    res.send(error.message);
  }
});

app.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, image } = req.body;
    const products = await ProductModel.findByIdAndUpdate(id, {
      name,
      price,
      image,
    });
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});

app.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.findByIdAndDelete(id);
    res.json(products);
  } catch (error) {
    res.send(error.message);
  }
});

mongoose
  .connect(process.env.DB_SECRET_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log(" not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
