const express = require("express");
const router = express.Router();
const User = require("../models/userModel");
const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.json(user);
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/register", async (req, res) => {
  const { username, password, email, surname, name, isAdmin } = req.body;
  console.log(req.body);

  try {
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newuser = new User({ username, password: hashedPassword, email, surname, name, isAdmin });

    if (username.toLowerCase().substring(0, 5) === 'admin') {
      newuser.isAdmin = true;
    }

    await newuser.save();
    res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).json({ error: "Registration failed" });
  }
});


router.get("/getusers", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error("Get users error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
