// src/middlewares/validations/auth.validation.ts
import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

// Validasi untuk registrasi pengguna
export const RegisterValidation = [
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be 3 characters minimum"),
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 3 })
    .withMessage("Password must be 3 characters minimum")
    .matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/)
    .withMessage(
      "Password needs to have at least 1 number and special characters"
    ),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new Error(errors.array()[0].msg));
    }
    next();
  },
];

// Validasi untuk login pengguna
export const LoginValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password").notEmpty().withMessage("Password is required"),
  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return next(new Error(errors.array()[0].msg));
    }
    next();
  },
];
