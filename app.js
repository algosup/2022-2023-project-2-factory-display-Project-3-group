import multer from 'multer';
import express from 'express';
import mangoose from 'mongoose';
import bodyParser from 'body-parser';
import RouteProduct from './router/product';

var configData = require("./config/connection");
var connectionInfo = await configData.getConnectionInfo();
mongoose.connect(connectionInfo.DATABASE_URL);

/* mangoose.connect('mongodb+srv://admin_project:dojWnMcFPkkIynfu@factorydisplay.nlhigvx.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
()=>console.log(mangoose.connection)); */

const app = express();

app.listen("3000", () => console.log('Server started on port 5503'));

app.use(bodyParser.json());
app.use('/api/products', RouteProduct);

module.exports = app;




// const storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, './public/img/campaigns');
//     },
//     filename: function(req, file, cb){
//         cb(null, file.fieldname+'-'+Date.now()+'-'+file.originalname);

//     },
// });

// const upload = multer({storage: storage}).single('img');
