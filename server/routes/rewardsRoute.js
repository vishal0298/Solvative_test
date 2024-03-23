const express = require('express')
const router = express.Router()

router.get('/:id', async(req, res) => {
    try {
        const Id = req.params.id;

        const history = await RewardHistory.find({ givenTo: Id });

        res.status(200).json({ history });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router