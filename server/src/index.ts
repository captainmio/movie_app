import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.route';
import genreRoutes from './routes/genre.route';
import connectMongoDb from './config/db.config';
import 'dotenv/config'
import { authenticateToken } from './middlewares/token/authenticateToken.middleware';


const app = express()
app.use(express.json())
app.use(cors())


connectMongoDb();

// API routes
app.use('/api/auth', authRoutes);
app.use('/api/admin/genres', authenticateToken, genreRoutes);

app.listen(3001, () => {
  console.log("server is running")
})
