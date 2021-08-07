const express = require('express')
const router = express.Router()
const uploadFile = require('../middleware/uploadFile')

router.post('/upload-file', uploadFile.single('file'), async (req, res) => {
    const exfile = req.file
    try{
        res.status(200).json({
            status: 'success',
            message: 'Media berhasil ditambahkan',
            data: exfile
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
})

router.get("/", async (req, res) => {
    try{
        res.json({
            status: 200,
            message:"Success"
        })
    } catch (err) {
        res.status(500).json({
            status: 'fail',
            message: err
        })
    }
})

module.exports = router