const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '245ce5d6ddmsh2634790e81cfe75p14899bjsnb3b545c5845e',
		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
	}
};

const getWeather = (city) => {
	cityName.innerHTML = city;

	fetch('https://weather-api99.p.rapidapi.com/weather?city=' + city, options)
		.then(response => response.json())
		.then((response) => {
			console.log(response);

			temp.innerHTML = (response.main.temp - 273.15).toFixed(2);  // Convert from Kelvin to Celsius
			temp2.innerHTML = (response.main.temp - 273.15).toFixed(2);
			feels_like.innerHTML = (response.main.feels_like - 273.15).toFixed(2);
			min_temp.innerHTML = (response.main.temp_min - 273.15).toFixed(2);
			max_temp.innerHTML = (response.main.temp_max - 273.15).toFixed(2);

			// Access and display the humidity
			humidity.innerHTML = response.main.humidity;
			humidity2.innerHTML = response.main.humidity;

			// Access and display wind information
			wind_speed.innerHTML = response.wind.speed;
			wind_speed2.innerHTML = response.wind.speed;
			wind_degrees.innerHTML = response.wind.deg;

			// Access and display sunrise and sunset times
			sunrise.innerHTML = new Date(response.sys.sunrise * 1000).toLocaleTimeString();
			sunset.innerHTML = new Date(response.sys.sunset * 1000).toLocaleTimeString();
		})
		.catch(err => console.error('Error:', err));
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	getWeather(city.value);
});

getWeather("Ahmedabad");


// just remmbers...............Not importend no.49-88

// const options = {
// 	method: 'GET',
// 	headers: {
		// //one api
// 		// 'X-RapidAPI-Key': 'b45e96323fmshf5e4bc50d3b8a90p1e091djsnfb21cde4eb87',
// 		// 'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'		
		// // second api free
// 		'X-RapidAPI-Key': '245ce5d6ddmsh2634790e81cfe75p14899bjsnb3b545c5845e',
// 		'X-RapidAPI-Host': 'weather-api99.p.rapidapi.com'
// 	}
// };
// const getWeather = (city) => {
// 	cityName.innerHTML = city
// 	// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
// 	   fetch('https://weather-api99.p.rapidapi.com/weather?city=' + city, options)

// 		.then(response => response.json())
// 		.then((response) => {
// 			console.log(response)
// 			temp.innerHTML = response.temp
// 			temp2.innerHTML = response.temp
// 			feels_like.innerHTML = response.feels_like
// 			humidity.innerHTML = response.humidity
// 			humidity2.innerHTML = response.humidity
// 			min_temp.innerHTML = response.temp_min
// 			max_temp.innerHTML = response.temp_max
// 			wind_speed.innerHTML = response.wind_speed
// 			wind_speed2.innerHTML = response.wind_speed
// 			wind_degrees.innerHTML = response.wind_degrees
// 			sunrise.innerHTML = response.sunrise
// 			sunset.innerHTML = response.sunset
// 		})
// 		.catch(err => console.error(err));
// }
// submit.addEventListener("click", (e) => {
// 	e.preventDefault()
// 	getWeather(city.value)

// })
// getWeather("Ahmedabad")