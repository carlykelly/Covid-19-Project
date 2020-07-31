function updateDash(){

    /// route names for different data sets
    var state_url="/api/state_population";
    var county_url="/api/county_population";
    var covid_url="/nyt_covid_state";

    d3.json(state_url).then((data)=>{
        var State_Population = data
        console.log(State_Population)


        d3.select('form').on('change',function(d){
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


    })

    d3.json(county_url).then((data)=>{
        console.log(data)

    })


    d3.json(county_url).then((data)=>{
        console.log(data)

        mapboxgl.accessToken =mapbox_pk;

        var map = new mapboxgl.Map({
        container:'state-timeseries', // container element id
        style: 'mapbox://styles/mapbox/light-v10',
        center: [-74.0059, 40.7128], // initial map center in [lon, lat]
        zoom: 12
        });








        // Gauge
            //var rate_of_spread=NumTests/NumCases
        //State Bio Div
        //d3.select("#state-name").text(`State: ${StateName}`).style("color","blue")
        //d3.select("#population").text(`Population: ${StatePopulation}`).style("color","blue")

    })
}

updateDash()