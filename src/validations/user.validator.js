const { body, validationResult } = require("express-validator");

const userValidationRules = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("last_name").notEmpty().withMessage("Last name is required"),
    body("email").notEmpty().withMessage("Email is required").isEmail().withMessage("Invalid email format"),
    body("pass").notEmpty().withMessage("Password is required"),
    body("phone").optional().isMobilePhone().withMessage("Invalid phone number format"),
    body("rol").isInt().withMessage("Invalid role"),
    body("avatar").optional().isURL().withMessage("Invalid avatar URL"),
  ];
};

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));

  return res.status(422).json({
    errors: extractedErrors,
  });
};

module.exports = {
  userValidationRules,
  validate,
};
