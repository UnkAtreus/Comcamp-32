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
  