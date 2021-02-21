
const api = '064fca4af3ffd04bb8d6557d2cdca951',
    unit = 'metric';

let lat = '-22.9028',
    long = '-43.2075',
    url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${api}&units=${unit}`;

console.log(url);

document.querySelector('#cities').addEventListener('change', function(){
    let cityValue = document.querySelector('#cities').value;
    if(cityValue == 'NYC') {
        lat = '40.714272';
        long = '-74.005966';
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${api}&units=${unit}`;
        createFetch(url)
    } if(cityValue == 'Beijing') {
        lat = '39.907501';
        long = '116.397232';
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${api}&units=${unit}`;
        createFetch(url)
    } if(cityValue == 'Taipei') {
        lat = '24.94702';
        long = '121.581749';
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${api}&units=${unit}`;
        createFetch(url)
    }  else {
        lat = '-22.9028';
        long = '-43.2075';
        url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,minutely,alerts&appid=${api}&units=${unit}`;
        createFetch(url)
    }
});


function updateUI(data) {
    console.log(data);

    document.querySelector('.current .degree').innerHTML = `${Math.round(data.current.temp)}˚C`;
    document.querySelector('.current ').innerHTML = `${data.current.weather[0].main}`;
    document.querySelector('.current .icon').innerHTML = `<img src="http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png" />`;
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.querySelector('.current .day').innerHTML = 'Current';

    let output = '';
    for(let i = 0; i < data.daily.length; i++) {
        console.log(Math.round(data.daily[i].temp.day));
        console.log(`i: ${i}`);
        console.log(document.querySelectorAll('.forecast .degree')[i]);
        document.querySelectorAll('.forecast .degree')[i].innerHTML = `${Math.round(data.daily[i].temp.day)}˚C`;
        document.querySelectorAll('.forecast .day')[i].innerHTML = daysOfWeek[new Date(data.daily[i].dt * 1000).getDay()];
        document.querySelectorAll('.forecast ')[i].innerHTML = data.daily[i].weather[0].main;
    }

}


function createFetch(url) {
    fetch(url)

    .then(function(response) {
        console.log(response);
        return response.json();
    })
    .then(function(data) {
    
        return updateUI(data);
    
    })
    
    .catch(function(error) {
    
        console.log(error);
    
    });
}

createFetch(url);
