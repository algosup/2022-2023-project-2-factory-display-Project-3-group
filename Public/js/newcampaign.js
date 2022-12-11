var validBtn = document.getElementById("valider");
validBtn.addEventListener("click", function () {
  
    let text = "Votre campagne a été créée";
    if (confirm(text) == true) {
     window.location.href = "accueil.html";
  } else {
    window.location.href = "newCampaign.html";
  }


});

