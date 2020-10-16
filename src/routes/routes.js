const express = require('express');
const router = express.Router();

router.get('/moves', async (req, res) => {
  return res.status(200).json("Hello World");
});

module.exports = router;