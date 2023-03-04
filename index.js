const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { connection } = require('./Configs/Config');
const { UserRouter } = require('./Routes/user.route');
const { auth } = require('./Middleware/validate.middleware');
const { dashboardRouter } = require('./Routes/dashboard.route');
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());
app.use(express.text());

app.get('/', async (req, res) => {
    res.send('Welcome in Mock-14')
});


app.use('/', UserRouter);
app.use(auth);
app.use('/', dashboardRouter);


app.listen(PORT, async () => {
    try {
        await connection;
        console.log('Connected to DB');
    } catch (err) {
        console.log('Error in connection to DB');
    }
    console.log(`Server is listening on ${PORT}`);
});