const { getUsers, getUserById } = require("../services/user.service")


module.exports = {
    getUsers: async (req, res) => {
        const users = await getUsers();
        const usersToResponse = users.map(({id, name, email}) => {
            return {
                id, 
                name,
                email,
                detail: `/api/users/${id}`,
            }
        })
        const RESPONSE = {
            count: users.length,
            users: usersToResponse,
        }
        return res.status(200).json(RESPONSE);
    },
    getUserById: async (req, res) => {
        const USER_ID = req.params.id;
        const {id, name, last_name, email, phone, avatar} = await getUserById(USER_ID);
        const USER_DATA_RESPONSE = {
            id, 
            name, 
            last_name, 
            email, 
            phone, 
            avatar
        }

        return res.status(200).json(USER_DATA_RESPONSE);

    }
};