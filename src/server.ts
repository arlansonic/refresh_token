import 'express-async-errors'
// import { NextFunction, Request, Response } from 'express';
import express from 'express'
import { router } from './routes';

const app = express();
app.use(router)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
//     console.log(process.env.NODE_ENV === 'production' ? '🥞' : err.stack,)
//     return res.status(400).send({
//         status: 'error',
//         message: err.message,
//     })
// })

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

