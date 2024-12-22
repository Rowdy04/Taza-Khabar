const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const newsRoutes = require('./routes/newsRoutes');
const authRoutes = require('./routes/authRoutes');
const commentRoutes = require('./routes/commentRoutes');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000' // Replace with your frontend URL
}));
app.use(bodyParser.json());
app.use(limiter);

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/news', newsRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/comments', commentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
