import express from 'express';
import './db.js';
import { Campaign, Test } from './db.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Public'));



app.post("/api/newCampaign", (req, res) => {
    const myData = new Campaign(req.body);
    myData.save()
    .then(item => {
    res.send("Campaign created");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });



app.get("/api/getCampaign", (req, res) => {
    Campaign.find({}, (err, result) => {
        if (err) {
            res.status(400).send("unable to load data");
        } else {
            return res.json(result);
        }
    });
});



      
   



            app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
