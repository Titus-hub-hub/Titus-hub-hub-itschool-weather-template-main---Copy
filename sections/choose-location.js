// Selectam butoanele din dropdown cu orase
const bucharestButton = document.querySelector(".dropdown-item.bucharest");
const timisoaraButton = document.querySelector(".dropdown-item.timisoara");
const oradeaButton = document.querySelector(".dropdown-item.oradea");
const aradButton = document.querySelector(".dropdown-item.arad");
const sibiuButton = document.querySelector(".dropdown-item.sibiu");

//DEfinim o functie care sa ne schimbe orasul curent afisat pe ecran
function updateCurrentCityMain(city){
    //Selectam tag-ul de HTML unde o sa schimbam orasul
    const currentCity = document.querySelector(".current-city");
    currentCity.innerHTML = `${city}.`;
}

function updateWeather(city) {
    //Salvam in LocalStorage optiunea aleasa
    localStorage.setItem("City", city);
    //Afisam vremea curenta
    displayCurrentWeather(city);
    //Apelam functia care ne schimba orasul curent de pe ecran
    updateCurrentCityMain(city);
    //Reafisam prognoza pentru urmatoarele 5 zile
    displayWeatherForcast(city);
}
//console.log(bucharestButton, timisoaraButton, oradeatButton);

//Adaugam event listenere pe butoane pentru a schimba datele de pe vreme
bucharestButton.addEventListener("click", function(){
    console.log("bucharest clicked");
    updateWeather("București");
});

timisoaraButton.addEventListener("click", function(){
    console.log("timisoara clicked");
    updateWeather("Timișoara");
});

oradeaButton.addEventListener("click", function(){
    console.log("oradea clicked");
    updateWeather("Oradea");
});

aradButton.addEventListener("click", function(){
    updateWeather("Arad")
})

sibiuButton.addEventListener("click", function(){
    updateWeather("Sibiu")
})