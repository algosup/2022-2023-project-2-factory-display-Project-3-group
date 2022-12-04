//  myheader = ``;

printHeader = document.querySelector("header");
printHeader.innerHTML = `<nav class="navbar navbar-expand-lg bg-light">
<a class="navbar-brand" href="/views/accueil.html">
  <img class="logo" src="/public/img/JacobiLogo.png" width="80" height="40" alt="">
</a>
<div class="container-fluid">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav m-auto">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="/views/accueil.html">Accueil</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/views/campaign.html">Campagne</a>
        <li class="nav-item">
          <a class="nav-link" href="/views/addScreen.html">Ecrans</a>
        </li>
        </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mon Espace
        </a>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="/views/account/my_account.html">Mon compte</a></li>
          <li><a class="dropdown-item" href="/views/newAccount.html">Créer un compte</a></li>
          <li><a class="dropdown-item" href="/views/account/settings.html">Paramètres</a></li>
          <li><a class="dropdown-item" id="logout">Déconnexion</a></li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</nav>
<hr>
`;