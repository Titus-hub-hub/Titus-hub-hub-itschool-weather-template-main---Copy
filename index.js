// Ne selectam tag-ul de HTML care contine orasul curent si impreuna cu cheia din localStorage o sa setam ce folosim
const currentCityTag = document.querySelector(".current-city");
let currentCityLocalStorage = localStorage.getItem("City");

//Daca nu avem un oras salvat in localStorage, default o sa fie Bucuresti
if (!currentCityLocalStorage){
    localStorage.setItem("City", "București");
    currentCityLocalStorage = "București";
}

//Actualizam pe ecran numele orasului
currentCityTag.innerHTML = currentCityLocalStorage;

//Afisam vremea curenta pentru Bucuresti
displayCurrentWeather(currentCityLocalStorage);

//Afisam prognoza pentru urmatoarele 5 zile
displayWeatherForcast(currentCityLocalStorage);