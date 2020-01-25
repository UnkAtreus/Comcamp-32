const User = require('../models/User')

exports.step0 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    console.log(id)
    User.findByIdAndUpdate(id, { step0: true }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}

exports.step1 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    console.log(id)
    User.findByIdAndUpdate(id, { step0: true }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}