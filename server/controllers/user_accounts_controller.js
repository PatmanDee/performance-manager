const user_accounts = require('express').Router();
const db = require('../models');

const { user_accounts } = db;

//Get all users
user_accounts.get('/', async (req, res) => {
  try {
    const foundUsers = await user_accounts.findAll();
    res.status(200).json(foundUsers);
  } catch (err) {
    res.status(500).send('Server error');
    console.log(err);
  }
});

module.exports = userAccountsRouter;
