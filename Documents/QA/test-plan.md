<h1>Testing Plan</h1>

<summary style="text-decoration: underline; font-size:150%">Table of contents:</summary>

- [Login page](#login-page)
- [Navbar](#navbar)
- [Sign up page](#sign-up-page)
- [Welcome page](#welcome-page)
  - [Create a campaign](#create-a-campaign)
  - [Screens](#screens)
  - [Screen Groups](#screen-groups)

## Login page
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Right login | Right ID and right password (stored in database) entered. | 3 |    1. Enter your login ID. <br /> 2. Enter your password.  <br /> 3. Click on login.     |    You are redirected on the "Accueil" page.    |     There is a pop up and then you are redirected.       |     High     | 
| Wrong login | Wrong ID and/or wrong password (unknown in the database) entered.| 3 |    1. Enter a wrong login. <br /> 2.Enter a wrong password.  <br /> 3. Click on login.     |    The website displays "Adresse mail ou mot de passe incorrect" and you stay on this page.   |     Working       |     Medium    |          
| Empty login | Empty ID and/or empty password entered. | 3 |    1. Enter an empty login. <br /> 2.Enter an empty password.  <br /> 3. Click on login.     |    Nothing happened.   |     Nothing happened.       |     High    |

## Navbar
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       |       
| "Accueil" button| Redirect to "Accueil" page.| 1 |    1. Click on the "Accueil" button. |    You should be redirected to the "Accueil" page.   |     You are redirected to the "Accueil" page.       |     High     |       
| "Campagne" button| Redirect to "Campagne" page.| 1 |    1. Click on the "Accueil" button. |    You should be redirected to the "Accueil" page.   |     You are redirected to the "Accueil" page.       |     High     |      
| "Mon espace" button| A scroll bar appears. | 1 |    1. Click on "Mon espace" button.|    A scroll bar with 4 buttons should appear.   |     A scroll bar with 4 buttons appears.       |     Medium     |     
| "Mon compte" button| Redirect to "Mon compte" page. | 1 |    1. Click on "Mon compte" button.|    You should be redirected to the "Mon compte" page.   |     You are redirected to a blank page because the "Mon compte" page has not been accepted yet.     |     Low     |     
| "Créer un compte" button| Redirect to "Signup" page. | 1 |    1. Click on "Créer un compte" button.|    You should be redirected to the "Signup" page.   |     You are redirected to the "Signup" page.     |     Medium     |

## Sign up page
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| Right sign up | Correct Jacobi email adress, name, family name, password and confirm password filled. | 6 |    1. Enter a name. <br> 2. Enter a family name. <br> 3. Enter the wanted Jocabi email adress. <br> 4. Enter the new password. <br> 5. Confirm new password. <br> 6. Click on login.     |    A message says "Votre compte a été créé avec succès." is displayed for 5 seconds then you are redirected to the "Accueil" page. An account is created in firebase.    |     A message says "Votre compte a été créé avec succès." is displayed for 5 seconds then you are redirected to the "Accueil" page. An account is created in firebase.      |     Medium     | 
| Info not filled | Either email adress, name, family name, password or confirm password is not filled. | 1 |    1. Click on login.     |    Nothing happened.    |   Nothing happened.   |     Low     | 
| Wrong email | Correct name, family, password and confirm password but email adress filled is wrong. | 6 |    1. Enter a name. <br> 2. Enter a family name. <br> 3. Enter a email adress already used. <br> 4. Enter the new password. <br> 5. Confirm new password.  <br> 6. Click on login.     |    A message saying "Votre compte a bien été enregistré" is displayed.    |      Veuillez utiliser une adresse mail Jacobi.     |     Low     | 
| Email already used | Correct name, family, password and confirm password but email adress filled is already used. | 6 |    1. Enter a name. <br> 2. Enter a family name. <br> 3. Enter a wrong email adress. <br> 4. Enter the new password. <br> 5. Confirm new password.  <br> 6. Click on login.     |    A message says "Veuillez utiliser une adresse mail Jacobi." is displayed.    |      A message saying "Veuillez utiliser une adresse mail Jacobi." is displayed.     |     Low     | 
| Confirm password doesn't match | Correct name, family, email adress, but the password and confirm password doesn't match filled is already used. | 6 |    1. Enter a name <br> 2. Enter a family name. <br> 3. Enter the wanted Jocabi email adress. <br> 4. Enter the new password. <br> 5. Enter a different password that doesn't match.  <br> 6. Click on login.     |    A message saying "Les mots de passe ne correspondent pas." is displayed.    |      A message saying "Les mots de passe ne correspondent pas." is displayed.     |     Medium     |      

## Welcome page

### Create a campaign

| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       | 
| "Créer une campagne" button | Open the pop up when  "Créer une campagne" button is clicked. | 1 |    1. Click on "Créer une campagne" button.  |    The pop up is displayed.   |     The pop up is displayed.       |     High     |          
| "Widgets" button | Open the "Add Widgets" page when  "Widgets" button is clicked.| 1 |    1. Click on the "Widgets" button.     |    You are redirected to the "Add Widgets" page.    |     You are redirected to the "Add Widgets" page.       |     Medium     |     
| "Importer un fichier" button | Open the "newCampaign" page when "Importer un fichier" button is clicked.  | 1 |    1. Click on the "Importer un fichier" button.   |    You are redirected to the "newCampaign" page.   |     You are redirected to the "newCampaign" page.       |     Medium     |   
| "Importer une vidéo" button | Open the "addVideo" page when  "Importer une vidéo" button is clicked.| 1 |    1. Click on "Importer une vidéo" button.   |    You are redirected to the "addVideo" page.   |     You are redirected to the "addVideo" page.       |     Medium     |
| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 

### Screens

| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       |
| "Ajouter écran" button | Open the pop up when  "Ajouter écran" button is clicked. | 1 |    1. Click on "Ajouter écran" button.  |    The pop up is displayed.   |     The pop up is displayed.       |     High     |     
| Everything is filled | Create a screen line | 3 |    1. Fill the screen name <br> 2. Fill the screen adress. <br> 3. Click on "Valider" button.  |    A line is created in "Mes écrans" with the references of the new screen.   |     The pop up is displayed.       |     Medium     |     
| Info missing | Some fields are empty | 1 |    1. Click on "Valider" button.  |    Nothing happened.   |     Nothing happened.       |     Medium     |     
| Search screen | Search a screen in the search bar | 1 |    1. Enter the name (or the address) of the screen you are searching for.  |    Every screen line disappear except the ones containing your input.   |     Every screen line disappear except the ones containing your input.       |     Medium     |     
| Delete screen | Delete a screen line | 2 |    1. Click in the checkbox of the line you want to delete. <br> 2. Click on the "Supprimer une ligne" button.   |    The screen line is deleted.   |     The screen line is deleted.       |     Low     |

### Screen Groups

| Test Name | Description | Number of steps |    Steps list     |    Expected    |       Got       |       Priority       | 
| --------- | ----------------- | -------------------- |    ---------------     |    --------    |       ---       |       ---       |
| "Ajouter groupe" button | Open the pop up when  "Ajouter groupe" button is clicked. | 1 |    1. Click on "Ajouter groupe" button.  |    The pop up is displayed.   |     The pop up is displayed.       |     High     |
| Everything is filled | Create a screen group line. | 3 |    1. Fill the screen group name. <br> 2. Fill the screen group description. <br> 3. Choose the number of screens you want in the group with the "+" and "-" buttons. <br> 4. Choose the screen you want to add to group via the list. <br> 5. Click on the "Valider" button.  |    A line is created in "Mes groupes" with the references of the new screen group.   |     A line is created in "Mes groupes" with the references of the new screen group.       |     Medium     |
| Info missing | Some fields are empty | 1 |    1. Click on "Valider" button.  |    Nothing happened.   |     Nothing happened.       |     Medium     |
| Delete screen group | Delete a screen group line | 2 |    1. Click in the checkbox of the line you want to delete. <br> 2. Click on the "Supprimer une ligne" button.   |    The screen group line is deleted.   |     The screen group line is deleted.       |     Low     |