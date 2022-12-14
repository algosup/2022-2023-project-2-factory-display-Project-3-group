
const response = await fetch('/api/getScreen/find');
const screens = await response.json();



const screenElem = document.getElementById('ecranSeul');

for (let i = 0 ; i < screens.length; i++) {
  const screenRow = document.createElement('tr');
  const screenName = document.createElement('td');
  const screenAdress = document.createElement('td');

  
  screenName.textContent = screens[i].name;
  screenAdress.textContent = screens[i].adresse;
  screenRow.append(screenName);
  screenRow.append(screenAdress);
  screenElem.append(screenRow); // append the row to the table
};


