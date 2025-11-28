import express from 'express';
import { addToCart, getCart, removeFromCart } from '../controllers/cartController.js';
// import authMiddleware from '../middleware/auth.js';

const cartRouter = express.Router();

cartRouter.post("/get",getCart);
cartRouter.post("/add",addToCart);
cartRouter.post("/remove",removeFromCart);

export default cartRouter;