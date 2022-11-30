
import fs from "fs";
import multer from 'multer';

// app.use(multer({ dest: "/newCampaign",
//   rename: function (fieldname, filename) {
//     return filename;
//   },
// }));

// app.post('/api/photo',function(req,res){
//     var newItem = new Item();
//     newItem.img.data = fs.readFileSync(req.files.userPhoto.path)
//     newItem.img.contentType = 'image/png';
//     newItem.save();
//   });

app.get('/Public/HTML/accueil.html', (req, res) => res.json({
    name: 'Blog App',
    author: 'ALGOSUP',
    description: `This is a blog website app. It's used for publishing and reading articles online.`
}));
