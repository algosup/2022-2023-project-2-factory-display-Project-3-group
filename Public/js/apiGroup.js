
const response = await fetch('/api/getGroupScreen/find');
const groupscreens = await response.json();

const groupScreenElem = document.getElementById('groupeEcran');

for (let i = 0 ; i < groupscreens.length; i++) {
  const groupScreenRow = document.createElement('tr');
  const groupScreenName = document.createElement('td');
  const groupScreenNumber = document.createElement('td');
  const groupScreenDescription = document.createElement('td');
  groupScreenName.textContent = groupscreens[i].name;
  groupScreenNumber.textContent = groupscreens[i].numberScreen;
  groupScreenDescription.textContent = groupscreens[i].description;
  groupScreenRow.append(groupScreenName);
  groupScreenRow.append(groupScreenNumber);
  groupScreenRow.append(groupScreenDescription);
  groupScreenElem.append(groupScreenRow); // append the row to the table
};

function addSelect(){
    // create a new select element
    var select = document.createElement('select');
    select.classList.add('form-select');
    // add the options to the select
    for (var i = 1; i <= 3; i++) {
        var option = document.createElement('option');
        option.value = 'Ecran ' + i;
        option.text = 'Ecran ' + i;
        select.appendChild(option);
    }
    // add the select to the other select
    document.getElementById('essai').append(select);
}
function removeSelect(){
    // remove the last select
    document.getElementById('essai').lastChild.remove();
}

//count how many times the button is clicked
var count = 1;
//add a click event listener to the button
document.getElementById("add").addEventListener("click", function() {
    //increment the count
    count++;
});
document.getElementById("remove").addEventListener("click", function() {
    //increment the count
    if(count > 1){ 
    count--;
    }
});



