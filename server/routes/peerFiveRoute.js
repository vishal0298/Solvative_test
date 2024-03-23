const express = require('express')
const User = require('../model/userSchema')
const RewardHistory = require('../model/rewardHistorySchema')
const router = express.Router()

router.get('/:id', async(req, res) => {
    try {
        const Id = req.params.id;

        const history = await RewardHistory.find({ givenBy: Id });

        res.status(200).json({ history });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { senderId, receiverId, points } = req.body;

        const sender = await User.findOne({ id: senderId });
        const receiver = await User.findOne({ id: receiverId });

        if (!sender || !receiver) {
            return res.status(404).json({ message: 'Sender or receiver not found' });
        }

        if (sender.peerFivePoints < points) {
            return res.status(400).json({ message: 'Insufficient points for transfer' });
        }

        sender.peerFivePoints -= points;
        receiver.rewardPoints += points;

        await sender.save();
        await receiver.save();

        const rewardHistoryEntry = new RewardHistory({
            date: new Date(),
            points,
            givenBy: senderId,
            givenTo: receiverId
        });
        await rewardHistoryEntry.save();

        res.status(200).json({ message: 'Points transferred successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.delete('/delete', (req, res) => {
    res.send('To Revoc Transaction of PeerFive ');
});

module.exports = router