const bcrypt = require('bcryptjs')
const { User
} = require('../../models')


const register = async (req) => {
    try {
        let emails = req.body.email?.toLowerCase()
        const user = await User.findOne({
            where: { email: emails }
        });
        if (user) {
            return {
                success: false,
                data: null,
                message: {
                    email: 'Email already exists. Please enter a different Email',
                },
            };
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await User.create({
            name: req.body.name,
            email: emails,
            password: hashedPassword
        });
        return {
            success: true,
            data: newUser,
            message: {
                default: 'User Registered Successfully',
            },
        };
    } catch (error) {
        console.log(error, "errrrrr");
        throw new Error(error);
    }
}

// login for everyone
// const login = async (req) => {
//     try {
//         let emails = req.body.email.toLowerCase()
//         const user = await User.findOne({
//             where: { email: emails },
//             include: [
//                 {
//                     model: Role,
//                     required: false,
//                     attributes: ['id', 'key', 'title'],
//                 },
//                 {
//                     model: Status,
//                     required: false,
//                     attributes: ['name', 'key', 'id'],
//                 },
//             ],
//         });
//         if (!user) {
//             return {
//                 success: false,
//                 data: null,
//                 message: {
//                     user: 'Email does not exist. Please enter a valid Email',
//                 },
//             };
//         }

//         if (!user.password || user.Status.key == defaultStatus.pending) {
//             return {
//                 success: false,
//                 message: `Please verify ${req.body.email}, first.`
//             }
//         }

//         // in future if user doesn't works for a long time or smthng, then his account goes inactive.
//         if (user && user.Status.key === defaultStatus.inactive) {
//             return {
//                 success: false,
//                 data: null,
//                 message: {
//                     user: 'Your Account is inactive. Please contact the Admin.',
//                 },
//             };
//         }

//         const isPasswordEqual = await bcrypt.compare(req.body.password, user.password);
//         if (!isPasswordEqual) {
//             return {
//                 success: false,
//                 data: null,
//                 message: {
//                     password: 'You have entered a wrong password. Please Recheck your credentials.',
//                 },
//             };
//         }

//         const roleDetail = await Role.findOne({
//             where: { id: user.roleId }
//         });

//         const userData = await User.findOne({
//             where: { id: user.id },
//             attributes: ['id', 'name', 'email'],
//             include: [{
//                 model: Role,
//                 required: false
//             }]
//         });

//         return {
//             success: true,
//             data: userData,
//             roleDetail,
//             message: {
//                 default: 'Login Successful',
//             },
//         };
//     } catch (error) {
//         console.log(error, "errrrrr");
//         throw new Error(error);
//     }
// };


module.exports = {
    register,
    // login
}