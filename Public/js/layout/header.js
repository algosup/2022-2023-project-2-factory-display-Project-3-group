//  myheader = ``;

printHeader = document.querySelector("header");
printHeader.innerHTML = `<nav class="navbar navbar-expand-lg bg-light">
<a class="navbar-brand" href="accueil.html">
  <img class="logo" src="img/JacobiLogo.png" width="80" height="40" alt="">
</a>
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav m-auto">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="accueil.html">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="campaign.html">Campagnes</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="newAccount.html">Créer un compte</a>
        </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mon Espace
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Mon compte</a></li>
          <li><a class="dropdown-item" id="logout">Déconnexion</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
<hr>
`;