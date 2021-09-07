const {Router} = require('express');
const userRouter = Router();
const {createUser, loginUser} = require('./users.controllers');

userRouter.post('/users', createUser);
userRouter.post('/users/login', loginUser);

module.exports = userRouter;