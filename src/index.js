let express = require('express')
let app = express()
// parses JSON
var blogRoute = require('./routes/blog')
var postRoute = require('./routes/post')

// everytime you add a route, add this and a file in routes

let path = require('path')
let bodyParser = require('body-parser')
// takes json string and creates body
app.use(bodyParser.json())

app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body)
	// need to call next 
	next()
})
// use static file handler (or, middleware)
app.use(express.static('public'))
app.use(blogRoute)
app.use(postRoute)

app.use((req, res, next) => {
	res.status(404).send('We think you are lost!')
})
// error handler
app.use((err, req, res, next) => {
	console.error(err.stack)
	// main index file is under dirname
	res.sendFile(path.join(__dirname, '..public/500.html'))
})



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`App running on ${PORT}`))