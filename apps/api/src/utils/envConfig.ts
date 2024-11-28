import { config } from "dotenv";

// Memuat file .env
config({
  path: ".env", // Path ke file .env
});

// Mengekspor variabel-variabel yang ada di dalam process.env
export const {
  PORT,
  SECRET_KEY,
  BASE_WEB_URL,
  NODEMAILER_EMAIL,
  NODEMAILER_PASS,
} = process.env;
