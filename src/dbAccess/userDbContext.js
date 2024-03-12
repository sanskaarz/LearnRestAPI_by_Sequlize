const bcrypt = require('bcryptjs')
const { User, Role, Status
} = require('../../models')
const { defaultStatus, defaultRoles } = require('../utils/helper')



const register = async (req) => {
    try {
        let emails = req.body.email?.toLowerCase()
        let profilePicture = req.file.originalname.toLowerCase()

        const user = await User.findOne({
            where: { email: emails }
        });
        const newRole = await Role.findOne({
            where: { key: defaultRoles.superadmin }
        })
        const newStatus = await Status.findOne({
            where: { key: defaultStatus.approved }
        })


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
            image: profilePicture,
            statusId: newStatus.id,
            roleId: newRole.id,
            name: req.body.name,
            email: emails,
            password: hashedPassword,
            mobile: req.body.mobile
        });
        return {
            success: true,
            data: newUser,
            message: {
                default: 'User Registered Successfully',
            },
        };
    } catch (error) {
        console.log(error, "Error  in register API");
        throw new Error(error);
    }
}

const login = async (req) => {
    try {
        let emails = req.body.email?.toLowerCase()
        const user = await User.findOne({
            where: { email: emails },
            include: [
                {
                    model: Role,
                    required: false,
                    attributes: ['id', 'key', 'title'],
                },
                {
                    model: Status,
                    required: false,
                },
            ],
        });

        if (!user) {
            return {
                success: false,
                data: null,
                message: {
                    user: 'Email does not exist. Please enter a valid Email',
                },
            };
        }

        const isPasswordEqual = await bcrypt.compare(req.body.password, user.password);
        if (!isPasswordEqual) {
            return {
                success: false,
                data: null,
                message: {
                    password: 'You have entered a wrong password. Please Recheck your credentials.',
                },
            };
        }

        const roleDetail = await Role.findOne({
            where: { id: user.roleId }
        });

        const userData = await User.findOne({
            where: { id: user.id },
            attributes: ['id', 'name', 'email'],
            include: [{
                model: Role,
                required: false
            }]
        });


        return {
            success: true,
            data: userData,
            roleDetail,
            message: {
                default: 'Login Successful',
            },
        };
    } catch (error) {
        console.log(error, "errrrrr");
        throw new Error(error);
    }
};



module.exports = {
    register,
    login
}