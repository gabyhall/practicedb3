const User = require('./users.model');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.status(200).send({user: savedUser, message: 'user created'});
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.loginUser = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({
            username: username,
            password: password,
        })
        res.status(200).send({user: user, message: "logged in"});
    } catch (error) {
        res.status(500).send(error);
    }
}