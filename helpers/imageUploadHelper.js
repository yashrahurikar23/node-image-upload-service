const multer = require('multer');
const fileFilter = (req, file, cb) => {
    if(
        file.mimeType === 'image/jpeg'
  || file.mimeType === 'image/png'
  || file.mimeType === 'image/png'
    ) {
        cb(null, true);
    } else {
        cb(null, false);
    }
};

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${file.originalname}`);
    }
});

const uploadImage =  multer({
    storage: storage,
    fileFilter: fileFilter
}).single('image');

module.exports = {
    uploadImage
};  
