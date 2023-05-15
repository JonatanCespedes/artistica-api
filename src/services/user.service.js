const { User } = require("../database/models");

const getUsers = async () => {
    return await User.findAll();
};

const getUserById = async (id) => {
    return await User.findByPk(id);
};

module.exports = {
    getUsers, 
    getUserById
};