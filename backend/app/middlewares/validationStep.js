const { body, validationResult } = require('express-validator')

const step0Validation = () => {
    return [
        body('step0').not().isEmpty()
    ]
}

const step1Validation = () => {
    return [
        body('fname_th').not().isEmpty(),
        body('lname_th').not().isEmpty(),
        body('fname_eng').not().isEmpty(),
        body('lname_eng').not().isEmpty(),
        body('nickname').not().isEmpty(),
        body('sex').isIn(['ชาย','หญิง']),
        body('birthday').isISO8601().toDate(),
        body('bloodenum').isIn(['A','B','AB','O']),
        body('religion').not().isEmpty(),
        // body('shirt_size').isIn(['S','M','L','XL']),
        body('telephone').not().isEmpty(),
        body('email').isEmail(),
    ]
}
const step2Validation = () => {
    return [
        body('gpax').not().isEmpty(),
        // body('grade').isIn(['4', '5', '6', 'ปวช']),
        body('school_name').not().isEmpty(),
        body('school_province').not().isEmpty(),
    ]
}
const step4Validation = () => {
    return [
        body('home_number').not().isEmpty(),
        // body('road').not().isEmpty(),
        // body('village').not().isEmpty(),
        body('sub_district').not().isEmpty(),
        body('district').not().isEmpty(),
        body('province').not().isEmpty(),
        body('postal_code').not().isEmpty(),

        body('home_number_regis').not().isEmpty(),
        // body('road_regis').not().isEmpty(),
        // body('village_regis').not().isEmpty(),
        body('sub_district_regis').not().isEmpty(),
        body('district_regis').not().isEmpty(),
        body('province_regis').not().isEmpty(),
        body('postal_code_regis').not().isEmpty(),

        body('home_number_parent').not().isEmpty(),
        // body('road_parent').not().isEmpty(),
        // body('village_parent').not().isEmpty(),
        body('sub_district_parent').not().isEmpty(),
        body('district_parent').not().isEmpty(),
        body('province_parent').not().isEmpty(),
        body('postal_code_parent').not().isEmpty(),

        // body('relation').not().isEmpty(),
        // body('name').not().isEmpty(),
        // body('tel').not().isEmpty(),
    ]
}

const step5Validation = () => {
    return [
        // body('one_faculty').not().isEmpty(),
        // body('one_university').not().isEmpty(),
        // body('two_faculty').not().isEmpty(),
        // body('two_university').not().isEmpty(),        
        // body('three_faculty').not().isEmpty(),
        // body('three_university').not().isEmpty(),
        // body('interest').isIn(['reg', 'inter', 'hds']),
    ]
}

const step6Validation = () => {
    return [
        // body('programming').not().isEmpty(),
        // body('big_data').not().isEmpty(),
        // body('flow_chart').not().isEmpty(),
        // body('microcontroller').not().isEmpty(),
        // body('brain_storm').not().isEmpty(),
    ]
}

const step7Validation = () => {
    return [
        // body('location').isIn(['มา มจธ. ด้วยจนเอง', 'สายใต้ใหม่ ถนนบรม (ใต้)', 'ขนส่งเอกมัย (ตะวันออก)', 'หัวลำโพง (รถไฟ)', 'อนุเสาวรีย์ชัยสมรถภูมิ (รถตู้)'])
    ]
}

const step8Validation = () => {
    return [
        body('question1').not().isEmpty(),
        body('question2').not().isEmpty(),
        body('question3').not().isEmpty(),
        body('question4').not().isEmpty(),
        body('question5').not().isEmpty(),
        body('question6').not().isEmpty(),
        body('question7').not().isEmpty(),
        body('question8').not().isEmpty(),
    ]
}

const step9Validation = () => {
    return [
        body('tracking_number').not().isEmpty()
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(400).json({
      errors: extractedErrors,
    })
}

module.exports = {
    step0Validation,
    step1Validation,
    step2Validation,
    step4Validation,
    step5Validation,
    step6Validation,
    step7Validation,
    step8Validation,
    step9Validation,
    validate,
}
  