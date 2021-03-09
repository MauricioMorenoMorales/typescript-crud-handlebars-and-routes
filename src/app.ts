import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import morgan from 'morgan'
import chalk from 'chalk'
import exphbs from 'express-handlebars'
import path from 'path'
import indexRoutes from './routes/index.routes'

class Application {
	app: express.Application
	constructor() {
		this.app = express()
		this.settings()
		this.middlewares()
		this.routes()
	}
	settings() {
		this.app.set('port', 4444)
		this.app.set('views', path.join(__dirname, 'views'))
		this.app.engine(
			'.hbs',
			exphbs({
				layoutsDir: path.join(this.app.get('views'), 'layouts'),
				partialsDir: path.join(this.app.get('views'), 'partials'),
				defaultLayout: 'main.hbs',
				extname: '.hbs',
			}),
		)
		this.app.set('view engine', '.hbs')
	}
	middlewares() {
		this.app.use(morgan('dev'))
	}
	routes() {
		this.app.use(indexRoutes)
	}
	start() {
		this.app.listen(this.app.get('port'), () => {
			console.log(
				`>>>App running on port ${chalk.inverse.blue(this.app.get('port'))}`,
			)
		})
	}
}

export default Application
