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
    app.get('/auth/facebook/callback', passport.authenticate('facebook',
        { failureRedirect: '/error' }), (req, res) => res.redirect(`http://${process.env.FRONT_END}/register`));


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
    app.post('/api/register/3', auth.isLoggedIn, register.step3)
    app.post('/api/register/4', auth.isLoggedIn, validateStep.step4Validation(), validateStep.validate, register.step4)
    app.post('/api/register/5', auth.isLoggedIn, validateStep.step5Validation(), validateStep.validate, register.step5)
    app.post('/api/register/6', auth.isLoggedIn, validateStep.step6Validation(), validateStep.validate, register.step6)
    app.post('/api/register/7', auth.isLoggedIn, validateStep.step7Validation(), validateStep.validate, register.step7)
    app.post('/api/register/8', auth.isLoggedIn, validateStep.step8Validation(), validateStep.validate, register.step8)
    app.post('/api/register/9', auth.isLoggedIn, validateStep.step9Validation(), validateStep.validate, register.step9)


}