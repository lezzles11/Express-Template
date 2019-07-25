// second component to adding a route
let express = require('express')
let router = express.Router()

router.get('/blog', (req, res) => {
	// http://localhost:3000/blog?post=thomas
	if (req.query.post) {
		res.send(`Requested ${req.query.post}`)
	} else {
		res.send('Blog Site')
	}
})
// http://localhost:3000/blog/Thomas
router.get('/blog/:post', (req, res) => {
	res.send(`Requested ${req.params.post}`)
})



module.exports = router