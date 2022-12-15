 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getAuth, signOut  } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";




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

 const app = initializeApp(firebaseConfig);
 const auth = getAuth();





logout.addEventListener('click',(e)=>{

signOut(auth).then(() => {
  // Sign-out successful.
  window.location = 'index.html';
}).catch((error) => {
  // An error happened.
  const errorCode = error.code;
  const errorMessage = error.message;

     alert(errorMessage);
});

});
