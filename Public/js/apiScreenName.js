const response = await fetch('/api/getScreen/find');
const screens = await response.json();



const screenElem = document.getElementById('nameScreen');

for (let i = 0 ; i < screens.length; i++) {
  const screenRow = document.createElement('option');
  const screenName = document.createElement('option');
  
  screenName.textContent = screens[i].name;
  screenRow.append(screenName);
  screenElem.append(screenRow); // append the row to the table
};