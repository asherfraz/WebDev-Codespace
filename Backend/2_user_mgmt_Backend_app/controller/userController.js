const User = require('../models/User');

// Create new User
async function addUser(req, res, next) {
    try {
        const { username, name, email, password, isAdmin, createdAt } = req.body;
        const user = new User({
            username,
            name,
            email,
            password,
            isAdmin,
            createdAt
        });
        // Check if user already exists
        if (!user) {
            return res.status(400).json({
                status: 'fail',
                message: 'User already exists'
            });
        }
        await user.save();
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Get all users
async function getUsers(req, res, next) {
    try {
        const users = await User.find();
        if (!users) {
            return res.status(404).json({
                status: 'fail',
                message: 'No users found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });

    }
}

// Get user by id
async function getUserById(req, res, next) {

    try {
        const { id } = req.params;
        const user = await User.findById(id);
        // check if user not exists
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'User retrieved successfully',
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}


// Update user by id
async function updateUser(req, res, next) {
    try {
        const { id } = req.params;
        const { username, name, email, password, isAdmin } = req.body;
        const updatedUser = await User.findByIdAndUpdate(id, {
            username,
            name,
            email,
            password,
            isAdmin
        }, { new: true });
        // check if user not exists
        if (!updatedUser) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found',
                data: updatedUser
            });
        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: updatedUser
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}

// Delete user by id
async function removeUser(req, res, next) {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        // check if user not exists
        if (!user) {
            return res.status(404).json({
                status: 'fail',
                message: 'User not found'
            });
        }
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            data: user
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

// Export the functions
module.exports = {
    addUser,
    getUsers,
    getUserById,
    updateUser,
    removeUser
};