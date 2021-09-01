const {questionModal} = require("../models/queANDans");

const getAllLanguage = async (req,res) => {
	try{
		const list = [];
		const questions = await questionModal.find();
		questions.map(item => {
			const found = list.indexOf(item.language);
			if(found == -1){
				list.push(item.language);
			}
		})
		res.status(200).json(list);

	}catch(err){
		res.status(400).json({msg: 'Not found'})
	}
}

const getOneLanguage = async (req,res) => {
	const language = req.params.language;
	try{

		const questions = await questionModal.find({language: language})
		if(questions.length == 0){
			return res.status(404).json({msg: "no data with this language"});
		}
		res.status(200).json(questions);

	}catch(err){
		res.status(200).json({msg: 'Somethoing went wrong' + err});
	}
}

const createQuestion =  async (req,res) => {
	// const {language,question,option1,option2,option3,option4,correct,credit} = req.body;
	console.log(req.body);
	const data = JSON.parse(req.body);
	try{
		const final = await questionModal.create(data);
		res.status(200).json({msg: 'updated successful'});
	}catch(err){
		console.log('something went wrong: ' + err);
		res.status(400).json({msg: 'Data not saved try later'});
	}
}

module.exports = {
	getAllLanguage,getOneLanguage,createQuestion
}


// {
// 			language: language,
// 			question: question,
// 			options: [{option: option1},{option: option2},{option: option3},{option: option4}],
// 			correct: correct,
// 			credit: credit
// 		}