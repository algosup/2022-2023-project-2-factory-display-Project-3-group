import express from 'express';
import './db.js';
import { Campaign, Screen, ScreenDisplay } from './db.js';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import * as fsExtra from "fs-extra";


const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./Public'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './Public/img/uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });




app.post('/api/newCampaign', upload.single('image'), (req, res, next) => {
    const obj = {
        title: req.body.title,
        img: {
            data: fs.readFileSync(path.join('./Public/img/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
        screen: req.body.screen,
        startDate: req.body.start,
        endDate: req.body.end,
       
    }

    const obj2 = {
        ofString: "<H1>HELLO WORLD</H1>"
    }
    Campaign.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            fsExtra.emptyDirSync("./Public/img/uploads/");
            ScreenDisplay.create(obj2, (err, item) => {
                if (err) {
                    console.log(err);
                    }
                    else {
                        item.save();
                        res.redirect('/accueil.html');
                    }
            });
            
    };
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

app.post("api/getDisplayScreen" , (req, res) => {
    ScreenDisplay.find({}, (err, result) => {
        if (err) {
            res.status(400).send("unable to load data");
        } else {
            return res.json(result);
        }
    });
});

app.post("/api/getScreen", (req, res) => {
    const obj = {
        name: req.body.name,
        adresse: req.body.adresse,
    }
    Screen.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.redirect('/accueil.html');
        };
    });
   });



app.get("/api/getScreen/find", (req, res) => {
    Screen.find({}, (err, result) => {
        if (err) {
            res.status(400).send("unable to load data");
        } else {
            return res.json(result);
        }
    });
});

app.post("/api/createScreen",(req,res) => {
    const nameScreen = req.body.name;
    fs.writeFile('Public/Screen/'+nameScreen+'.html', htmlContent, (error) => { /* handle error */ });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});




