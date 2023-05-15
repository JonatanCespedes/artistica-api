const { getCategories } = require("../services/order.service")


module.exports = {
    getCategories: async (req, res) => {
        const categories = await getCategories();
        return res.status(200).json(categories);
    }
};