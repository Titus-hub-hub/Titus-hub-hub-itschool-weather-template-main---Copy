//Ne declaram alte functii utilitare pe care o sa le folosim pentru a parsa viteza vantului si iconita
function windToKMperHour(windperMeters){
    //Noi de la API primim viteza vantului in metri/s si vrem sa o transformam in km/h
    return (windperMeters*3600) / 1000;
};

function getWeatherIcon(iconCode){
    //Noi de la API primim un cod pentru iconita si ne folosim de URL-ul de la Open weather dedicat iconitelor
    return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
};