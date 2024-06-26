const express = require('express');
const router = express.Router();
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('../config')
const zod = require('zod');
const authMiddleware = require('../middleware');

const signupSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    username: zod.string().email(),
    password: zod.string(),
});

const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

const updateSchema = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional(),
});

router.post('/signup', async (req, res) => {
    const { success } = signupSchema.safeParse(req.body);

    if (!success) {
        return res.json({
            message: "Incorrect Input"
        })
    }

    const user = await User.findOne({
        username: req.body.username
    });

    if (user._id) {
        return res.json({
            message: "Email already exists"
        });
    }

    const newUser = await User.create(req.body);

    const token = jwt.sign({
        userId: newUser._id
    }, JWT_SECRET);

    res.json({
        message: "User Created Successfully",
        token: token
    });
});

router.post('/signin', async (req, res) => {
    const { success } = signinSchema.safeParse(req.body);

    if (!success) {
        return res.json({
            message: "Incorrect Input"
        })
    }

    const { username, password } = req.body;

    try {
        const user = await User.findOne({
            username,
            password,
        });

        if (!user) {
            throw new Error('Invalid credentials');
        }

        res.json({
            message: 'User logged in successfully'
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put('/', authMiddleware, async (req, res) => {
    const { success } = updateSchema.safeParse(req.body);

    if (!success) {
        return res.json({
            message: "Error while updating the information"
        })
    }

    await User.updateOne(req.body, {
        id: req.userId
    });

    res.json({
        message: 'User updated successfully'
    });
});

router.get('/', authMiddleware, async (req, res) => {
    const user = await User.findOne({
        username: req.user.username
    });

    res.json({
        user
    });
});

router.get('/bulk', authMiddleware, async (req, res) => {
    const filter = req.query.filter || "";

    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter,
            }
        }, {
            lastName: {
                "$regex": filter,
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            firstName: user.firstName,
            lastName: user.lastName,
            username: user.username,
            id: user._id
        }))
    });
});

module.exports = router;