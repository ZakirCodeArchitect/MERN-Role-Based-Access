const bcrypt = require("bcryptjs");
const User = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({ username, password: hashedPassword, role });
    await newUser.save();

    res.status(201).json({ message: `Registered with username : ${username}` });
  } catch (err) {
    res.status(500).json({ message: `Unable to Register` });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne(username);

    if (!user) {
      return res.status(500).json({ message: `User not Found` });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: `Password is incorrect` });
    }

    const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET, 
        {expiresIn:"1h"}
    );

    res.status(200).json({token});

  } catch (err) {
    res.status(500).json({ message: `Unable to Register` });
  }
};

module.exports = {
  register,
  login
};
