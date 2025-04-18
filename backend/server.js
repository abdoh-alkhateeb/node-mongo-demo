const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const audiobookRoutes = require('./routes/audiobooks');

const app = express();

app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.use('/api/audiobooks', audiobookRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');

    app.listen(process.env.PORT || 5000, () =>
      console.log(`Server running at http://localhost:${port}`)
    );
  })
  .catch((err) => console.error(err));
