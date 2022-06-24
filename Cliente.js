function ConsultarClima() {
  let Ciudad = document.getElementById("Ciudad").value;
  // Opciones de la petición (valores por defecto)
  const options = {
    method: "GET"
  };

  // Petición HTTP
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Ciudad}&appid=96ddeac7568d65fa1431f5838aa93523`, options)
  .then(response => response.text())
  .then(data => {
  //convertimos formato json cadena en objeto de javascript
  let InfoClima = JSON.parse(data);
  document.getElementById("Resultado").innerHTML = (InfoClima.main.temp-273.15).toFixed(0)+(" °C");
  document.getElementById("Resultado1").innerHTML = InfoClima.main.pressure+(" mmHG");
  document.getElementById("Resultado2").innerHTML = InfoClima.main.humidity+(" %");
  let iconoAnimado = document.getElementById("icono-animado");

  // Para iconos animados
  switch (InfoClima.weather[0].main) {
    case "Thunderstorm":
      iconoAnimado.src="./Animated/animated/thunder.svg"
      break;
    case "Drizzle":
      iconoAnimado.src="./Animated/animated/rainy-2.svg"
      break;
    case "Rain":
      iconoAnimado.src="./Animated/animated/rainy-7.svg"
      break;
    case "Snow":
      iconoAnimado.src="./Animated/animated/snowy-6.svg"
      break;                        
    case "Clear":
      iconoAnimado.src="./Animated/animated/day.svg"
      break;
    case "Atmosphere":
      iconoAnimado.src="./Animated/animated/weather.svg"
      break;  
    case "Clouds":
      iconoAnimado.src="./Animated/animated/cloudy-day-1.svg"
      break;  
    default:
      iconoAnimado.src="./Animated/animated/cloudy-day-1.svg"
      break;
    }

  /** Procesar los datos **/
  }).catch((err) => {document.write("<h2>" , "Info Error: ", err , "</h2>")});
  document.getElementById();
}