const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
  res.send(`
      <link rel="stylesheet" type="text/css" href="css/style.css">
      <h1>Welcome</h1>
      <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
  `);
});

module.exports = router;
