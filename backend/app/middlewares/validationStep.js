const { body, validationResult } = require('express-validator')

const step0Validation = () => {
    return [
        body('step0').not().isEmpty()
    ]
}

const step1Validation = () => {
    return [
        body('name_th').not().isEmpty(),
        body('name_eng').not().isEmpty(),
        body('nickname').not().isEmpty(),
        body('sex').isIn(['male','female']),
        body('birthday').isISO8601().toDate(),
        body('bloodenum').isIn(['A','B','AB','O']),
        body('religion').not().isEmpty(),
        body('shirt_size').isIn(['S','M','L','XL']),
        body('telephone').not().isEmpty(),
        body('email').isEmail(),
       
    ]
}
const step2Validation = () => {
    [
        body('gpax').not().isEmpty(),
        body('lv').isIn(['4', '5', '6', 'ปวช']),
        body('school_name').not().isEmpty(),
        body('school_province').not().isEmpty(),

    ]
}
const step4Validation = () => {
    [
        body('address_present').not().isEmpty(),
        body('address_regis').not().isEmpty(),
        body('address_parent').not().isEmpty(),
        body('relation').not().isEmpty(),
        body('name').not().isEmpty(),
        body('tel').not().isEmpty(),
        body('email').isEmail(),
        body('recent_camp').not().isEmpty(),

    ]
}

const step5Validation = () => {
    [
        body('one_faculty').not().isEmpty(),
        body('one_university').not().isEmpty(),
        body('two_faculty').not().isEmpty(),
        body('two_university').not().isEmpty(),        
        body('three_faculty').not().isEmpty(),
        body('three_university').not().isEmpty(),
        body('interest').isIn(['reg', 'inter', 'hds']),

    ]
}

const step6Validation = () => {
    [
        body('programming').not().isEmpty(),
        body('big_data').not().isEmpty(),
        body('flow_chart').not().isEmpty(),
        body('microcontroller').not().isEmpty(),
        body('brain_storm').not().isEmpty(),
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
    validate,
}
  