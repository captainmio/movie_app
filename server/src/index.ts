import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';

const app = express()
app.use(express.json())
app.use(cors())



// API routes
app.use('/api/auth', authRoutes);

app.listen(3001, () => {
  console.log("server is running 123")
})
