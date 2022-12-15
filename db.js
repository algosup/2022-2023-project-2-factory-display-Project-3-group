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
        data: Array,
        contentType: String
    }, 

    screen : {
        type: String,
        required: true,
    },
    screenGroup: {type: String, default: null},
    startDate: { type: Date, default: Date.now },
    endDate: { type: Date, default: Date.now},
    
});
 

const screenSchema = new mangoose.Schema({
    name:{
        type: String,
        required: true,
    },
    adresse:{
        type: String,
        required: true,
    },
});


const groupScreenSchema = new mangoose.Schema({
    name:{
        type: String,
        required: true,
    },

    numberScreen:{
        type: Number,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },

});





export const Campaign =  mangoose.model('Campaign', campaignSchema);

export const Screen =  mangoose.model('Screen', screenSchema);


export const GroupScreen =  mangoose.model('GroupScreen', groupScreenSchema);


