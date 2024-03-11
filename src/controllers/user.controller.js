//  to show http status on success, failure
const httpStatus = require('http-status');
const userManager = require('../businessLogic/userManager');

const register = async function (req, res) {
    await userManager
        .register(req)
        .then((response) => {
            res.status(httpStatus.OK).send(response);
        })
        .catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
        });
};

const login = async function (req, res) {
    await userManager
        .login(req)
        .then((response) => {
            res.status(httpStatus.OK).send(response);
        })
        .catch((err) => {
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: err.message });
        });
};



module.exports = {
    register,
    login,
};
