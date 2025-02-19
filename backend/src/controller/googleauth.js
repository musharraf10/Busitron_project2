import { CreateToken } from "./userController.js";
import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";

const google = async (req, res) => {
    const { email, username } = req.body;
    if (!email) return res.status(400).json({ error: "Email is required", success: false });

    try {
        let user = await userModel.findOne({ email });

        if (user) {
            const token = CreateToken(user);
            return res.status(200).json({
                message: "Login successful",
                success: true,
                user,
                token
            });
        } else {
            const generatePassword = () => Math.random().toString(36).slice(-8);
            const hashedPassword = await bcrypt.hash(generatePassword(), 10);

            const newUser = new userModel({
                username: username.split(" ").join("").toLowerCase() + Math.floor(Math.random() * 100000).toString(),
                email,
                password: hashedPassword,
            });

            user = await newUser.save();
            const token = CreateToken(user);

            return res
                .cookie("token", token, {
                    httpOnly: true,
                    secure: process.env.NODE_ENV === "production",
                    sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
                    maxAge: 24 * 60 * 60 * 1000,
                })
                .status(201)
                .json({
                    message: "User created successfully",
                    success: true,
                    user,
                    token,
                });
        }
    } catch (err) {
        console.error("Google Auth Error:", err);
        return res.status(500).json({ error: err.message, success: false });
    }
};

export default google;
