// Declaram functia pentru afisarea vremii pe urmatoarele 5 zile - apelul functiei se va face in alte fisiere
function displayWeatherForcast(city){
    //Generam link-ul de l aopen weather catre care o sa facem call-ul
    const forcastEndpoint = getForcastEndpoint(city);

    //Inainte sa facem cererea catre server si sa afisam noile informatii, selectam tag-ul de HTML pentru afisarea prognozei si stergem orice ar fi inautru
    let weatherForcastContainer = document.querySelector(".weather-forecast");
    weatherForcastContainer.innerHTML = "";
    
    //Facem call-ul catre server
    fetch(forcastEndpoint)
        .then(response => response.json())
        .then((data) => {
            //Din datele venite de la server, ne intereseaza doar list
            const {list} = data;

            //Ne definim un obiect in care sa grupam predictiile venite de la server pe zile
            const dayMap = {};

            //Iteram prin predictiile venite de la server (list)
            list.forEach((element)=>{
                //Extragem data predictiei pentru a putea face gruparea pe zile
                const {dt} = element;
                //Folosind utilitarul creat de noi, parsam ziua curenta
                const day = getDayOfWeek(dt);
                
                //Facem o verificare, daca deja avem ziua saptamanii in obiect - ii adaugam o noua predictie
                if (dayMap[day]){
                    dayMap[day].push(element);
                } else {
                    //Daca nu exista ziua respectiva atunci o adaugam in obiect impreuna cu predictia
                    dayMap[day] = [element];
                }
            })
            
            //Parcurgem cu for...in continutul obiectului dayMap - cheile din obiect sunt zilele saptamanii pentru care avem predictii
            for(key in dayMap){
                //Afisam ziua curenta pe ecran
                weatherForcastContainer.innerHTML += `<h3 class="text-primary">${key}</h3>`;
                //Pentru fiecare zi a saptamanii extragem predictiile asociate si iteram prin ele
                const days = dayMap[key];
                days.forEach((element) => {
                    //Extragem datele de interes:
                    const {dt, main, weather} = element;
                    //Incepem sa parsam datele cu ajutorul functiilor utilitare create deja de noi
                    const hour = GetHour(dt);
                    //Rotunjim valoarea temperaturilor
                    const temperature = Math.round(main.temp);
                    const realFeel = Math.round(main['feels_like']);
                    //Pentru a obtine descrierea trebuie sa avem grija ca weather este un array cu un singur element
                    const weatherDescription = weather[0].description;
                    //Parsam Iconita
                    const weatherIcon = getWeatherIcon(weather[0].icon);

                    //console.log(hour, temperature, realFeel, weatherDescription, weatherIcon);
                    //Afisam datele pe ecran
                    weatherForcastContainer.innerHTML += `
                        <div class="weather-forcast-box d-flex w-100 justify-content-between align-items-center border rounded p-3 mb-3">
                            <div>${hour}</div>
                            <div><img src="${weatherIcon}" alt="weather-icon"></div>
                            <div class="fs-3"><strong>${temperature}°C</strong></div>
                            <div class="real-feel">Real feel: <strong>${realFeel}°C</strong></div>    
                        </div>
                    `
                })
            }
        })
};