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
        body('facebook').not().isEmpty(),
        body('birthday').isISO8601().toDate(),
        body('bloodenum').isIn(['A','B','AB','O']),
        body('religion').not().isEmpty(),
        body('shirt_size').isIn(['S','M','L','XL']),
        body('telephone').not().isEmpty(),
        body('email').isEmail(),
        body('gpax').not().isEmpty(),
        body('lv').isIn(['4', '5', '6', 'ปวช']),
        body('school_name').not().isEmpty(),
        body('school_province').not().isEmpty(),
        body('present').not().isEmpty(),
        body('regis').not().isEmpty(),
        body('parent').not().isEmpty(),
        body('parent_relation').not().isEmpty(),
        body('parent_name').not().isEmpty(),
        body('parent_tel').not().isEmpty(),
        body('parent_email').isEmail(),
        body('recent_camp').not().isEmpty(),
        body('one_faculty').not().isEmpty(),
        body('one_university').not().isEmpty(),
        body('two_faculty').not().isEmpty(),
        body('two_university').not().isEmpty(),        
        body('three_faculty').not().isEmpty(),
        body('three_university').not().isEmpty(),
        body('interest').isIn(['reg', 'inter', 'hds']),
        body('programming').not().isEmpty(),
        body('bigdata').not().isEmpty(),
        body('flowchart').not().isEmpty(),
        body('microcontroller').not().isEmpty(),
        body('brainstorm').not().isEmpty(),
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
    validate,
}
  