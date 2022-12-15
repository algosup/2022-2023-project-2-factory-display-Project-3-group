const response = await fetch('/api/getCampaign');
const campaigns = await response.json();


const campaignElem =  document.getElementById('displayImg');

for (let i = campaigns.length ; i > campaigns.length-4; i-- ){
    const campaignImg = document.createElement('img');
    campaignImg.setAttribute('src', `data:image/png;base64,${campaigns[i-1].img.data}`);
    campaignImg.style.width = '15%';
    campaignElem.append(campaignImg);
  };
  