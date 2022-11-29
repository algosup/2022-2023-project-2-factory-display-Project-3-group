
 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";




 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyDp6LAdcILJ4vgNsUPUAxQQcYKqbP9gGaI",
   authDomain: "jacobi-project.firebaseapp.com",
   databaseURL: "https://jacobi-project-default-rtdb.europe-west1.firebasedatabase.app",
   projectId: "jacobi-project",
   storageBucket: "jacobi-project.appspot.com",
   messagingSenderId: "78871282404",
   appId: "1:78871282404:web:2e851b03a340a732c522f1"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const database = getDatabase(app);
 const auth = getAuth();
 
   
login.addEventListener('click',(e)=>{
const email = document.getElementById('email2').value;
const password = document.getElementById('password2').value;

   signInWithEmailAndPassword(auth, email, password)
   .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;

     const dt = new Date();
      update(ref(database, 'users/' + user.uid),{
       last_login: dt,
     })

      alert('User loged in!');
      window.location = 'accueil.html';
   })
   .catch((error) => {
     const errorCode = error.code;
     const errorMessage = error.message;

     alert(errorMessage);
});

});
const user = auth.currentUser;
onAuthStateChanged(auth, (user) => {
if (user) {
 const uid = user.uid;
 // ...
} else {
 // User is signed out
 // ...
}
});



