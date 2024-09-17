// Define the city to get the weather for
// default city : Bruxelles (my city)
let ville = "Bruxelles";

// Fetch the temperature for the defined city
recevoirTemperature(ville);

// Add an event listener to the change city button
let changerVilleButton = document.querySelector("#changer");

changerVilleButton.addEventListener("click", () => {
  // Prompt user to enter a new city
  choixVille = prompt("Ecrivez le ville de votre choix");
  recevoirTemperature(choixVille);
});

// Function to fetch the temperature for a given city
function recevoirTemperature(ville) {
  const url =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  ville +
  "&appid=663412759522ab9bddd2a70119c5047d&units=metric";

// Utilisation de fetch pour envoyer la requête
fetch(url)
  .then(response => {
    // Vérifie si la réponse est OK (status 200-299)
    if (!response.ok) {
      throw new Error("Erreur réseau : " + response.status);
    }
    // Convertit la réponse en JSON
    return response.json();
  })
  .then(data => {
    // Traite les données JSON
    console.log(data.main.temp);
    document.querySelector("#ville").textContent = ville;
    document.querySelector("#temperature_label").textContent = data.main.temp;
  })
  .catch(error => {
    // Gère les erreurs
    alert("Erreur : " + error.message);
  });
}
