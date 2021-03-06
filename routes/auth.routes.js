const {Router} = require('express')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post('/register', async (req, res) => {
    try {
        const {email, password} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: 'Такой пользователь уже зарегистрирован'})
        }
        
    } catch (e) {
        res.status(500).json({ message: 'Что-то не так...'})
    }
})

// /api/auth/login
router.post('/login', async (req, res) => {

})

module.exports = router