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
    console.log("STEP 1")
    const {
        name_th,
        name_eng,
        nickname,
        sex,
        birthday,
        bloodenum,
        religion,
        shirt_size,
        telephone,
        email
    } = req.body
    console.log(id)
    User.findByIdAndUpdate(id, { 
        general: {
            name_th: name_th,
            name_eng: name_eng,
            nickname: nickname,
            sex: sex,
            birthday: birthday,
            bloodenum: bloodenum,
            religion: religion,
            shirt_size: shirt_size,
            telephone: telephone,
            email: email
        }
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}
exports.step2 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    const {
        gpax,
        grade,
        school_name,
        school_province
    } = req.body
    console.log(id)
    User.findByIdAndUpdate(id, { 
        gpax:gpax,
        grade:grade,
        school_name:school_name,
        school_province:school_province
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}

exports.step4 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    const {
        address_present,
        address_regis,
        address_parent,
        relation,
        name,
        tel,
        email,
        recent_camp

    } = req.body
    console.log(id)
    User.findByIdAndUpdate(id, { 
        address_present:address_present,
        address_regis:address_regis,
        address_parent:address_parent,
        relation:relation,
        name: name,
        tel:tel,
        email:email,
        recent_camp:recent_camp
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}

exports.step5 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    const {
        one_faculty,
        one_university,
        two_faculty,
        two_university,
        three_faculty,
        three_university,
        interest

    } = req.body
    console.log(id)
    User.findByIdAndUpdate(id, { 
        one:one_faculty,
        one_university:one_university,
        two_faculty:two_faculty,
        two_university:two_university,
        three_faculty:three_faculty,
        three_university:three_university,
        interest:interest
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}

exports.step6 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    const {
        programming,
        big_data,
        flow_chart,
        microcontroller,
        brain_storm

    } = req.body
    console.log(id)
    User.findByIdAndUpdate(id, { 
        programming:programming,
        big_data:big_data,
        flow_chart:flow_chart,
        microcontroller:microcontroller,
        brain_storm:brain_storm
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}