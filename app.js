require('dotenv').config()

const express = require('express');
const app = express()

const authRoutes = require('./routes/authRoutes.js')
const { auth } = require('./middleware/smoothies.js')

app.listen(process.env.PORT)

app.use(express.static('public'))
app.use(express.json())
app.set('view engine', 'ejs')

var firebase = require('firebase')

var firebaseConfig = {
    apiKey: "AIzaSyAau1qBzIWUuXnhmRWw3Xuy-RdRwekd9A8",
    authDomain: "tring-cac7d.firebaseapp.com",
    projectId: "tring-cac7d",
    storageBucket: "tring-cac7d.appspot.com",
    messagingSenderId: "1028340321124",
    appId: "1:1028340321124:web:e9822fedaff6fa8bb6c871"
};

firebase.initializeApp(firebaseConfig);

app.get('/', (req, res) => {
    res.render('home')
})
app.get('/smoothies', auth, (req, res) => {
    res.render('smoothies')
})

// Routes
app.use(authRoutes)