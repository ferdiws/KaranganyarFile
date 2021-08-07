const express = require('express')
const router = express.Router()

router.get("/", async (req, res) => {
    try {
        res.json({
            status: 200,
            message: "berhasil",
        })
    } catch (err) {
        console.error(err)
        return res.status(500).send('server error')
    }
})

module.exports = router