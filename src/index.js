let express = require('express')
let app = express()


// everytime you add a route, add this and a file in routes
let blogRoute = require('./routes/blog')
app.use(blogRoute)
// use static file handler (or, middleware)
app.use(express.static('public'))

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App running on ${PORT}`))