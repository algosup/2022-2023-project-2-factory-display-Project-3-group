 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-database.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

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
 const database = getDatabase(app);
 const auth = getAuth();

signUp.addEventListener('click',(e) => {

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const name = document.getElementById('name').value;
    const familyname = document.getElementById('familyname').value;
    const success = document.getElementById('success');
    const signupBox = document.getElementById('signup-box');
    const signup = document.getElementById('signUp');

    if (email.endsWith("@jacobi.fr"))
    {
      if (confirmPassword == password) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
    
          set(ref(database, 'users/' + user.uid),{
            name: 'name',
            familyname: 'familyname',
            email: 'email'
          })
          const successMessage = "Votre compte a été créé avec succès.";
          var p = document.createElement("p");
          p.textContent = successMessage;
          success.innerHTML = "";
          success.appendChild(p);
          success.style.color = "green";
          signupBox.style.height = "130%";
          signup.style.marginTop = "0px";
          // document.getElementById("email2").value = "";
          // document.getElementById("password2").value = "";
          // ...

          setTimeout(
            function() {
              window.location = 'accueil.html';
            }, 3000);
        })

        .catch((error) => {
          if (error.code == "auth/email-already-in-use") {
            const errorMessage = "Cette adresse email est déjà utilisée.";
            var p = document.createElement("p");
            p.textContent = errorMessage;
            success.innerHTML = "";
            success.appendChild(p);
            success.style.color = "red";
            signupBox.style.height = "128%";
            signup.style.marginTop = "0px";
          } 
      });
             
      } else {
        const errorMessage = "Les mots de passe ne correspondent pas.";
        var p = document.createElement("p");
        p.textContent = errorMessage;
        success.innerHTML = "";
        success.appendChild(p);
        success.style.color = "red";
        signupBox.style.height = "136%";
        signup.style.marginTop = "0px";
      }
    }

    else {
      const jacobiMessage = "Veuillez utiliser une adresse mail Jacobi.";
      var p = document.createElement("p");
      p.textContent = jacobiMessage;
      success.innerHTML = "";
      success.appendChild(p);
      success.style.color = "red";
      signupBox.style.height = "136%";
      signup.style.marginTop = "0px";
    };
  });