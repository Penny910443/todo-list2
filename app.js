const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
  res.send('todo list')
})

app.listen(port, () => {
  console.log(`Express is running on localhost:${port}.`)
})