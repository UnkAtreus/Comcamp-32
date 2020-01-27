const register = require('./controllers/register')
const auth = require('./middlewares/auth')
const validateStep = require('./middlewares/validationStep')


//you can include all your controllers

module.exports = function (app, passport) {


    app.get('/', (req, res) => {
        console.log("Recieve Connection")
        res.send("Recasdasdasdasdieve Connection")
    });

    app.get('/auth/facebook', passport.authenticate('facebook'))
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {session: true}), (req, res) => {
        res.redirect('/register')
    });
    
    app.get('/api/logout', (req, res) => {
        console.log("logout")
        req.logout()
        res.sendStatus(200)
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user)
    });

    app.post('/api/register/0', auth.isLoggedIn, validateStep.step0Validation(), validateStep.validate, register.step0)
    app.post('/api/register/1', auth.isLoggedIn, validateStep.step1Validation(), validateStep.validate, register.step1)
    app.post('/api/register/2', auth.isLoggedIn, validateStep.step2Validation(), validateStep.validate, register.step2)
    

}