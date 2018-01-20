const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send("<li>This is working!</li>")
})
app.listen(3000, () => {
  console.log("Listening, baby!")
});
