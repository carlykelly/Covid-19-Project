d3.select('form').on('change', function(d){
    var userSelection = d3.select("#state-selector").node().value;
    var stateNameCases = d3.select("#state-name-cases").text(`${userSelection} Reported Cases: Top Ten Counties`);
    var stateNameDeaths = d3.select("#state-name-deaths").text(`${userSelection} Reported Deaths: Top Ten Counties`);
})



