const response = await fetch('/api/getScreen');
const screens = await response.json();

const screenElem = document.getElementById('table');

for (let i = 0 ; i < screens.length; i++) {
  const screenRow = document.createElement('tr');
  const screenTh = document.createElement('th');
  const screenName = document.createElement('td');
  const screenAdress = document.createElement('td');
  screenTh.setAttribute('scope', 'row');
  screenTh.textContent = i;
  screenName.textContent = screens[i].name;
  screenAdress.textContent = screens[i].adress;
  screenRow.append(screenTh);
  screenRow.append(screenName);
  screenRow.append(screenAdress);

  screenElem.append(screenRow); // append the row to the table
};
