import User from '../models/User.js';
import  bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

//register user 
export const register = async (req,res) => {
try {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return res.json({success:false, message: "Missing Details"})
    }

    const existingUser = await User.findOne({email});

    if (existingUser) {
        return res.json({success:false, message: "User already exists"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,{expiresIn: '7d'});

    res.cookie('token', token, {
        httpOnly: true, //prevent javascript access to the cookie
        secure: process.env.NODE_ENV === 'production',//use secure cookies in production
        sameSite:process.env.NODE_ENV === 'production' ? 'none' : 'strict', //CSRF Protection 
        maxAge: 7 * 24 * 60 * 60 * 1000, //cookire expiration time in 7 days
    });

    return res.json({success:true, user: {email:user.email, name: user.name}})
} catch (error) {
    console.error(error.message);
    res.json({success:false, message: error.message})
}
}