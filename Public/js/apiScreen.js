
const response = await fetch('/api/getScreen/find');
const screens = await response.json();



const screenElem = document.getElementById('ecranSeul');

for (let i = 0 ; i < screens.length; i++) {
  const screenRow = document.createElement('tr');
  const screenTh = document.createElement('th');
  const screenName = document.createElement('td');
  const screenAdress = document.createElement('td');

  screenTh.innerHTML = ' <form method="post" action="/api/deleteScreen"><input type="checkbox" name="select" value="' + screens[i].name + '"/></form>';
  screenName.textContent = screens[i].name;
  screenAdress.textContent = screens[i].adresse;
  screenRow.append(screenTh);
  screenRow.append(screenName);
  screenRow.append(screenAdress);
  screenElem.append(screenRow); // append the row to the table
};


