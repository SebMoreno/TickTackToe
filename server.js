function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}
const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
app.use(requireHTTPS);
app.use(express.static('./dist/tick-tack-toe'));
app.get('/*', (req, res) => {
    res.sendFile('index.html', {root: 'dist/tick-tack-toe-test/'});
});
app.listen(port, () => console.log(`Listening on port ${port}`));
