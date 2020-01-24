const User = require('../models/User')

exports.index = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    const step = req.body.step
    console.log(id)
    if (step === 0) {
        User.findByIdAndUpdate(id, { paper: true }, (err, result) => {
            console.log("update")
            if (err) {
                res.sendStatus(400)
            }
            res.sendStatus(200)
        })
    } else if (step === 1) {

    } else {
        res.sendStatus(400)
    }
}