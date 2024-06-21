const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('tiny'));

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
    throw new AppError('password required', 401);
    // res.send('NO,You need a password')
    // res.status(401);
    // throw new Error('Password Required!')
}

app.get('/', (req, res) => {
    res.send("HOME PAGE")
});

app.get('/error', (req, res) => {
    chicken.fly()
})

app.get('/dogs', (req, res) => {
    res.send("WOOF")
});

app.get('/secret', verifyPassword, (req, res) => {
    res.send("HEADPHONES")
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND')
});

app.use((err, req, res, next) => {
    console.log("**************************************")
    console.log("***************ERROR******************")
    console.log("**************************************")
    next(err);
});

app.listen(3000, () => {
    console.log("Listening at PORT 3000")
});
