import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import transporter from "../nodemailer/nodemailer.js";
import res from "express/lib/response.js";

export const CreateToken = (user = null) => {
  if (!user) return null;
  const payload = {
    userId: user._id,
    role: user.role,
    username: user.username,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "24h",
  });
};

const RegisterUser = async (req, res) => {
  const { username, password, email, role } = req.body;

  if (!username || !password || !email ) {
    return res
        .status(400)
        .json({ error: "All fields are required", success: false });
  }

  try {
    const userExist = await userModel.findOne({ email });

    if (userExist) {
      return res.status(400).json({
        message: "User already exists",
        success: false,
      });
    }

    const hashpassword = await bcrypt.hash(password, 10);

    const user = new userModel({
      email,
      username,
      password: hashpassword,
      role: role || "subscriber",
    });

    const newUser = await user.save();

    const mailoption = {
      from:"abhisheksathala296@gmail.com",
      to:email,
      subject:'welcome to the somewhere',
      text:`welcome to the somewhere! your account has been registered!${email}`,
    }
    await transporter.sendMail(
      mailoption
    )
    res.status(201).json({
      message: "User created successfully",
      success: true,
      user: newUser,
    });


  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
};

const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "Please fill in all fields",
      success: false,
    });
  }

  try {
    const user = await userModel.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    console.log("Password from request:", password);
    console.log("User password from DB:", user.password);

    // Compare the entered password with the hashed password in the DB
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid password",
        success: false,
      });
    }
    const token = CreateToken(user);
    res.cookie('token',token,{
      httpOnly: true,
      secure: process.env.NODE_ENV  === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: 24 * 60 * 60 * 1000,
    }).status(200).json({
      message: "Login successful",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
};
// logout
const logout = async (req, res) => {
  try{
    res.clearCookie('token',{
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
    }).status(200).json({
      message: "User logged out",
      success: true,
    })
  }catch(err){
    res.status(500).json({
      message: "Internal server error",
      success: false,

    })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});

    if (!users) {
      return res.status(404).json({
        message: "No users found",
        success: false,
      });
    }

    res.status(200).json({
      message: "Users fetched successfully",
      success: true,
      users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
};

const getUserById = async (req, res) => {
  try {

    const { id } = req.params;

    const user = await userModel.findById(id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(200).json({
      message: "User fetched successfully",
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message || "Internal server error",
      success: false,
    });
  }
};

// const sendOtp=  async  (req, res) => {
//
//   const {userId}  = req.body;
// if(!userId){
//   return res.status(400).json({
//     message: "UserId not found",
//     success: false,
//   })
// }
// const user = userModel.findById(userId)
// try{
//
//   if(!user){
//     return res.status(404).json({
//       message: "User not found",
//       success: false,
//     })
//   }
//
//     const otp = toString(Math.floor(100000 + Math.random()*900000))
//
//   user.verifyotp = otp;
//   user.verifyotpexpireat = Date.now() + 24 * 60 * 60 * 1000;
//   await user.save()
//
//
//   const mailOption = {
//     from: "abhisheksathala296@gmail.com",
//     to:user.email,
//     subject: "Account verification OTP",
//     text:`your Otp is ${otp} . verify your account using this OTP Valid for 2Min only`
//   }
//
//   await transporter.sendMail(mailOption);
//   res.status(200).json({
//     message: "User OTP successfully",
//     success: true,
//   })
//
// }catch (erro){
//   console.log(error);
//   res.status(500).json({
//     message: "Internal server error",
//     success: false,
//
//   })
//
// }
//
// }

const isAuthenticated = async ()=>{
  try{
    return res.status(200).json({
      success: true,
    })
  }catch (error){
    res.status(500).json({
      message: "Internal server error user not verifyed in is-authenticated",
      success: false,
    })
  }
}

const passwordRestOtp = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      message: "Email is required",
      success: false,
    });
  }

  try {
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: false,
      });
    }

    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // Store OTP with expiration time (2 minutes)
    user.restOtp = otp;
    user.restOtpExpireAt = Date.now() + 24 * 60 * 1000; // 2 minutes expiration
    await user.save();

    // Email Options
    const mailOption = {
      from: "abhisheksathala296@gmail.com",
      to: user.email,
      subject: "Account Verification OTP",
      text: `Your OTP is ${otp}. Reset your password using this OTP. Valid for 2 minutes only.`,
    };

    // Send Email
    try {
      await transporter.sendMail(mailOption);
      res.status(200).json({
        message: "OTP sent successfully to email",
        success: true,
      });
    } catch (mailError) {
      console.error("Email sending error:", mailError);
      res.status(500).json({
        message: "Failed to send OTP email",
        success: false,
      });
    }
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};


const restuserpassword = async (req, res) => {
  // Implement password reset logic here
  const {email,otp,newpassword} =req.body;
  if(!email || !otp || !newpassword){
    return res.status(400).json({
      message: "all fileds is required",
      success: false,
    })
  }

  try{
    const  user = await  userModel.findOne({email})
    if(!user){
      return res.status(404).json({
        message: "User not found",
        success: false,
      })
    }
    console.log()
    if(user.restOtp === "" || user.restOtp !== otp){

      return res.status(400).json({
        message: "invalid restotp",
        success: false,
      })
    }

    if (user.restOtpExpireAt < Date.now()){
      return res.status(200).json({
        success: false,
        message:"otp already expired",
      })
    }


    const hashedpassword = await  bcrypt.hash(newpassword, 10);


     user.password = hashedpassword;
          user.restotp = "";
          user.restotpexpireat = 0;

        await  user.save()


    res.status(200).json({
      success: true,
      message:"Successfully reset password",
    })



  }catch (error){
    console.log(
        error
    )
    res.status(500).json({
      message: "Internal server error email or password",
      success: false,
    })
  }

};

export { RegisterUser, LoginUser, getAllUsers, getUserById, restuserpassword,
  logout,passwordRestOtp ,isAuthenticated};
