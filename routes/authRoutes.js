const { Router } = require('express');
const router = Router()

const authController = require('../controllers/authControllers.js')

router.get('/login', authController.login_get)
router.get('/signup', authController.signup_get)
router.get('/logout', authController.logout)

router.post('/signup', authController.signup_post)
router.post('/login', authController.login_post)

module.exports = router;