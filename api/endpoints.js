const API_KEY = "906f76643389d4e7302a523c8ad3d041";
// API KEY-urile nu ar trebui stocate in repo si in format text, deoarece nu este secure - API KEY-urile este de preferat sa fie stocate pe un server, insa fiinca API-ul de la Open weathe este gratuit, momentan e ok sa il tinem aici

// Definim endpoint-urile catre server:
//Pentru endpoint-ul de vreme curenta, trebuie sa inseram dinamic parametrul city - ne definim in functie un parametru
function getCurrentWeatherEndpoint(city){
    //API-ul de la Open weather are nevoie de urmatoarele query params: city, lang (RO), units (metric - pentru a primi rezultatele in grade celsius)
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};

function getForcastEndpoint(city){
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ro&units=metric&appid=${API_KEY}`;
};

