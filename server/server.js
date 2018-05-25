require('./config/config');
require('./db/mongoose');

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const { User } = require('./models/user');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/users', (req, res) => {
  const body = _.pick(req.body, ['email', 'password', 'firstName', 'lastName']);
  const user = new User(body);

  user.save().then((user) => {
    res.send(user);
  }).catch(e => res.status(400).send(e));
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
