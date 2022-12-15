import express from 'express';
import './db.js';
import { Campaign, GroupScreen, Screen, ScreenDisplay } from './db.js';
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

    Campaign.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            fsExtra.emptyDirSync("./Public/img/uploads/");
            res.redirect('/accueil.html');
                
            
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



app.post("/api/implementScreen", (req, res) => {
    const obj = {
        name: req.body.name,
        adresse: req.body.adresse,
    }
    Screen.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            const nameScreen = req.body.name;
            fs.writeFile('Public/Screen/'+nameScreen+'.html', `<!DOCTYPE html><html lang='en'><head><META HTTP-EQUIV='refresh' CONTENT='60'><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport'content='width=device-width, initial-scale=1.0'><title>Document</title>
            </head>
            <body>
                <div class='container'>
                </div>
            </body>
            <script type="module">
            const response = await fetch('/api/getCampaign');
            const campaigns = await response.json();
            
            
            const container = document.querySelector('.container');
            const todayDate = new Date();
            
            for (let i = 0 ; i < campaigns.length; i++) {
              const campaignImg = document.createElement('div');
            //   console.log(campaigns[i].startDate.split('T')[1].split(':')[0])  // HOUR DB
            //   console.log(campaigns[i].startDate.split('T')[1].split(':')[1])  // MINUTE DB 
            //   console.log(campaigns[i].startDate.split('T')[0].split('-')[2])  // day
            //     console.log(todayDate.getHours())   // Hour
            //     console.log(todayDate.getDate())    // DAY
            //     console.log(todayDate.getMinutes())   // MINUTE
                if(campaignImg[i].screen == ${nameScreen} && (campaigns[i].startDate.split('T')[1].split(':')[0])+1 == todayDate.getHours() && campaigns[i].startDate.split('T')[1].split(':')[1] == todayDate.getMinutes() && campaigns[i].startDate.split('T')[0].split('-')[2] == todayDate.getDate()){
                    campaignImg.innerHTML = ``<img src="data:image/png;base64,${campaigns[i].img.data}" width="100%">``;
                    container.append(campaignImg); // append the img to the container
                }
                else
                campaignImg.innerHTML = ``<h1>NO CAMPAIGN</h1>``;
                container.append(campaignImg); // append the error to the container
            };
            </script>
            </html>`, (error) => { /* handle error */ });
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



app.post("/api/createGroupScreen", (req, res) => {
    const obj = {
        name: req.body.name,
        numberScreen: req.body.numberScreen,
        description: req.body.description,
    }
    GroupScreen.create(obj, (err, item) => {
        if (err) {
            console.log(err);
        }
        else {
            item.save();
            res.redirect('/accueil.html');
        };
    });
   });

app.get("/api/getGroupScreen/find", (req, res) => {
    GroupScreen.find({}, (err, result) => {
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




