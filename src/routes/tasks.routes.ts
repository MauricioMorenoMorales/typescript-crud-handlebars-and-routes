import { Router, Request, Response } from 'express'

const router = Router()
//Models
import TasksModel from '../models/tasks.model'

router
	.route('/create')
	.get((req: Request, res: Response) => {
		res.render('tasks/create')
	})
	.post(async (req: Request, res: Response) => {
		const { title, description } = req.body
		const newTask = new TasksModel({ title, description })
		await newTask.save()
		res.send('saved')
	})

router.route('/list').get(async (req: Request, res: Response) => {
	const tasks = await TasksModel.find()
	console.log(tasks)
	res.render('tasks/list')
})

export default router
