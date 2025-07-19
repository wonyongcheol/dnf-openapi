const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// 라우터 연결
const characterRoutes = require('./routes/characterRoutes');
app.use('/api', characterRoutes);

const serversRoutes = require('./routes/serversRoutes');
app.use('/api/servers', serversRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
}); 