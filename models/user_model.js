import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    avatar:{
      type: String,
      default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
    },
<<<<<<< HEAD
    communities :[
      {
        type : String
      }
    ]
=======
    role: {
      type: String,
      enum: ["USER", "GOVERNMENT"],
      default: "USER",
    },
>>>>>>> 86d848840c2a996d66b4fc417b0450e4bd7d88ee
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
