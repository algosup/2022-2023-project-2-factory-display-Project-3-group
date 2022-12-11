const videoSrc = document.querySelector("#video-source");
const videoTag = document.querySelector("#video-tag");
const inputTag = document.querySelector("#input-tag");

inputTag.addEventListener('change',  readVideo)

function readVideo(event) {
  console.log(event.target.files)
  if (event.target.files && event.target.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function(e) {
      console.log('loaded')
      videoSrc.src = e.target.result
      videoTag.load()
    }.bind(this)

    reader.readAsDataURL(event.target.files[0]);
  }
}

var validBtn = document.getElementById("valider");
validBtn.addEventListener("click", function () {
  
    let text = "Votre campagne a été créée";
    if (confirm(text) == true) {
     window.location.href = "accueil.html";
  } else {
    window.location.href = "newCampaign.html";
  }

});

