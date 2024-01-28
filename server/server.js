// Dependencies
const express = require('express');
const app = express();
const { sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');

//Configuration and Middleware of the server
require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//Controllers
const userAccountsController = require('./controllers/user_accounts_controller');
app.use('/api/users/', userAccountsController);

//Listen
app.listen(4005, () => {
  console.log('Server is running on port 4005');
});
