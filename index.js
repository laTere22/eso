require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');





// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// global variables
const port = process.env.PORT || 3000;
app.set('port', port);
// Routes
app.use( require('./router/index'));


// Start server
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${port}`);
});