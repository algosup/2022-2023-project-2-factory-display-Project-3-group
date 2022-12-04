
 import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";


 // Initialize Firebase
 const auth = getAuth();

const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
if (user) {
const uid = user.uid;
// ...
} else {
// User is signed out
window.location = 'index.html';
}
});