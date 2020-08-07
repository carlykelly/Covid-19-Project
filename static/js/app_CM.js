d3.select('form').on('change', function(d){
    var userSelection = d3.select("#state-selector").node().value;
    if(userSelection != 'us'){
    var stateNameCases = d3.select("#state-name-cases").text(`Counties of ${userSelection} with Highest Death Rate by Reported Cases`);
    var stateNameDeaths = d3.select("#state-name-deaths").text(`Counties of ${userSelection} with Highest Death Rate by Total Population`);
    }
})



