const express = require('express')

const routes = require('./routes')
const app = express();

// parse json req body
app.use(express.json())
// parse the url
app.use(express.urlencoded({ extended: true }))

app.use('/', routes)
app.listen(3000, () => {
    console.log(`Server is running on port ${3000}.`);
});