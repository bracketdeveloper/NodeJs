const express = require("express");
const app = express();
const { body, validationResult } = require("express-validator");

// ================= CONFIG =================
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

// reusable constants
const ALLOWED_COUNTRIES = ["pk", "uk", "de"];
const ALLOWED_SKILLS = ["html", "css", "js"];
const ALLOWED_GENDERS = ["male", "female"];

// ================= VALIDATION =================
const validateForm = [
  // Full Name
  body("full_name")
    .trim()
    .notEmpty().withMessage("Full name is required").bail()
    .isLength({ min: 3 }).withMessage("Minimum 3 characters required").bail()
    .matches(/^[a-zA-Z\s]+$/).withMessage("Only letters allowed"),

  // Email
  body("email")
    .trim()
    .notEmpty().withMessage("Email is required").bail()
    .isEmail().withMessage("Enter a valid email")
    .normalizeEmail(),

  // Password
  body("password")
    .trim()
    .notEmpty().withMessage("Password is required").bail()
    .isLength({ min: 6 }).withMessage("Minimum 6 characters required").bail()
    .matches(/[A-Z]/).withMessage("Add one uppercase letter").bail()
    .matches(/[a-z]/).withMessage("Add one lowercase letter").bail()
    .matches(/[0-9]/).withMessage("Add one number"),

  // Phone (use specific locale if needed)
  body("phone")
    .trim()
    .notEmpty().withMessage("Phone is required").bail()
    .isMobilePhone("any").withMessage("Enter a valid phone number"),

  // Country
  body("country")
    .notEmpty().withMessage("Country is required").bail()
    .isIn(ALLOWED_COUNTRIES).withMessage("Invalid country"),

  // Gender
  body("gender")
    .notEmpty().withMessage("Gender is required").bail()
    .isIn(ALLOWED_GENDERS).withMessage("Invalid gender"),

  // Skills
  body("skills")
    .custom((value) => {
      // ensure at least one skill
      if (!value) {
        throw new Error("Select at least one skill");
      }

      const skills = Array.isArray(value) ? value : [value];

      // remove empty values
      const cleanSkills = skills.filter((s) => s && s.trim());

      if (cleanSkills.length === 0) {
        throw new Error("Select at least one skill");
      }

      // check invalid values
      const hasInvalid = cleanSkills.some(
        (skill) => !ALLOWED_SKILLS.includes(skill)
      );

      if (hasInvalid) {
        throw new Error("Invalid skill selected");
      }

      return true;
    })
    .customSanitizer((value) => {
      // always return array
      if (!value) return [];
      return Array.isArray(value) ? value : [value];
    }),

  // Message
  body("message")
    .trim()
    .notEmpty().withMessage("Message is required").bail()
    .isLength({ min: 10 }).withMessage("Minimum 10 characters required"),

  // Terms
  body("terms")
    .notEmpty().withMessage("Accept terms").bail()
    .equals("on").withMessage("You must accept terms"),
];

// ================= ROUTES =================

// GET form
app.get("/", (req, res) => {
  res.render("form", {
    errorObj: {},
    oldInput: { skills: [] },
  });
});

// POST form
app.post("/submit-form", validateForm, (req, res) => {
  const result = validationResult(req);

  // normalize input safely
  const oldInput = {
    ...req.body,
    skills: Array.isArray(req.body.skills)
      ? req.body.skills
      : req.body.skills
      ? [req.body.skills]
      : [],
  };

  // handle validation errors
  if (!result.isEmpty()) {
    const errorObj = {};

    // only first error per field
    result.array().forEach((err) => {
      if (!errorObj[err.path]) {
        errorObj[err.path] = err.msg;
      }
    });

    return res.render("form", {
      errorObj,
      oldInput,
    });
  }


  // reset form
  res.render("form", {
    errorObj: {},
    oldInput: { skills: [] },
  });
});

// ================= SERVER =================
app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});