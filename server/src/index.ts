import express from 'express';
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())

app.post("/api/login", (req, res) => {
  console.log('test login 1111 zxczxcz')
})


app.post("/api/register", (req, res) => {
  console.log('test')
  return res.json({
    success: true,
    message: 'API successfully executed',
    data: []
  })
})

app.listen(3001, () => {
  console.log("server is running 123")
})
