exports.isLoggedIn = (req, res, next) => {
    if (req.user){
        return next();
    } else {
        res.status(401).json({
            'message': 'access denied'
        });
    }
}