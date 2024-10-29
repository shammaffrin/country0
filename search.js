const search=async()=>{
    console.log(countryname.value);
    const response = await fetch(`https://restcountries.com/v3.1/name/${countryname.value}?fullText=true`)
    
    response.json().then((data)=>{
        console.log(data[0]);
    
    
    
    //common
    let common =data[0].name.common
    console.log(common);

    //official
    let official = data[0].name.official
    console.log(official);

    //currencies
    for(var curr in data[0].currencies){
        var currencyname = data[0].currencies[curr].name
        var symbol = data[0].currencies[curr].symbol
    }
    console.log(currencyname , symbol);
    

    //capital
    let capital = data[0].capital
    console.log(capital);

    //languages
    let nationalang =[]
    for(var lang in data[0].languages){
        nationalang.push(data[0].languages[lang])
    }
    console.log(nationalang);
    


    //borders
    let borders = data[0].borders
    console.log(borders);

    //area
    let area = data[0].area
    console.log(area);

    //map
    let map = data[0].maps.googleMaps
    console.log(map);

    //population
    let population = data[0].population
    console.log(population);

    //timesone
    let timezone = data[0].timezones
    console.log(timezone);

    //currencies

    //continents
    let continents = data[0].continents
    console.log(continents);
     
    //flags
    let flags = data[0].flags.png
    console.log(flags);


    result.innerHTML=`<div class="card mb-2 p-3" style="max-width: 100%">
              <div class="row g-0">
                <div class="col-md-4">
                  <img 
                  src=${flags} 
                  class="img-fluid rounded-start" alt="no image" />
                  <h5 class="card-title text-center mt-3">${official}</h5>
                  <ul class="list-group list-group-flush border">   
                    <li class="list-group-item">Capital : ${capital}</li>
                  </ul>
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <ul class="list-group list-group-flush border">
                    <li class="list-group-item">Common : ${common}</li>
                      <li class="list-group-item">Continent : ${continents}</li>
                      <li class="list-group-item">Population : ${population}</li>
                      <li class="list-group-item">Currency :${symbol} ${currencyname}</li>
                      <li class="list-group-item">Area : ${area}</li>
                      <li class="list-group-item">TimeZone : ${timezone}</li>
                      <li class="list-group-item">Borders : ${borders}</li>
                      <li class="list-group-item">National Language :${nationalang}}</li>
                      <li class="list-group-item">google Map : ${map}</li>
                     
                      
                      
                    </ul>
                    
                  </div>
                </div>
              </div>
            </div>`
})
}
