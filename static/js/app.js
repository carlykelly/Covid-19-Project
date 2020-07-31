function updateDash(){

    /// route names for different data sets
    var state_url="/api/state_population";
    var county_url="/api/county_population";
    var covid_url="/nyt_covid_state";

    d3.json(state_url).then((data)=>{
        var State_Population = data
        console.log(State_Population)

        d3.select("select").on("change",function(d){

            var  userSelection=d3.select("#state-selector").node().value;
            console.log(userSelection)

            //saving keys to variables
            var StateName = State_Population[0].State
            //console.log(StateName)
            var StatePopulation = State_Population[0].Population
            var StateLatitude = State_Population[0].Latitude
            var StateLongitude = State_Population[0].Longitude

            //State Bio Div
            d3.select("#state-name").text(`State: ${StateName}`).style("color","blue")
            d3.select("#population").text(`Population: ${StatePopulation}`).style("color","blue")

        })


    })
}

updateDash()