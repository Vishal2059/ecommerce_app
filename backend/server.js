import express, { response } from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRouter.js";
import productRouter from "./routes/productRoute.js";
import dns from "dns";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//dns
dns.setServers(["1.1.1.1","8.8.8.8"])

//App Config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//middlewares
app.use(express.json());
app.use(cors()); 
 
// api endpoints 
app.use("/api/user", userRouter); 
app.use("/api/product",productRouter)
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)


console.log(response.addTrailers.orders)

app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("sever start on PORT : " + port));
