const inputCity = document.getElementById("input");
const submitCity = document.getElementById("submit");
const cardContainer = document.getElementById("weather-card");

async function get(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

submitCity.addEventListener("click", addToCard);

function addToCard(e) {
  console.log(inputCity.value);
  get(
    `https://api.openweathermap.org/data/2.5/weather?q=${inputCity.value}&appid=ba52b65545262294c2c52a29b0949709&units=metric&lang=tr`
  )
    .then((result) => {
      console.log(result);
      cardContainer.innerHTML += `
        <div class="col ">
         <div class="card shadow-lg p-3 mb-5 bg-body rounded text-secondary">
          <div class="card-body">
            <h5 class="card-title">${result.name}   <sup>${result.sys.country}</sup></h5>
            <p class="card-text">
              <img src="http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png" alt="" >
            </p>
            <p class="card-text " style="font-size:4rem">
              ${Math.round(result.main.temp)}
            </p>
            <p class="card-text fs-4">
            ${result.weather[0].description}
            </p>
          </div>
        </div>
       </div>
        `;
    })
    .catch((err) => {});
    inputCity.value = "";

  e.preventDefault();
}