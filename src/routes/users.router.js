import { Router } from "express";
import {userMongo} from '../managers/users/usersMongo.js';

const router = new Router();

router.post('/singup',async (req, res) => {
    const {first_name,last_name,username,password} = req.body
    if(!first_name || !last_name || !username || !password){
        return res.status(400).json({message:'Some data is missing'})
    }
    const userDB = await userMongo.findUser(username)
    if(userDB){
        return res.status(400).json({message:'User already used'})
    }
    const newUser = await userMongo.createUser({...req.body})
    res.status(200).json({message:'User created',user:newUser})
})

router.get('/home',async (req, res) => {
        const {username} = req.session
        const userDB = await userMongo.findUser(username)
        if(userDB.isAdmin){
            res.redirect('/api/views/adminHome')
        }else{
            res.redirect('/api/views/clientHome')
        }
})

export default router