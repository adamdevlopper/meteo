let ville = "Bruxelles";



recevoirTemperature(ville);

let changerVilleButton = document.querySelector("#changer");

changerVilleButton.addEventListener("click", () => {
  choixVille = prompt("Ecrivez le ville de votre choix");
  recevoirTemperature(choixVille);
});


function recevoirTemperature(ville) {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    ville +
    "&appid=663412759522ab9bddd2a70119c5047d&units=metric";

  let requete = new XMLHttpRequest();

  requete.open("Get", url);
  requete.responseType = "json";
  requete.send();

  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {
        let reponse = requete.response;
        console.log(reponse.main.temp);
        document.querySelector("#ville").textContent = ville;
        document.querySelector("#temperature_label").textContent =
          reponse.main.temp;
      } else {
        alert("Erreur");
      }
    }
  };
}
