import express from 'express'
import { router } from './routes';

const app = express();
app.use(router)
app.use(express.json())

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

