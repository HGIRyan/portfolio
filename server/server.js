// --IMPORTS--
require('dotenv').config();
const express = require('express')
    , session = require('express-session')
    , bodyParser = require('body-parser')
    , massive = require('massive')

// --SETUP APP--
const app = express();
app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
//important to have this at top of file


// --MASSIVE--
massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})



// --ENDPOINTS--
// --AUTH ENDPOINTS--





// -- LAST END POINT -- DO NOT PUT ANY END POINTS BELOW HERE --
const path = require('path')
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})



// --SETUP APP TO LISTEN TO PORT--
const PORT = 8080;
app.listen(PORT, () => console.log(`Listening on ${PORT}`))
