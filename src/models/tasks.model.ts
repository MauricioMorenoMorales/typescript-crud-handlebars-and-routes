import { Schema, model } from 'mongoose'

const TasksSchema = new Schema({
	title: {
		type: String,
		required: true,
		lowercase: true,
	},
	description: {
		type: String,
		required: true,
		lowercase: true,
	},
})

export default model('Task', TasksSchema)
