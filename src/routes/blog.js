// second component to adding a route
let express = require('express')
let router = express.Router()

router.get('/blog', (req, res) => {
	res.send('Blog Site')
})
// this get request will render "requested thomas"
router.get('/blog/:post', (req, res) => {
	res.send(`Requested ${req.params.post}`)
})



module.exports = router