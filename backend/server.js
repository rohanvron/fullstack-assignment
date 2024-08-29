const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const cardRoutes = require('./routes/card.routes');
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => res.json({ message: 'Server is running' }));
app.use('/api/cards', cardRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));