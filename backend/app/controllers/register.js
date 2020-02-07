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
        email,
        prefix_th,
        prefix_eng
    } = req.body
    console.log(birthday)
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
            email: email,
            prefix_th: prefix_th,
            prefix_eng: prefix_eng
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
    console.log(req.body)
    User.findByIdAndUpdate(id, { school: {
        gpax:gpax,
        grade:grade,
        school_name:school_name,
        school_province:school_province
        }
    }, (err, result) => {
        console.log("update")
        console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}

exports.step3 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    const disease = req.body
    console.log("step3")
    console.log(req.body)
    User.findByIdAndUpdate(id, { disease: disease}, (err, result) => {
        console.log("update")
        console.log(result)
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

        home_number,
        road,
        village,
        lane,
        sub_district,
        district,
        province,
        postal_code,

        home_number_regis,
        road_regis,
        village_regis,
        lane_regis,
        sub_district_regis,
        district_regis,
        province_regis,
        postal_code_regis,

        home_number_parent,
        road_parent,
        village_parent,
        lane_parent,
        sub_district_parent,
        district_parent,
        province_parent,
        postal_code_parent,

        relation,
        name,
        tel,
        email,
        prefix_th

    } = req.body
    console.log(id)
    User.findByIdAndUpdate(id, {
        address: {
            address_present: {
                home_number: home_number,
                road: road,
                village:village,
                lane: lane,
                sub_district: sub_district,
                district: district,
                province: province,
                postal_code: postal_code,
            },
            address_regis: {
                home_number: home_number_regis,
                road: road_regis,
                village:village_regis,
                lane: lane_regis,
                sub_district: sub_district_regis,
                district: district_regis,
                province: province_regis,
                postal_code: postal_code_regis,
            },
            address_parent: {
                home_number: home_number_parent,
                road: road_parent,
                village:village_parent,
                lane: lane_parent,
                sub_district: sub_district_parent,
                district: district_parent,
                province: province_parent,
                postal_code: postal_code_parent,
            },
            parent: {
                relation:relation,
                name: name,
                tel: tel,
                email: email,
                prefix_th: prefix_th
            }
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

exports.step5 = (req, res) => {
    console.log(req.user._id)
    console.log("step 5")
    const id = req.user._id
    const {
        one_department,
        one_faculty,
        one_university,
        two_department,
        two_faculty,
        two_university,
        three_department,
        three_faculty,
        three_university,
        interest,
        one_camp,
        one_camp_university,
        two_camp,
        two_camp_university,
        three_camp,
        three_camp_university,

    } = req.body
    console.log(id)
    User.findByIdAndUpdate(id, { future : {
        one: {
            department: one_department,
            faculty: one_faculty,
            university: one_university,
        },
        two: {
            department: two_department,
            faculty: two_faculty,
            university: two_university,
        },
        three: {
            department: three_department,
            faculty: three_faculty,
            university: three_university,
        },
        interest:interest,
        one_camp: {
            camp: one_camp,
            university: one_camp_university
        },
        two_camp: {
            camp: two_camp,
            university: two_camp_university
        },
        three_camp: {
            camp: three_camp,
            university: three_camp_university
        },
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

exports.step6 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    console.log("step 6")
    console.log(id)
    User.findByIdAndUpdate(id, { 
        ability: req.body
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}

exports.step7 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    console.log("step 7")
    console.log(id)
    User.findByIdAndUpdate(id, { 
        location: req.body.location,
        news: req.body.news,
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}

exports.step8 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    console.log("step 8")
    console.log(id)
    User.findByIdAndUpdate(id, { 
        question: req.body
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}

exports.step9 = (req, res) => {
    console.log(req.user._id)
    const id = req.user._id
    console.log("step 9")
    console.log(id)
    User.findByIdAndUpdate(id, { 
        tracking_number: req.body.tracking_number
     }, (err, result) => {
        console.log("update")
        // console.log(result)
        if (err) {
            res.sendStatus(400)
        }
        res.sendStatus(200)
    })
}