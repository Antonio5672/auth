var firebase = require('firebase')

module.exports.auth = (req, res, next) => {
    const user = firebase.auth().currentUser;
    if (user.emailVerified) {
        next()
    } else {
        user.sendEmailVerification()
            .then(() => {
                console.log('EMAIL SENT')
            }).catch(err => console.log(err.message))
        res.redirect('/login')
    }
}