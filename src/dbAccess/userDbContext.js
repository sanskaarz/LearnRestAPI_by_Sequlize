const bcrypt = require('bcryptjs')
const { User, Role, Status
} = require('../../models')
const { defaultStatus, defaultRoles } = require('../utils/helper')

const fs = require('fs');
const path = require('path');
const baseDir = path.join(__dirname, '../../');
const mainDir = `${baseDir}documents`;
const dir = `${baseDir}documents/profile`;


const writeFiles = async (
    file
) => {
    if (!fs.existsSync(mainDir)) {
        fs.mkdirSync(mainDir);
    }
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    if (file && file.length > 0) {
        await Promise.all(
            file.map((file) => {
                fs.writeFileSync(path.resolve(dir, file.originalname), file.buffer, () => console.log('image downloaded3'));
            })
        );
    }
};




const register = async (req) => {
    try {
        body = JSON.parse(req.body.profileData)
        let emails = body.email?.toLowerCase()
        let { profilePicture } = req.files

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
        const hashedPassword = await bcrypt.hash(body.password, 12);
        let userObj = {
            statusId: newStatus.id,
            roleId: newRole.id,
            name: body.name,
            email: emails,
            password: hashedPassword,
            mobile: body.mobile
        };
        await writeFiles(profilePicture)

        if (profilePicture && profilePicture.length > 0) {
            const fileExist = profilePicture.find((image) => image.originalname);
            if (fileExist) {
                userObj['image'] = fileExist.originalname;
            }
        }
        const newUser = await User.create(
            userObj
        );

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