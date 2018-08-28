const express = require('express')
const app = express()


app.use(express.static('public'));

app.listen(process.env.PORT || 5000) 
console.log('Listening on port 5000! - ctrl^C to exit');

