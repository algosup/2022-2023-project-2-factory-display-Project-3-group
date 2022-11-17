
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import { getRemoteConfig } from "firebase/remote-config";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDj29-21NTQGE1LEMuXIdBfCUuGzquAYnY",
    authDomain: "algosupjacobig3.firebaseapp.com",
    projectId: "algosupjacobig3",
    storageBucket: "algosupjacobig3.appspot.com",
    messagingSenderId: "716552633470",
    appId: "1:716552633470:web:98f9f10e0125b922fdac2f",
    measurementId: "G-95VJXYFCWX"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);





function searchFunction() {
    // Declare variables
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    table = document.getElementById("ecranSeul");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  const html = document.querySelector("body");

  function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    html.style.overflow = "hidden";
    var popup = document.getElementById('popup');
    popup.classList.toggle('active');
    html.style.overflow = "scroll";