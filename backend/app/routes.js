var home = require('./controllers/home')
var auth = require('./controllers/auth')

//you can include all your controllers

module.exports = function (app, passport) {


    app.get('/', (req, res) => {
        console.log("Recieve Connection")
        res.send("Recieve Connection")
    })
    app.get('/home', home.home)

    app.get('/auth/facebook', passport.authenticate('facebook'))
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {session: true}))
    
    app.get('/logout', (req, res) => {
        req.logout()
        res.send(req.user);
    })

    app.get('/current_user', (req, res) => {
        res.send(req.user)
    })
    
}
