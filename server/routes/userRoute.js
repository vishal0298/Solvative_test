const express = require('express')
const User = require('../model/userSchema')
const router = express.Router()

router.get('/', async(req, res) => {
    try {
        const users = await User.find();

        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const { id, name, peerFivePoints, rewardPoints } = req.body;

        const newUser = new User({
            id,
            name,
            peerFivePoints,
            rewardPoints,
        });

        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const userId = req.params.id;
        const { id, name, peerFivePoints, rewardPoints } = req.body;

        let user = await User.findOne({ 'id': userId });

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update user fields
        user.id = id || user.id;
        user.name = name || user.name;
        user.peerFivePoints = peerFivePoints || user.peerFivePoints;
        user.rewardPoints = rewardPoints || user.rewardPoints;

        // Save the updated user to the database
        await user.save();

        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router