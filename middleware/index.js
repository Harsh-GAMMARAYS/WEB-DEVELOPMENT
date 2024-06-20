const express = require('express');
const app = express();

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
});

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS")
    next();
});

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    res.send('NO,You need a password')
}

app.get('/', (req, res) => {
    res.send("HOME PAGE")
});

app.get('/dogs', (req, res) => {
    res.send("WOOF")
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send("HEADPHONES")
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND')
});

app.listen(3000, () => {
    console.log("Listening at PORT 3000")
});
