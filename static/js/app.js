function updateDash(){

    /// route names for different data sets
    var state_url="/api/state_population";
    var county_url="/api/county_population";
    var covid_url="/nyt_covid_state";

    mapboxgl.accessToken =mapbox_pk;

        var map = new mapboxgl.Map({
            container:'state-timeseries', // container element id
            style: 'mapbox://styles/mapbox/light-v10',
            center: [-74.0059, 40.7128], // initial map center in [lon, lat]
            zoom: 12
        });


    d3.select('form').on('change',function(d){

        d3.json(state_url).then((data)=>{
            var State_Population = data
            console.log(State_Population)

            var userSelection=d3.select("#state-selector").node().value;
            console.log(userSelection)
            statePop=State_Population.filter(s=>s.State==userSelection)
            console.log(statePop)

            //saving keys to variables
            var StateName = statePop[0].State
            //console.log(StateName)
            var StatePopulation = statePop[0].Population
            var StateLatitude = statePop[0].Latitude
            var StateLongitude = statePop[0].Longitude

            //State Bio Div
            d3.select("#state-name").text(`State: ${StateName}`).style("color","blue")
            d3.select("#population").text(`Population: ${StatePopulation}`).style("color","blue")

        })


        // d3.json(county_url).then((data)=>{
                //console.log(data)

        //})

        d3.json("/nyt_covid_state").then((d2)=>{
            
            covid_data=d2
            console.log(covid_data)

            var userSelection=d3.select("#state-selector").node().value;
            console.log(userSelection)
            selectedCovid=covid_data.filter(c=>c.State==userSelection)
            console.log(selectedCovid)
            selectedCovid

            // Sum of Covid Cases for slected state
            var stateTotals = selectedCovid.reduce(function(previousValue, currentValue) {
                return {
                  cases: previousValue.cases + currentValue.cases,
                  deaths: previousValue.deaths + currentValue.deaths
                }
            });
            console.log(stateTotals.cases);
            d3.select("#covid-pos").text(`Positive Tests: ${stateTotals.cases}`).style("color","blue")
            d3.select("#covid-deaths").text(`Covid Deaths: ${stateTotals.deaths}`).style("color","blue")

            

            mapboxgl.accessToken =mapbox_pk;
            var map = new mapboxgl.Map({
                container:'state-timeseries', // container element id
                style: 'mapbox://styles/mapbox/light-v10',
                center: [-74.0059, 40.7128], // initial map center in [lon, lat]
                zoom: 12
            });

            // Rate of death of those tested
            RateOfDeath=stateTotals.deaths/stateTotals.cases
            var gaugedata = [
                {
                  type: "indicator",
                  mode: "gauge+number",
                  value: RateOfDeath*100,
                  title: { text: "Rate of Death of Tested Population (%)", font: { size: 16 } },
                  gauge: {
                    axis: { range: [null, 100], tickwidth: 10, tickcolor: "darkblue" },
                    bar: { color: "red" },
                    bgcolor: "white",
                    borderwidth: 2,
                    bordercolor: "gray",
                  }
                }
              ];
              
              var layout = {
                width: 500,
                height: 400,
                margin: { t: 25, r: 25, l: 25, b: 25 },
                paper_bgcolor: "lavender",
                font: { color: "darkblue", family: "Arial" }
              };
              
              Plotly.newPlot('gauge', gaugedata, layout);
        })

    })
}

updateDash()