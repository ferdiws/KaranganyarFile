const path = require('path')
const multer = require('multer')

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/file/')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var uploadPdf = multer ({
    storage: storage,
    fileFilter: (req, file, callback) => {
        if (file.mimetype.split("/")[1] === "pdf") {
            callback(null, true)
        } else {
            console.log('Bukan file pdf')
            callback(null, false)
        }
    },
    limits: {fileSize : 35000000}
})

module.exports = uploadPdf