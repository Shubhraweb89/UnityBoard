const User = require('../models/userModel');

class UserController {
    async registerUser(req, res) {
        const { name, email, password } = req.body;
        try {
            const newUser = new User({ name, email, password });
            await newUser.save();
            res.status(201).json({ message: 'User registered successfully' });
        } catch (error) {
            res.status(400).json({ message: 'Error registering user', error: error.message });
        }
    }

    async loginUser(req, res) {
        const { email, password } = req.body;
        try {
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }
            const isMatch = await user.comparePassword(password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid email or password' });
            }
            res.status(200).json({ message: 'Login successful', user });
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error: error.message });
        }
    }
}

module.exports = new UserController();