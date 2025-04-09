const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;

app.use(cors({
    origin: 'http://localhost:5173'
}));

app.use(express.json());

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '1.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '1.html'));
});

app.post('/login', (req, res) => {
    const var1 = req.body.email
    const var2= req.body.password

    if (req.body.email==='feirouz@gmail.com') {
        res.status(200).send({ var1, var2 })  
    } else {
        res.status(400).send("notapproved")
   }

    // email==='feirouz@gmail.com' ? res.status(200).send({email,password}) : res.status(400).send("notapproved")


});

app.post('/signup', (req, res) => {
    
    res.send('hello world (POST)');
});

// Tu peux décommenter ceux-là si tu veux les tester
// app.put('/', (req, res) => {
//     res.send('hello world (PUT)');
// });

// app.delete('/', (req, res) => {
//     res.send('hello world (DELETE)');
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});