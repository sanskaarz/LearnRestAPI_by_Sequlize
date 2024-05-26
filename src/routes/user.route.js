// to handle the routes after routes/index.js
const express = require('express');
const usercontroller = require('../controllers/user.controller');
// const file = require('multer')();
const multer = require('multer');
const file = multer();
const router = express.Router();
const fileUpload = multer();

// router.post('/register', file.single('profilePicture', 2), usercontroller.register);
// If you only need to handle a single file upload un single field named 'profilePicture'

// to handel multiple file uploads in a single field
// router.post('/register', file.array('profilePicture', 10), usercontroller.register);

// // for multiple file uploads
router.post('/register', fileUpload.fields([
    {
        name: 'profilePicture',
        maxCount: 1,
    }
]), usercontroller.register);

router.post('/login', file.any(), usercontroller.login);



module.exports = router