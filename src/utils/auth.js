// for generating and verifing token
const jwt = require('jsonwebtoken');
const config = require('../../config/config');

const verifyToken = function (token, callback) {
    return jwt.verify(
        token, // The token to be verified
        config.jwt.secret, // Same token we used to sign
        {}, // No Option, for more see https://github.com/auth0/node-jsonwebtoken#jwtverifytoken-secretorpublickey-options-callback
        callback // Pass errors or decoded token to callback
    );
};

const decodeToken = function (token) {
    var decoded = jwt.decode(token);
    return decoded;
};

const generateToken = async (user, role) => {
    const token = jwt.sign(
        {
            userId: user.id,
            name: user.name,
            email: user.email,
            pendingSteps: user.pendingSteps,
            role: role.key,
            aud: 'Techstack',
            iss: 'Techstack',
        },
        config.jwt.secret,
        { expiresIn: config.jwt.accessExpirationTime }
    );
    return token;
};

module.exports = {
    generateToken,
    verifyToken,
    decodeToken,
};
