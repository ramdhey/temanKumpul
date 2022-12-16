import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "./User/UserModel.js";

// Register User
export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      picturePath,
      friends,
      location,
      occupation,
    } = req.body;

    const salt = await bcrypt.genSalt()
    const PasswordHash = await bcrypt.hash(password,salt)

    const newUser = new User({
        firstName,
      lastName,
      email,
      password:PasswordHash,
      picturePath,
      friends,
      location,
      occupation,
      viewedProfile:Math.floor(Math.random()*10000),
      impressions:Math.floor(Math.random()*10000)
    })
    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
    // console.log("Data Registrasi berhasil Disimpan")
  } catch (err) {
    res.status(500).json({error:err.message})
  }
};


// LoginUser
export const login  = async (req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({email:email})
        if(!user) return res.status(400).json({msg:"User tidak di temukan!"})

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({msg:"Invalid Credential"})
        const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
        delete user.password
        res.status(200).json({token,user})
        
    } catch (err) {
        res.status(500).json({error:err.message})

        
    }
}