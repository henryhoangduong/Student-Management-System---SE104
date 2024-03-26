const client = require("../database/supabase.js");
const jwt = require("jsonwebtoken");
require("dotenv").config('../.env');

async function studentSignin(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const { data, error } = await client
      .from("Student")
      .select("*")
      .eq("email", email)
      .single(); 
    console.log(data);
    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ message: "User not found." });
    }

    if (password != data.password) {
      return res.status(401).json({ message: "Invalid password." });
    }
    const payload = {
      id: data.id,
      role: "student",
    };
    const token = jwt.sign(payload, process.env.JWT_KEY);
    return res
      .status(200)
      .json({ message: "Authentication successful.", token: token });
  } catch (error) {
    console.error("Error signing in:", error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
}

async function teacherSignin(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  try {
    const { data, error } = await client
      .from("Teacher")
      .select("*")
      .eq("email", email)
      .single();
    console.log(data);
    if (error) {
      throw error;
    }

    if (!data) {
      return res.status(404).json({ message: "User not found." });
    }

    if (password != data.password) {
      return res.status(401).json({ message: "Invalid password." });
    }
    const payload = {
      id: data.id,
      role: "teacher",
    };
    const token = jwt.sign(payload, process.env.JWT_KEY);
    return res
      .status(200)
      .json({ message: "Authentication successful.", token: token });
  } catch (error) {
    console.error("Error signing in:", error.message);
    return res.status(500).json({ message: "Internal server error." });
  }
}

module.exports = { studentSignin,teacherSignin };
