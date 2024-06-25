const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next();
    }
    res.send("Not allowed")
});

router.get('/topsecret', (req, res) => {
    res.send("This is Admin")
});

router.get('/deleteeverything', (req, res) => {
    res.send("This is Admin")
});

module.exports = router;