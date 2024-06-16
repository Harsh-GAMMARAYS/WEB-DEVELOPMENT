const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("Request!")
//     res.send({color: 'red'})
//     res.send('<h1>This is my webpage</h1>')
// }) 
app.get('/', (req, res) => {
    res.send("Homepage")
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing PostId : ${postId} on this subreddit</h1>`)
})

app.post('/cats', (req, res) => {
    res.send('Accepted(POST)')
})

app.get('/cats', (req, res) => {
    res.send("cat")
})

app.get('/dogs', (req, res) => {
    res.send("doggo")
})

app.get('/search', (req,res) => {
    const {q} = req.query;
    res.send(`<h1>Search results for: ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send("Error")
})












app.listen(3000, () => {
    console.log("On Port 3000")
})