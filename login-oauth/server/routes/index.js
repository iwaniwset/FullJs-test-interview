const router = require('express').Router()
const userRoute = require ('./userRoute')

router.get('/', (req, res) => res.json({
    msg : "Welcome to Refactory"
}))

router.use('/users', userRoute)

module.exports = router