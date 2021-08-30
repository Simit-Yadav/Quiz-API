const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

const quiz = require("./routes/q&a");

// setting up environment variables.
dotenv.config({path: "./keys.env"});


let PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use("/api/v1/questions",quiz)

const start = async () => {
	try{
		mongoose.connect(process.env.MONGODB,{
			useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
			useUnifiedTopology: true,
		})
		app.listen(PORT,() => console.log("Express server running on port " + PORT))
	}catch(err){
		console.log(err);
	}
}

start();
