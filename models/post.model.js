let mongoose = require('mongoose')


mongoose.connect(`mongodb+srv://lezzles:sk8terGIRL@cluster0-ebtnd.mongodb.net/test?retryWrites=true&w=majority`, {'useNewUrlParser': true})
mongoose.set('useCreateIndex', true);
let PostSchema = new mongoose.Schema({
	title: {
		type: String, 
		require: true, 
		unique: true 
	}, 
	author: String, 
	url: String,
	likes: Number, 
	date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Work Please!', PostSchema)