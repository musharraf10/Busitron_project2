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
    transaction: [{ type: mongoose.Schema.Types.ObjectId, ref: 'transaction' }],
    role: {
      type: String,
      enum: ["subscriber", "content_curator", "admin"],
      default: "subscriber",
    },
    phonenumber: {
      type: Number,
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

    restOtp: {
      type: String,
      default: "",
    },
    restOtpExpireAt: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);


const userModel = mongoose.model('User', UserSchema);


export default userModel
