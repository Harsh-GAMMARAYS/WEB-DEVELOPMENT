const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("All Shelters")
});

router.post('/', (req, res) => {
    res.send("Creating Shelters")
});

router.get('/:id', (req, res) => {
    res.send("Viewing one Shelter")
});

router.get('/:id/edit', (req, res) => {
    res.send("Editing one shelter")
});

module.exports = router;
