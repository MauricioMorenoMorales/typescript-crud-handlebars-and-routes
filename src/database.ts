import mongoose from 'mongoose'

const connect = async () => {
	try {
		await mongoose.connect(
			`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@nodejsplatzi.cg57m.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`,
			{ useNewUrlParser: true, useUnifiedTopology: true },
			() => console.log('>>> Database connected'),
		)
	} catch (err) {
		console.log(err)
	}
}

export default connect
