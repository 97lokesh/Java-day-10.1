//Solving problems using array functions on rest countries data (https://restcountries.com/v3.1/all).

//Get all the countries from Asia continent /region using Filter method


fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Filter the data by the region property
    let asianCountries = data
      .filter((country) => country.region === "Asia")
      .map((country) => country.name.common);
    // Display the result
    console.log(asianCountries);
  });


  //Get all the countries with a population of less than 2 lakhs using Filter method


  fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Now you have the countries data in the 'data' variable
        const countriesData = data;

        // Filter countries with population less than 2 lakhs
        const countriesWithLowPopulation = countriesData.filter(country => country.population < 200000);

        // Extract country names
        const countryNames = countriesWithLowPopulation.map(country => country.name);

        console.log("Countries with low population:");
        console.log(countryNames);
    })

    //Print the following details name, capital, flag, using forEach method


    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Now you have the countries data in the 'data' variable
        const countriesData = data;

        // Print details for each country
        countriesData.forEach(country => {
            console.log(`Country: ${country.name.common}`);
            console.log(`Capital: ${country.capital}`);
            console.log(`Flag: ${country.flags.svg}`);
            console.log("--------------------");
        });
    })

   // Print the total population of countries using reduce method

    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => {
        // Now you have the countries data in the 'data' variable
        const countriesData = data;

        // Calculate the total population using reduce
        const totalPopulation = countriesData.reduce((acc, country) => acc + country.population, 0);

        console.log("Total population of all countries:", totalPopulation);
    })

   // Print the country that uses US dollars as currency.


    fetch("https://restcountries.com/v3.1/all")
  .then((response) => response.json())
  .then((data) => {
    // Filter countries that have USD as one of their currencies
    let usdCountries = data.filter((country) =>
      country.currencies && country.currencies.USD
    );
    // Display the result
    if (usdCountries.length > 0) {
      console.log("Countries that use USD:");
      usdCountries.forEach((country) => console.log(country.name.common));
    } else {
      console.log("No country found that uses USD.");
    }
  });
  