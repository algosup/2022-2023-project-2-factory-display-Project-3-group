import express from 'express';
import './db.js';
import { Campaign, Test } from './db.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/img/campaigns');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });


app.post("/api/newCampaign", (req, res) => {
    const myData = new Campaign(req.body,);
    myData.save()
    .then(item => {
    res.send("Campaign created");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });



app.post('/api/newCampaign/test', upload.single('image'), (req, res, next) => {
 
    const obj = new Campaign({
        title: req.body.title,
        img: {
            data: fs.readFileSync(path.join('Public/img/campaigns/' + req.file.filename)),
            contentType: 'image/png'
        },
        screen: req.body.screen,
        startDate: req.body.start,
        endDate: req.body.end,
       

    })
        obj.save()
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




