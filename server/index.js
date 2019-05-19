const express = require('express')
const app = express();
const bodyParser = require('body-parser')
const cors = require('cors')
const emailLogic = require('./email')

app.use(bodyParser.json())
app.use(cors())

app.post('/sendEmail', (req, res) => {
   res.send(emailLogic.sendEmail('sendmeonlinegifts@gmail.com', req.body));
})

app.listen(8000, () => {
  console.log('app listening on port 8000!')
});
