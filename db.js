import mangoose from 'mongoose';

mangoose.connect('mongodb+srv://admin_project:dojWnMcFPkkIynfu@factorydisplay.nlhigvx.mongodb.net/jacobiFacotry', {
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
        data:Buffer, 
        contentType: String,
    }, 
    // author :{
    //     type: String,
    //     required: true,
    // },
    screen : {
        type: String,
        required: true,
    },
    // screenGroup: String,
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now},
    
});
 

const testSchema = new mangoose.Schema({
    title : String,
    image: Array
});


export const Test = mangoose.model('jacobiFactory', testSchema, 'test');


export const Campaign =  mangoose.model('Campaign', campaignSchema);






// function addCampaign(title , img , author , screen , screenGroup, Date){
//     const newCampaign = new Campaign({   
//         title : title,
//         img:{
//             data: img,
//             type : img
//         },
//         author : author,
//         screen : screen,
//         screenGroup: screenGroup,
//         Date: Date});
//     await newCampaign.save();
// }   