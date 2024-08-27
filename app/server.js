const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the 'app' directory
app.use(express.static(path.join(__dirname, 'app')));

// Other routes and middleware
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});