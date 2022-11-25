function addStatus(statusInput) {
    var p = document.createElement("p");
    p.innerHTML = statusInput;
    document.getElementById("status").appendChild(p);
};

addStatus("On for 4 hours");

users = [
    'Victor',
    'John',
    'Mary',
    'Jane',
    'Peter',
];

const userList = document.querySelector('#user-list');

function createList() {
    var p = document.createElement("p");
    p.textContent = users;
    document.getElementById("user-list").appendChild(p);
}

createList("users");