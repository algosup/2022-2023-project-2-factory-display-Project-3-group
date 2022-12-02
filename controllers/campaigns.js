const add_campaign = async (req, res) => {
    try{
        const arrimages = [];
        for(let i=0; i<req.files.length; i++){
            arrimages[i] = req.files[i].filename;
        }
        const campaign = new Campaign({
            title : req.body.title,
            img: arrimages,
            author : req.body.author,
            screen : req.body.screen,
            screenGroup: req.body.screenGroup,
            Date: req.body.Date
    });
    const campaign_data = await campaign.save();
    res.status(201).send({success:true,msg:"Product Details",data:campaign_data});
    }catch(err){
        res.status(400).send({success:false, msg:error.message});
}



module.exports = {add_campaign}}