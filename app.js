require('dotenv').config()

const express = require('express');
const app = express()

const authRoutes = require('./routes/authRoutes.js')

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
    return
})
app.get('/smoothies', (req, res) => {
    const user = firebase.auth().currentUser;
    if (user.emailVerified) {
        res.render('smoothies')
    } else {
        user.sendEmailVerification()
            .then(() => {
                console.log('EMAIL SENT')
            }).catch(err => console.log(err.message))
        res.redirect('/login')
    }
})

// Routes
app.use(authRoutes)

app.listen(process.env.PORT)