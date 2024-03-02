// ./routes/api.js
const express = require('express');
const router = express.Router();

router.get('/product', async(req, res) => {
    
    
});

router.post('/product', (req, res) => {
    res.send("Product added");
});

router.put('/product', (req, res) => {
    res.send("Product info updated");
});

router.delete('/product', (req, res) => {
    res.send("Product deleted");
});

module.exports = router;
