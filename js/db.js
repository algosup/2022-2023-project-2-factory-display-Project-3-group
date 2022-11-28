import mangoose from 'mongoose';

await mangoose.connect('mongodb+srv://admin_project:dojWnMcFPkkIynfu@factorydisplay.nlhigvx.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
()=>console.log(mangoose.connection));

const campaignSchema = new mangoose.Schema({
    id : Number,
    title : String,
    img:{
        data: Buffer,
        type : String
    },
    author : String,
    screen : String,
    screenGroup: String,
    Date: { type: Date, default: Date.now }
});



module.exports = new mangoose.model('Campaign', campaignSchema);