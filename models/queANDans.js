const mongoose = require("mongoose");
const schema = mongoose.Schema;

const optionsSchema = new schema({
	option: String,
})

const questionSchema = new schema({
	question: {
		type: String,
		required: [true,'Must write a question'],
		trim: true
	},
	language: {
		type: String,
		required: [true,'Language must be given'],
		trim: true,
	},
	correct: {
		type: String,
		required: [true, 'Correct answer is needed.'],
		trim: true,
	},
	options: {
		type: [optionsSchema],
	},
	credit: {
		type: String,
		trim: true,
	}
})

questionModal = mongoose.model("questions",questionSchema);

module.exports = {
	questionModal
} 