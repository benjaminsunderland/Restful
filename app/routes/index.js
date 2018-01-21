const express = require('express');

var router = express.Router();

router.get('/', (req, res) => {
  var data = req.app.get('appData');
  var pagePhotos = [];

  data.speakers.forEach(function(item) {
    pagePhotos = pagePhotos.concat(item.artwork);
  });

  res.render('index', {
    pageTitle: "Home",
    artwork: pagePhotos,
    pageId: "home"
  });
});

module.exports = router;
