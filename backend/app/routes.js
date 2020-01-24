const register = require('./controllers/register')
const auth = require('./middlewares/auth')


//you can include all your controllers

module.exports = function (app, passport) {


    app.get('/', (req, res) => {
        console.log("Recieve Connection")
        res.send("Recieve Connection")
    })

    app.get('/auth/facebook', passport.authenticate('facebook'))
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {session: true}), (req, res) => {
        res.redirect('/register')
    })
    
    app.get('/api/logout', (req, res) => {
        req.logout()
        res.sendStatus(200)
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    })

    app.post('/api/register', auth.isLoggedIn, register.index)
    
}