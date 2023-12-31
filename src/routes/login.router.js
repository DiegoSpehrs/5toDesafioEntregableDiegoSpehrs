import { Router } from "express";
import {userMongo} from '../managers/users/usersMongo.js';
import { productMongo } from "../managers/products/ProductsMongo.js";

const router = new Router();

router.post('/', async (req, res) => {
    const {username, password} = req.body
    if(!username || !password){
        return res.status(400).json({message:'Sing up first'})
    }
    const userDB = await userMongo.findUser(username)
    req.session['username'] = username
    const allProducts = await productMongo.getProducts();
    res.render("bodyHome",{ products: allProducts })
})

export default router
