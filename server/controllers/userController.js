const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.signIn = (req, res) => {
    // Implement sign in logic
};

exports.signUp = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const emailExist = await User.findOne({ email: email });
        if (emailExist) {
            return res.json({ message: "Email exist" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const user = await User.create({
            username: name,
            email: email,
            password: hashPassword
        });
        res.status(200).json({ email,user});
    } catch (error) {
        res.json({ message: error.message });
    }
};
