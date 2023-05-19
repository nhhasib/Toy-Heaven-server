const express = require('express')
const app = express()
const port = 5000


app.get('/', (req, res) => {
    res.send('Toy Heaven running')
})

app.listen(port, () => {
    console.log(`Toy heaven listening port,${port}`)
})