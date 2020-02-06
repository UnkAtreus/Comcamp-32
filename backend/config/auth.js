module.exports = {
    facebook: {
        APP_ID: "838390816607063",
        APP_SECRET: "3760db2dd810bed4079655effb99b307",
        // callbackURL: "http://localhost:3000/auth/facebook/callback"
        // callbackURL: "http://localhost:5000/auth/facebook/callback"
        callbackURL: `http://${process.env.HOST}/auth/facebook/callback`
    }
}