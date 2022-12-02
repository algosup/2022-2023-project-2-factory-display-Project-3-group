import mangoose from 'mongoose';

mangoose.connect('mongodb+srv://admin_project:dojWnMcFPkkIynfu@factorydisplay.nlhigvx.mongodb.net/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
},
()=>console.log(mangoose.connection));


const campaignSchema = new mangoose.Schema({
    title :{
        type: String,
        required: true,
    },
    img:{
        type:Array, 
        required: true,
    }, 
    author :{
        type: String,
        required: true,
    },
    screen : {
        type: String,
        required: true,
    },
    screenGroup: String,
    Date: { type: Date, default: Date.now }
});



module.exports = new mangoose.model('Campaign', campaignSchema);





function addCampaign(title , img , author , screen , screenGroup, Date){
    const newCampaign = new Campaign({   
        title : title,
        img:{
            data: img,
            type : img
        },
        author : author,
        screen : screen,
        screenGroup: screenGroup,
        Date: Date});
    await newCampaign.save();
}   