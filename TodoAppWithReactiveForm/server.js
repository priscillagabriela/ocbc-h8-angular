function requiredHTTPS (req, res, next) {
    if(
        !req.secure
        && req.get('x-forwarded-proto') !== 'https'
    ) {
        return res.redirect(
            'https://' + req.get('host') + req.url
        )
    }
    next();
}

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app
.use(requireHTTPS) //kalo dijalanin local, comment line ini
//ikuti nama app-nya mengikuti nama di package.json
.use(express.static('./dist/TodoApp'))

.get('/*', (req, res) => res.sendFile('index.html',{ root: 'dist/TodoApp/'}))

.listen(port, () => {
    console.log(`My Angular application is now runnint! http://localhost:${port}`)
})