import 'dotenv/config'
import express from 'express';
import { connectDatabase } from './DB/database.js'
import userRoutes from './router/user.route.js';


const app = express();
const PORT = process.env.PORT ?? 5000
console.log('path:', process.env.LOCAL_MONGODB_URI)
connectDatabase(process.env.LOCAL_MONGODB_URI)
    .then(() => {
        console.log('database connected...')
    })
    .catch((err) => {
        console.error('Database connection failed:', err.message)
        process.exit(1)
    })

app.use(express.json())

app.use('/user', userRoutes);


app.listen(PORT, () => console.log(`Server is runnign on port ${PORT}`))