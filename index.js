const express = require('express')
const product = require('./api/product')
const filesRoute = require('./routes/files')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())
app.use('/uploads', express.static('uploads'))

const PORT = process.env.PORT || 5000

app.use('/api/product', product)
app.use('/file', filesRoute)

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`))
