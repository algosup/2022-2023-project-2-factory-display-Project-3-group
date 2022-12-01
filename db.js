import mangoose from 'mongoose';
import { Router } from 'express';

const campaignSchema = new mangoose.Schema({
    title :{
        type: String,
        required: true,
    },
    img:{
        data: Buffer,
        type : String,
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