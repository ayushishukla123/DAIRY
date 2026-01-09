import express from "express";
import cors from "cors";
import pkg from "pg";
import bcrypt from "bcrypt";

const { Pool } = pkg;
const app = express();

/* =====================
   MIDDLEWARE
===================== */
app.use(cors({ origin: "http://localhost:3000" })); // frontend allow
app.use(express.json());

/* =====================
   DB CONNECTION
===================== */
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "dairydb",
  password: "Ayushi@123",
  port: 5432,
});

/* =====================
   ROOT TEST ROUTE ✅ (NEW)
===================== */
app.get("/", (req, res) => {
  res.send("Backend running fine ✅");
});

/* =====================
   SIGNUP API
===================== */
app.post("/api/signup", async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    // 🔒 hash password
    const passwordHash = await bcrypt.hash(password, 10);

    const result = await pool.query(
      `INSERT INTO users (name, email, password_hash)
       VALUES ($1, $2, $3)
       RETURNING id, name, email, role, created_at`,
      [name, email, passwordHash]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("SIGNUP ERROR:", err);

    if (err.code === "23505") {
      return res.status(400).json({ message: "Email already exists" });
    }

    res.status(500).json({ message: "Server error" });
  }
});

/* =====================
   LOGIN API
===================== */
app.post("/api/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password required" });
    }

    const userResult = await pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    );

    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = userResult.rows[0];

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // ✅ login success
    res.status(200).json({
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      created_at: user.created_at,
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ message: "Server error" });
  }
});

/* =====================
   SERVER START
===================== */
app.listen(5000, () => console.log("Backend running on http://localhost:5000"));
