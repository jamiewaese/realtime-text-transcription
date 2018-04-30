const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static(__dirname));
app.listen(process.env.PORT || 8080, process.env.IP || '127.0.0.1');