const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const date = new Date().toISOString();
    res.send(`Karl Jumamil - WEB322 ${date}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
