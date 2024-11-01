const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, World! This is the backend server.');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
