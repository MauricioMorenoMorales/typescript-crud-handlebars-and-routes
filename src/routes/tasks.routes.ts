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
		res.redirect('/tasks/list')
	})

router.route('/list').get(async (req: Request, res: Response) => {
	const tasks = await TasksModel.find().lean()
	res.render('tasks/list', { tasks: tasks })
})

router.route('/delete/:id').get(async (req: Request, res: Response) => {
	const { id } = req.params
	await TasksModel.findByIdAndDelete(id)
	res.redirect('/tasks/list')
})

router
	.route('/edit/:id')
	.get(async (req: Request, res: Response) => {
		const { id } = req.params
		const task = await TasksModel.findById(id).lean()
		res.render('./tasks/edit', { task })
	})
	.post(async (req: Request, res: Response) => {
		const { id } = req.params
		const { title, description } = req.body
		await TasksModel.findByIdAndUpdate(id, { title, description })
		res.redirect('/tasks/list')
	})

export default router

// console.log('restarting transpiler')
