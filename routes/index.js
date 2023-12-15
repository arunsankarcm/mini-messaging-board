const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


router.get('/', function(req, res, next) {
  res.render('index', { title: "Mini Messageboard", messages: messages });
});

module.exports = router;

router.get('/new', function(req,res,next) {
  res.render('form')
})

router.post('/new', function(req,res,next) {
  const user = req.body.author;
  const message = req.body.message;

  messages.push({text:message, user:user, added: new Date()});

  res.redirect('/');
})