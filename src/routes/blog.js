// second component to adding a route
let express = require('express')
let router = express.Router()

router.get('/blog', (req, res) => {
	res.send('Blog Site')
})

module.exports = router