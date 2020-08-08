d3.select('form').on('change', function(d){
    var userSelection = d3.select("#state-selector").node().value;
    if(userSelection != 'us'){
    var stateNameCases = d3.select("#state-name-cases").text(`Counties of ${userSelection} with Highest Death Rate by Reported Cases`);
    var stateNameDeaths = d3.select("#state-name-deaths").text(`Counties of ${userSelection} with Highest Death Rate by Total Population`);
    var comparison = d3.select("#data-comp-state").text(`Comparison of ${userSelection} Data`);
    var reliability = d3.select("#reliability-state").text(`Reliability Scores for ${userSelection}`);
    var seriesNameCases = d3.select("#cases-series-state").text(`Timeseries of Cases Reported by NYT and Atlantic for ${userSelection}`);
    var seriesNameDeaths = d3.select("#death-series-state").text(`Timeseries of Deaths Reported by NYT and Atlantic for ${userSelection}`);
    }
})



