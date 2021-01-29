var firebase = require('firebase')

module.exports.auth = (req, res, next) => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user && user.uid) {
            next()
        } else {
            res.redirect('/login')
        }
    })
}
