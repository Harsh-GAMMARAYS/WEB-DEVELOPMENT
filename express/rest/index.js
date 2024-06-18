const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'lol that is so funny'
    },
    {
        id: uuid(),
        username: 'Skylar',
        comment: 'damn!'
    },
    {
        id: uuid(),
        username: 'SkibdiToilet',
        comment: 'lol that is so lame'
    },
    {
        id: uuid(),
        username: 'Onlysayoowk',
        comment: 'lol that dfvasbhdjkbsahjdb'
    }
];

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments })
});

app.get('/comments/new', (req, res) => {
    res.render('comments/new')
});

app.post('/comments', (req, res) => {
    const { username, comment } = req.body
    comments.push({ username, comment, id: uuid() })
    res.redirect('/comments')
});

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
});

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
});

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const foundComment = comments.find(c => c.id === id);
    const newCommentText = req.body.comment;
    foundComment.comment = newCommentText;
    res.redirect('/comments')
});

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
});

app.get('/tacos', (req, res) => {
    res.send("GET /tacos response")
});

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok, here are your ${qty} ${meat} tacos`)
});

app.listen(3000, () => {
    console.log("Listening at port 3000")
});