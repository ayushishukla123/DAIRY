import { pool } from "./db.js";

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("DB Connection Error:", err);
  } else {
    console.log("DB Connected:", res.rows[0]);
  }
  pool.end();
});
