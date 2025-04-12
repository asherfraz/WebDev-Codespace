const { addUser, getUsers, getUserById, updateUser, removeUser } = require('../controller/userController');

const express = require('express');
const userRouter = express.Router();

userRouter.get('/', (req, res, next) => {
    res.send('Welcome to the User API!')
});

// addUser, getUsers, getUserById, updateUser, removeUser
userRouter.post('/', addUser);
userRouter.get('/users', getUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', removeUser);
// userRouter.post('/user', addUser);
// userRouter.get('/user', getUsers);
// userRouter.get('/user/:id', getUserById);
// userRouter.put('/user/:id', updateUser);
// userRouter.delete('/user/:id', removeUser);

module.exports = userRouter;