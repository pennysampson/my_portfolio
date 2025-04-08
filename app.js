const express = require('express');
const path = require('path');

const app = express();
const port = 5555;

app.use(express.static(path.join(__dirname, 'resources')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'resources', 'templates', 'index.html'));
});

app.get('/fragments/navbar.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'resources', 'templates', 'fragments', 'navbar.html'));
  });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});