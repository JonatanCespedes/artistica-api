const { body, validationResult } = require("express-validator");

const productValidationRules = () => {
  return [
    body("name").notEmpty().withMessage("Name is required"),
    body("price").notEmpty().withMessage("Price is required").isInt().withMessage("Invalid price"),
    body("discount").optional().isInt().withMessage("Invalid discount"),
    body("description").optional().isLength({ max: 800 }).withMessage("Description exceeds maximum length"),
    body("subcategory_id").notEmpty().withMessage("Subcategory ID is required").isInt().withMessage("Invalid subcategory ID"),
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
  productValidationRules,
  validate,
};