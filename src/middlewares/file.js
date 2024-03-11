// handle form-data, fileuploads
const multer = require('multer');

const file = multer({
    limits: {
        fieldSize: 1024 * 512,
        fieldNameSize: 2000,
    },
    dest: './uploads/',
});

const storage = multer.memoryStorage({
    destination(req, files, callback) {
        callback(null, '');
    },
});
const fileUpload = multer({
    storage,
    limits: {
        fileSize: 2000000000000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, fils, cb) {
        // if (!fils.originalname.match(/\.(png|jpg|pdf)$/)) {
        //   // upload only png and jpg format
        //   return cb(new Error('Please upload a Image'));
        // }
        cb(undefined, true);
    },
});

module.exports = { fileUpload, file };
