const { Category } = require("../database/models");

const getCategories = async () => {
  return await Category.findAll({
    include: [
      { association: "subcategories", include: [{ association: "products" }] },
    ],
  });
};

const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

module.exports = {
  getCategories,
  getCategoryById,
};
