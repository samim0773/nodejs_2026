import { User } from "../model/user.model.js";
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                error: "User is already registered using this email"
            });
        }

        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        const userObj = user.toObject();
        delete userObj.password;

        res.status(201).json({
            message: 'User created successfully',
            user: userObj
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};