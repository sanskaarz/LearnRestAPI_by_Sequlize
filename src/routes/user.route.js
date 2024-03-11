// to handle the routes after routes/index.js
const express = require('express');
const usercontroller = require('../controllers/user.controller');
const { fileUpload } = require('../middlewares/file');
const router = express.Router();

router.post('/register', fileUpload.fields([//to take input in form-data
    {
        name: 'files',
        maxCount: 1,
    }
]), usercontroller.register);

router.post('/login', fileUpload.fields([//to take input in form-data
    {
        name: 'files',
        maxCount: 1,
    }
]), usercontroller.login);



module.exports = router