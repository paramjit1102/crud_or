// app.js

const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const { sequelize } = require('./models');

const app = express();

app.use(bodyParser.json());
app.use('/api', userRoutes);

// Sync the database and start the server
sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
