var firebase = require('firebase')

module.exports.login_get = (req, res) => { res.render('login') }

module.exports.signup_get = (req, res) => { res.render('signup') }

module.exports.logout = (req, res) => {
    firebase.auth().signOut()
        .then(() => {
            res.redirect('/login')
            return
        })
        .catch(err => {
            console.log(err.message)
        })
}

module.exports.signup_post = (req, res) => {
    const { email, password } = req.body;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(credentials => {
            res.status(200).json({
                redirect: credentials,
                status: 'success'
            })
        })
        .catch(err => {
            res.status(400).json({
                error: err.message,
                status: 'error'
            })
        })
}

module.exports.login_post = (req, res) => {
    const { email, password } = req.body;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(credentials => {
            res.status(200).json({
                redirect: credentials,
                status: 'success'
            })
            return
        })
        .catch(err => {
            res.status(400).json({
                error: err.message,
                status: 'error'
            })
            return
        })
}
