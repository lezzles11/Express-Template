let PostModel = require('../../models/post.model')
let express = require('express')
let router = express.Router()

// Create a new blog post
// POST localhost:3000/blog 
router.post('/post', (req, res) => {
	// req.body (this is after adding body parser)
	if (!req.body) {
		return res.status(400).send('Request body is missing')
	}  
	// these two lines will construct model, and validate it 
	let model = new PostModel(req.body)
	model.save()
	// if theres nothing, return error
		.then(doc => {
		if (!doc || doc.length === 0) {
			return res.status(500).send(doc)
		} 
		res.status(201).send(doc)
	})
		.catch(err => {
			res.status(500).json(err)
		})
})

//get
router.get('/post', (req, res) => {
	PostModel.findOne({
		title: req.query.title
	}, req.body)
	.then(doc => {
		res.json(doc)
	})
	.catch(err => {
		res.status(500).json(err)
	})
})

// update
router.put('/post', (req, res) => {
	if (!req.query.title) {
		return res.status(400).send('missing title')
	} 
	PostModel.findOneAndUpdate({
		title: req.query.title
	}, req.body, {
		new: true
	})
	.then(doc => {
		res.json(doc)
	})
	.catch(err => {
		res.status(500).json(err)
	})

})


// delete
router.delete('/post', (req, res) => {
	if (!req.query.title) {
		return res.status(400).send('Missing Title')
	}
	PostModel.deleteOne({
		title: req.query.title
	})
		.then(doc => {
			res.json(doc)
		})
		.catch(err => {
			res.status(500).json(err)
		})
})

module.exports = router
