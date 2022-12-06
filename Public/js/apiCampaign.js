const response = await fetch('/api/getCampaign');
const campaigns = await response.json();

const campaignElem = document.getElementById('table');

for (let i = 0 ; i < campaigns.length; i++) {
  const campaignRow = document.createElement('tr');
  const campaignTh = document.createElement('th');
  const campaignDate = document.createElement('td');
  const campaignTitle = document.createElement('td');
  campaignTh.setAttribute('scope', 'row');
  campaignTh.textContent = i;
  campaignTitle.textContent = campaigns[i].title;
  campaignDate.textContent = campaigns[i].startDate.split('T')[0];
  campaignRow.append(campaignTh);
  campaignRow.append(campaignDate);
  campaignRow.append(campaignTitle);

  campaignElem.append(campaignRow); // append the row to the table
}




