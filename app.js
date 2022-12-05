import express from 'express';
import './db.js';
import { Test } from './db.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Public'));

// app.get('/api', (req, res) => {
//     console.log('Hello World!');
//     return res.status(401).json('Unauthorized');
// });

app.post("/api/addname", (req, res) => {
    const myData = new Test(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
   
   

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});