const { getOrders } = require("../services/order.service")


module.exports = {
    getOrders: async (req, res) => {
        const orders = await getOrders();
        return res.status(200).json(orders);
    }
};