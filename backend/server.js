import express from 'express'



const app = express()

app.get('/', (req, res) => {
    res.send('Hello world')
})





const port = 5000 || process.env.PORT
app.listen(port, () => {
    console.log('server listning port 5000');
})