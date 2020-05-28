const express = require('express');

const app = express();const 
PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
  });

module.exports = app;
