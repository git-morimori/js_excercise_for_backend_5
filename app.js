const express = require('express');
const router = require('./router');
const app = express();
const PORT = 3001;

app.use('/pages', router);
app.listen(PORT, () => {
    console.log(`Expmple app listening on port ${PORT}`);
});