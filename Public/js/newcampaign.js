
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-storage.js";
import { getDatabase,ref,set } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-database.js";


var firebaseConfig = {
  apiKey: "AIzaSyARkSAA_0zy7IiIOYuHG_VrOayh5l3SBW0",
  authDomain: "jacobi1.firebaseapp.com",
  projectId: "jacobi1",
  storageBucket: "jacobi1.appspot.com",
  messagingSenderId: "741399378229",
  appId: "1:741399378229:web:1bbdb9c858d570b9dc747c",
  databaseURL: "https://jacobi1-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app); 





var uploader = document.getElementById('uploader');
var fileButton = document.getElementById('fileButton');

fileButton.addEventListener('change', function (e) {
    var file = e.target.files[0];


    var storageRef = firebase.storage().ref('image/' + file.name);
    var task = storageRef.put(file);
    task.on('state_changed',
        function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function error(err) {

        },
        function complete() {

        }
    );


});

var validBtn = document.getElementById("valider");
validBtn.addEventListener("click", function (event) {
    //event.preventDefault();
    console.log("I'm here");

    var title = document.getElementById("title").value;
    // var docname = file.name;
    writeData(title);

});


function writeData(title) {
    const db = getDatabase();
    set(ref(db, 'campagne/'), {
        title: title,
        
    });
}

function showimage() {



    var storageRef = firebase.storage().ref();
    var spaceRef = storageRef.child('image/Vidéo 2_ Explication de la décision.MOV');
    storageRef.child('image/Vidéo 2_ Explication de la décision.MOV').getDownloadURL().then(function (url) {
        var test = url;
        //alert(url);
        document.querySelector('video').src = test;

    }).catch(function (error) {

    });
}