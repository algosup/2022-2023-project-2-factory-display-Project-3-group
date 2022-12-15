
 import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";

 const firebaseConfig = {
    apiKey: "AIzaSyDp6LAdcILJ4vgNsUPUAxQQcYKqbP9gGaI",
    authDomain: "jacobi-project.firebaseapp.com",
    databaseURL: "https://jacobi-project-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "jacobi-project",
    storageBucket: "jacobi-project.appspot.com",
    messagingSenderId: "78871282404",
    appId: "1:78871282404:web:2e851b03a340a732c522f1"
  };
 
  
const app = initializeApp(firebaseConfig);

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