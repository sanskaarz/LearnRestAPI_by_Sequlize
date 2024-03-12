//  to generate token on the basis of return request.(return response)
const userDbContext = require('../dbAccess/userDbContext');
const { generateToken } = require('../utils/auth');


const register = async function (req) {
    const result = await userDbContext.register(req);
    return result;
};

const login = async function (req) {
    let token = null;
    let userData = null;
    const result = await userDbContext.login(req);
    if (result.success) {
        token = await generateToken(result.data, result.roleDetail);
        userData = result.data;
        return { message: 'Login Successfull', data: { token, userData }, success: true };
    }
    return result;
};

module.exports = {
    register,
    login
};
