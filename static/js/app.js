function updateDash(){

    /// route names for different data sets
    var state_url="/api/state_population";
    var county_url="/api/county_population";
    var covid_url="/nyt_covid_state";
    var covid_county_url="/nyt_covid_county";

    
    //Honey Comb
    Highcharts.chart('country-timeseries', {
        chart: {
            type: 'tilemap',
            inverted: true,
            height: '80%'
        },
    
        accessibility: {
            description: 'A tile map represents the states of the USA by population in 2016. The hexagonal tiles are positioned to geographically echo the map of the USA. A color-coded legend states the population levels as below 1 million (beige), 1 to 5 million (orange), 5 to 20 million (pink) and above 20 million (hot pink). The chart is interactive, and the individual state data points are displayed upon hovering. Three states have a population of above 20 million: California (39.3 million), Texas (27.9 million) and Florida (20.6 million). The northern US region from Massachusetts in the Northwest to Illinois in the Midwest contains the highest concentration of states with a population of 5 to 20 million people. The southern US region from South Carolina in the Southeast to New Mexico in the Southwest contains the highest concentration of states with a population of 1 to 5 million people. 6 states have a population of less than 1 million people; these include Alaska, Delaware, Wyoming, North Dakota, South Dakota and Vermont. The state with the lowest population is Wyoming in the Northwest with 584,153 people.',
            screenReaderSection: {
                beforeChartFormat:
                    '<h5>{chartTitle}</h5>' +
                    '<div>{chartSubtitle}</div>' +
                    '<div>{chartLongdesc}</div>' +
                    '<div>{viewTableButton}</div>'
            },
            point: {
                valueDescriptionFormat: '{index}. {xDescription}, {point.value}.'
            }
        },
    
        title: {
            text: 'U.S. states by population in 2016'
        },

    
        xAxis: {
            visible: false
        },
    
        yAxis: {
            visible: false
        },
    
        colorAxis: {
            dataClasses: [{
                from: 0,
                to: 1000000,
                color: '#F9EDB3',
                name: '< 1M'
            }, {
                from: 1000000,
                to: 5000000,
                color: '#FFC428',
                name: '1M - 5M'
            }, {
                from: 5000000,
                to: 20000000,
                color: '#FF7987',
                name: '5M - 20M'
            }, {
                from: 20000000,
                color: '#FF2371',
                name: '> 20M'
            }]
        },
    
        tooltip: {
            headerFormat: '',
            pointFormat: 'The population of <b> {point.name}</b> is <b>{point.value}</b>'
        },
    
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.hc-a2}',
                    color: '#000000',
                    style: {
                        textOutline: false
                    }
                }
            }
        },
    
        series: [{
            name: '',
            data: [{
                'hc-a2': 'AL',
                name: 'Alabama',
                region: 'South',
                x: 6,
                y: 7,
                value: 4849377
            }, {
                'hc-a2': 'AK',
                name: 'Alaska',
                region: 'West',
                x: 0,
                y: 0,
                value: 737732
            }, {
                'hc-a2': 'AZ',
                name: 'Arizona',
                region: 'West',
                x: 5,
                y: 3,
                value: 6745408
            }, {
                'hc-a2': 'AR',
                name: 'Arkansas',
                region: 'South',
                x: 5,
                y: 6,
                value: 2994079
            }, {
                'hc-a2': 'CA',
                name: 'California',
                region: 'West',
                x: 5,
                y: 2,
                value: 39250017
            }, {
                'hc-a2': 'CO',
                name: 'Colorado',
                region: 'West',
                x: 4,
                y: 3,
                value: 5540545
            }, {
                'hc-a2': 'CT',
                name: 'Connecticut',
                region: 'Northeast',
                x: 3,
                y: 11,
                value: 3596677
            }, {
                'hc-a2': 'DE',
                name: 'Delaware',
                region: 'South',
                x: 4,
                y: 9,
                value: 935614
            }, {
                'hc-a2': 'DC',
                name: 'District of Columbia',
                region: 'South',
                x: 4,
                y: 10,
                value: 7288000
            }, {
                'hc-a2': 'FL',
                name: 'Florida',
                region: 'South',
                x: 8,
                y: 8,
                value: 20612439
            }, {
                'hc-a2': 'GA',
                name: 'Georgia',
                region: 'South',
                x: 7,
                y: 8,
                value: 10310371
            }, {
                'hc-a2': 'HI',
                name: 'Hawaii',
                region: 'West',
                x: 8,
                y: 0,
                value: 1419561
            }, {
                'hc-a2': 'ID',
                name: 'Idaho',
                region: 'West',
                x: 3,
                y: 2,
                value: 1634464
            }, {
                'hc-a2': 'IL',
                name: 'Illinois',
                region: 'Midwest',
                x: 3,
                y: 6,
                value: 12801539
            }, {
                'hc-a2': 'IN',
                name: 'Indiana',
                region: 'Midwest',
                x: 3,
                y: 7,
                value: 6596855
            }, {
                'hc-a2': 'IA',
                name: 'Iowa',
                region: 'Midwest',
                x: 3,
                y: 5,
                value: 3107126
            }, {
                'hc-a2': 'KS',
                name: 'Kansas',
                region: 'Midwest',
                x: 5,
                y: 5,
                value: 2904021
            }, {
                'hc-a2': 'KY',
                name: 'Kentucky',
                region: 'South',
                x: 4,
                y: 6,
                value: 4413457
            }, {
                'hc-a2': 'LA',
                name: 'Louisiana',
                region: 'South',
                x: 6,
                y: 5,
                value: 4649676
            }, {
                'hc-a2': 'ME',
                name: 'Maine',
                region: 'Northeast',
                x: 0,
                y: 11,
                value: 1330089
            }, {
                'hc-a2': 'MD',
                name: 'Maryland',
                region: 'South',
                x: 4,
                y: 8,
                value: 6016447
            }, {
                'hc-a2': 'MA',
                name: 'Massachusetts',
                region: 'Northeast',
                x: 2,
                y: 10,
                value: 6811779
            }, {
                'hc-a2': 'MI',
                name: 'Michigan',
                region: 'Midwest',
                x: 2,
                y: 7,
                value: 9928301
            }, {
                'hc-a2': 'MN',
                name: 'Minnesota',
                region: 'Midwest',
                x: 2,
                y: 4,
                value: 5519952
            }, {
                'hc-a2': 'MS',
                name: 'Mississippi',
                region: 'South',
                x: 6,
                y: 6,
                value: 2984926
            }, {
                'hc-a2': 'MO',
                name: 'Missouri',
                region: 'Midwest',
                x: 4,
                y: 5,
                value: 6093000
            }, {
                'hc-a2': 'MT',
                name: 'Montana',
                region: 'West',
                x: 2,
                y: 2,
                value: 1023579
            }, {
                'hc-a2': 'NE',
                name: 'Nebraska',
                region: 'Midwest',
                x: 4,
                y: 4,
                value: 1881503
            }, {
                'hc-a2': 'NV',
                name: 'Nevada',
                region: 'West',
                x: 4,
                y: 2,
                value: 2839099
            }, {
                'hc-a2': 'NH',
                name: 'New Hampshire',
                region: 'Northeast',
                x: 1,
                y: 11,
                value: 1326813
            }, {
                'hc-a2': 'NJ',
                name: 'New Jersey',
                region: 'Northeast',
                x: 3,
                y: 10,
                value: 8944469
            }, {
                'hc-a2': 'NM',
                name: 'New Mexico',
                region: 'West',
                x: 6,
                y: 3,
                value: 2085572
            }, {
                'hc-a2': 'NY',
                name: 'New York',
                region: 'Northeast',
                x: 2,
                y: 9,
                value: 19745289
            }, {
                'hc-a2': 'NC',
                name: 'North Carolina',
                region: 'South',
                x: 5,
                y: 9,
                value: 10146788
            }, {
                'hc-a2': 'ND',
                name: 'North Dakota',
                region: 'Midwest',
                x: 2,
                y: 3,
                value: 739482
            }, {
                'hc-a2': 'OH',
                name: 'Ohio',
                region: 'Midwest',
                x: 3,
                y: 8,
                value: 11614373
            }, {
                'hc-a2': 'OK',
                name: 'Oklahoma',
                region: 'South',
                x: 6,
                y: 4,
                value: 3878051
            }, {
                'hc-a2': 'OR',
                name: 'Oregon',
                region: 'West',
                x: 4,
                y: 1,
                value: 3970239
            }, {
                'hc-a2': 'PA',
                name: 'Pennsylvania',
                region: 'Northeast',
                x: 3,
                y: 9,
                value: 12784227
            }, {
                'hc-a2': 'RI',
                name: 'Rhode Island',
                region: 'Northeast',
                x: 2,
                y: 11,
                value: 1055173
            }, {
                'hc-a2': 'SC',
                name: 'South Carolina',
                region: 'South',
                x: 6,
                y: 8,
                value: 4832482
            }, {
                'hc-a2': 'SD',
                name: 'South Dakota',
                region: 'Midwest',
                x: 3,
                y: 4,
                value: 853175
            }, {
                'hc-a2': 'TN',
                name: 'Tennessee',
                region: 'South',
                x: 5,
                y: 7,
                value: 6651194
            }, {
                'hc-a2': 'TX',
                name: 'Texas',
                region: 'South',
                x: 7,
                y: 4,
                value: 27862596
            }, {
                'hc-a2': 'UT',
                name: 'Utah',
                region: 'West',
                x: 5,
                y: 4,
                value: 2942902
            }, {
                'hc-a2': 'VT',
                name: 'Vermont',
                region: 'Northeast',
                x: 1,
                y: 10,
                value: 626011
            }, {
                'hc-a2': 'VA',
                name: 'Virginia',
                region: 'South',
                x: 5,
                y: 8,
                value: 8411808
            }, {
                'hc-a2': 'WA',
                name: 'Washington',
                region: 'West',
                x: 2,
                y: 1,
                value: 7288000
            }, {
                'hc-a2': 'WV',
                name: 'West Virginia',
                region: 'South',
                x: 4,
                y: 7,
                value: 1850326
            }, {
                'hc-a2': 'WI',
                name: 'Wisconsin',
                region: 'Midwest',
                x: 2,
                y: 5,
                value: 5778708
            }, {
                'hc-a2': 'WY',
                name: 'Wyoming',
                region: 'West',
                x: 3,
                y: 3,
                value: 584153
            }]
        }]
    });



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
            //console.log(State_Population)

            var userSelection=d3.select("#state-selector").node().value;
            console.log(userSelection)
            statePop=State_Population.filter(s=>s.State==userSelection)
            //console.log(statePop)

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


         d3.json(covid_county_url).then((data)=>{
            //console.log("-----COUNTY DATA---LOOK AT ME-----")
            covid_county_data=data
            //console.log(covid_county_data)
            var userSelection=d3.select("#state-selector").node().value;
            //console.log(userSelection)
            selectedCovid=covid_county_data.filter(c=>c.state==userSelection)
            //console.log(selectedCovid)

            /// Total Cases by County
            var casesCountyTotals = [];

            selectedCovid.reduce(function(res, value) {
            if (!res[value.County]) {
                res[value.County] = { County: value.County, cases: 0 };
                casesCountyTotals.push(res[value.County])
            }
            res[value.County].cases += value.cases;
            return res;
            }, {});
            console.log("Total cases by county");
            console.log(casesCountyTotals);

            // Sorting dictionary
            function compare(a, b) {
                const caseA = a.cases;
                const caseB = b.cases;
              
                let comparison = 0;
                if (caseA > caseB) {
                  comparison = 1;
                } else if (caseA < caseB) {
                  comparison = -1;
                }
                return comparison * -1;
            }
              
            var sort_cases_desc=casesCountyTotals.sort(compare)
            console.log("Sort by case") 
            console.log(sort_cases_desc);

            var top_ten_counties=sort_cases_desc.slice(0,11)
            console.log(top_ten_counties)


            var bar_labels=top_ten_counties.map(s=>s.County)
            var bar_values=top_ten_counties.map(s=>s.cases)

            console.log(bar_labels);
            console.log(bar_values);

             //  Create  trace.
             var data = [{
                type: 'bar',
                x: bar_values,
                y: bar_labels,
                orientation: 'h',
                transforms: [{
                    type: 'sort',
                    target: 'x',
                    order: 'ascending'
                  }]
              }];
            var layout = {
                title: `Top 10 counties by total number of cases`,
                xaxis: {title:"Total number of cases",size: 18},
                yaxis: {title:"counties",automargin: true,},
                autosize: false,
                width: 800,
                height: 500,
                margin: {
                    l: 250,
                    r: 50,
                    b: 100,
                    t: 100,
                    pad: 4
                }
            };
            var config = {responsive: true}           
            Plotly.newPlot('top-cases', data,layout,config);


            /// Total deaths by County
            var deathCountyTotals = [];

            selectedCovid.reduce(function(res, value) {
            if (!res[value.County]) {
                res[value.County] = { County: value.County, deaths: 0 };
                deathCountyTotals.push(res[value.County])
            }
            res[value.County].deaths += value.deaths;
            return res;
            }, {});
            console.log("Total deaths by county");
            console.log(deathCountyTotals);

            // Sorting dictionary
            function compare(a, b) {
                const deathA = a.deaths;
                const deathB = b.deaths;
              
                let comparison = 0;
                if (deathA > deathB) {
                  comparison = 1;
                } else if (deathA < deathB) {
                  comparison = -1;
                }
                return comparison * -1;
            }
              
            var sort_deaths_desc=deathCountyTotals.sort(compare)
            console.log("Sort by death") 
            console.log(sort_deaths_desc);

            var top_ten_counties_deaths=sort_deaths_desc.slice(0,11)
            console.log(top_ten_counties_deaths)


            var bar_labels=top_ten_counties_deaths.map(s=>s.County)
            var bar_values=top_ten_counties_deaths.map(s=>s.deaths)

            console.log(bar_labels);
            console.log(bar_values);

             //  Create  trace.
             var data = [{
                type: 'bar',
                x: bar_values,
                y: bar_labels,
                orientation: 'h',
                transforms: [{
                    type: 'sort',
                    target: 'x',
                    order: 'ascending'
                  }]
              }];
            var layout = {
                title: `Top 10 counties by total number of deaths`,
                xaxis: {title:"Total number of deaths",size: 18},
                yaxis: {title:"counties",automargin: true,},
                autosize: false,
                width: 800,
                height: 500,
                margin: {
                    l: 250,
                    r: 50,
                    b: 100,
                    t: 100,
                    pad: 4
                }
            };
            var config = {responsive: true}
            Plotly.newPlot('top-deaths', data,layout,config);

            /// Total cases by State
            var casesStateTotals = [];

            covid_county_data.reduce(function(res, value) {
            if (!res[value.state]) {
                res[value.state] = { state: value.state, cases: 0 };
                casesStateTotals.push(res[value.state])
            }
            res[value.state].cases += value.cases;
            return res;
            }, {});

            // Sorting dictionary
            function compare(a, b) {
                const stateCasesA = a.cases;
                const stateCasesB = b.cases;
              
                let comparison = 0;
                if (stateCasesA > stateCasesB) {
                  comparison = 1;
                } else if (stateCasesA < stateCasesB) {
                  comparison = -1;
                }
                return comparison;
            }
            //Using this for honey comb
            var sort_cases_asc=casesStateTotals.sort(compare)
            console.log("Total cases by State");
            console.log(sort_cases_asc);


              

        })

        d3.json(covid_url).then((d2)=>{
            
            covid_data=d2
            console.log(covid_data)

            var userSelection=d3.select("#state-selector").node().value;
            console.log(userSelection)
            selectedCovid=covid_data.filter(c=>c.State==userSelection)
            //console.log(selectedCovid)
            //selectedCovid

            // Sum of Covid Cases for slected state
            var stateTotals = selectedCovid.reduce(function(previousValue, currentValue) {
                return {
                  cases: previousValue.cases + currentValue.cases,
                  deaths: previousValue.deaths + currentValue.deaths
                }
            });
            console.log(stateTotals.cases);
            console.log("Wait, More data is loading")
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

            var stateTotals = selectedCovid.reduce(function(previousValue, currentValue) {
                return {
                  cases: previousValue.cases + currentValue.cases,
                  deaths: previousValue.deaths + currentValue.deaths
                }
            });



                        
        })




    })
}

updateDash()