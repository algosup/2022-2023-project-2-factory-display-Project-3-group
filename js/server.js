const multer = require('multer');

const campaignModel = require('./db');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    }
});

const upload = multer({ storage: storage }).single('file');
