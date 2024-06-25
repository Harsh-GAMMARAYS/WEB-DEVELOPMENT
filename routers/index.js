const express = require('express');
const app = express();
const shelterRouters = require('./routes/shelters');
const dogRouters = require('./routes/dogs');
const adminRouter = require('./routes/admin');

app.use('/breeders', shelterRouters);
app.use('/dogs', dogRouters);
app.use('/admin', adminRouter);














app.listen(3000, () => {
    console.log("Server Connected!")
});