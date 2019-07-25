let express = require('express')
let app = express()

// use static file handler (or, middleware)
app.use(express.static('public'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App running on ${PORT}`))