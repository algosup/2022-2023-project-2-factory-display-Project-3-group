import express from 'express';
import './db.js';
import { Campaign, GroupScreen, Screen } from './db.js';
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
            let nameScreen = req.body.name;
            nameScreen = nameScreen.toString();

            fs.writeFile('Public/Screen/'+nameScreen+'.html', `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport'content='width=device-width, initial-scale=1.0'><title>Document</title>
            </head>
            <style>
                img{
                border:0;
                margin:0;
                position: fixed; 
                top: 0; 
                left: 0;
                max-height: 100%;
                }
            </style>
            <body>
                <div class='container'>
                </div>
            </body>
            <script type="module">
            const response = await fetch('/api/getCampaign');
            const campaigns = await response.json();
            
            
            const container = document.querySelector('.container');
            const campaignImg = document.createElement('div');
            
            function timeperiod(startdate,enddate){ // returns the time in seconds between the start and end date
                const mounth = startdate.split('T')[0].split('-')[1];
                const day = startdate.split('T')[0].split('-')[2];
                const hour = startdate.split('T')[1].split(':')[0];
                const minute = startdate.split('T')[1].split(':')[1];
                const mounth2 = enddate.split('T')[0].split('-')[1];
                const day2 = enddate.split('T')[0].split('-')[2];
                const hour2 = enddate.split('T')[1].split(':')[0];
                const minute2 = enddate.split('T')[1].split(':')[1];
                let mounthDiff = mounth2 - mounth;
                let dayDiff = day2 - day;
                let hourDiff = hour2 - hour;
                let minuteDiff = minute2 - minute;
            
                mounthDiff = mounthDiff * 30 * 24 * 60 * 60;
                dayDiff = dayDiff * 24 * 60 * 60;
                hourDiff = hourDiff * 60 * 60;
                minuteDiff = minuteDiff * 60;
            
                return mounthDiff + dayDiff + hourDiff + minuteDiff;
            
            }
            const sleep = ms => new Promise(r => setTimeout(r, ms));
            
            
            let todayDate = new Date();
            
            for (let i= 0; i < campaigns.length; i++) {
            
                if(campaigns[i].screen==`+"'"+nameScreen+"'"+` &&campaigns[i].startDate.split('T')[1].split(':')[0] == todayDate.getUTCHours() && campaigns[i].startDate.split('T')[1].split(':')[1] == todayDate.getMinutes() && campaigns[i].startDate.split('T')[0].split('-')[2] == todayDate.getUTCDate()){
                    campaignImg.innerHTML = `+"`"+`<img src="data:image/png;base64,`+'${campaigns[i].img.data}'+`">`+"`"+`;
                    container.append(campaignImg); // append the img to the container
                    await sleep(timeperiod(campaigns[i].startDate,campaigns[i].endDate)*1000)
                    document.location.reload(true);
            
                }
                
            };
            
            setTimeout(function(){ 
                        document.location.reload(true);
                    }, 10000);
            
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




