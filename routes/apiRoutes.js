const router = require('express').Router();
const savedNotes = require('../db/savedNotes');

router.get('/notes', function (req, res) {
    savedNotes
        .fetchNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

router.post('/notes', (req, res) => {
    savedNotes
        .appendNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

// Delete Note
router.delete('/notes/:id', function (req, res) {
    savedNotes
        .deleteNote(req.params.id)
        .then(() => res.json({ ok: true }))
        .catch(err => res.status(500).json(err));
});

module.exports = router;