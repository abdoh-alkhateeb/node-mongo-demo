const express = require('express');
const router = express.Router();
const Audiobook = require('../models/audiobook');

router.get('/', async (req, res) => {
  try {
    const books = await Audiobook.find();

    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await Audiobook.findById(req.params.id);

    if (!book) return res.status(404).json({ error: 'Not found' });

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const audiobook = new Audiobook(req.body);

    await audiobook.save();

    res.status(201).json(audiobook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
