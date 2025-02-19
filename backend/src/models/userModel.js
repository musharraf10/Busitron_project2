import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
    },
      email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: function () {
        return !this.isOAuth;
      },
      minlength: 6,
      select: false,
    },
    role: {
      type: String,
      enum: ["subscriber", "content_curator", "admin"],
      default: "subscriber",
    },
      // phonenumber:{
      //   type: String,
      // },
    subscription: {
      plan: {
        type: String,
        enum: ["free", "monthly", "annual"],
        default: "free",
      },
      plan_status: {
        type: String,
        enum: ["active", "expired", "canceled"],
        default: "active",
      },
      start_date: {
        type: Date,
      },
      end_date: {
        type: Date,
      },
    },
    socialId: {
      google: String,
      facebook: String,
    },
    isOAuth: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default: "",
    },
    verifyotp: {
      type: String,
      default: '',
    },
      verifyotpexpireat: {
      type: Number,
      default: 0,
    },
      isAccountverified:{
          type: Boolean,
          default: false,
      },
      restOtp:{
        type: String,
          default: "",

      },
      restOtpExpireAt:{
        type: Number,
          default: 0,
      },
    resetToken: {
      type: String,
    },
    resetTokenExpires: {
      type: Date,
    },
  },
  { timestamps: true }
);


const userModel = mongoose.model('User', UserSchema);


export default userModel
