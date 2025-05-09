function search() {
    const searchInput = document.getElementById('searchInput').value.trim();
    console.log(searchInput);

    var url = `https://restcountries.com/v3.1/name/${searchInput}`;

    fetch(url)
    .then(res => res.json())
    .then(data => process(data));
}

function process(data) {
    const display = document.getElementById("displayArea");
    display.textContent = '';

    data.forEach(country => {
        var newDiv = document.createElement("div");
        newDiv.classList.add("innerStyle");

        newDiv.innerHTML = `
            <img src="${country.flags.svg}" alt="Flag of ${country.name.common}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
            <h3>${country.name.common}</h3>
            <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
            <p><strong>Currency:</strong> ${country.currencies ? Object.values(country.currencies).map(c => `${c.name} (${c.symbol})`).join(', ') : 'N/A'}</p>
            <p><strong>Region:</strong> ${country.region}</p>
            <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Languages:</strong> ${country.languages ? Object.values(country.languages).join(', ') : 'N/A'}</p>
            <p><strong>Timezone(s):</strong> ${country.timezones}</p>
            
        `;

        display.appendChild(newDiv);
    });
}




