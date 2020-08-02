function updateDash(){

    /// route names for different data sets
    var state_url="/api/state_population";
    var county_url="/api/county_population";
    var covid_url="/nyt_covid_state";
    var covid_county_url="/nyt_covid_county";

    
    //Honey Comb
    Highcharts.chart('country-honeycomb', {
        chart: {
            type: 'tilemap',
            inverted: true,
            height: '80%'
        },
    
        accessibility: {
            description: 'The tile map represents the states of the USA and their total number\
             of positive Corona virus cases.The hexagonal tiles are positioned to geographically\
             echo the map of the USA.The chart is interactive, and the individual\
             state data points are displayed upon hovering.',
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
            text: 'U.S. states by total number of positive Corona virus cases'
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
                color: '#B123FF',
                name: '< 1M'
            }, {
                from: 1000000,
                to: 5000000,
                color: '#FF2371',
                name: '1M - 5M'
            }, {
                from: 5000000,
                to: 15000000,
                color: '#71FF23',
                name: '5M - 15M'
            }, {
                from: 15000000,
                color: '#23DFFF',
                name: '> 15M'
            }]
        },
    
        tooltip: {
            headerFormat: '',
            pointFormat: 'The number of positive Corona Virus cases in <b> {point.name}</b> is <b>{point.value}</b>'
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
                value: 3134228
            }, {
                'hc-a2': 'AK',
                name: 'Alaska',
                region: 'West',
                x: 0,
                y: 0,
                value: 108299
            }, {
                'hc-a2': 'AZ',
                name: 'Arizona',
                region: 'West',
                x: 5,
                y: 3,
                value: 5780908
            }, {
                'hc-a2': 'AR',
                name: 'Arkansas',
                region: 'South',
                x: 5,
                y: 6,
                value: 1539705
            }, {
                'hc-a2': 'CA',
                name: 'California',
                region: 'West',
                x: 5,
                y: 2,
                value: 19207190
            }, {
                'hc-a2': 'CO',
                name: 'Colorado',
                region: 'West',
                x: 4,
                y: 3,
                value: 2998384
            }, {
                'hc-a2': 'CT',
                name: 'Connecticut',
                region: 'Northeast',
                x: 3,
                y: 11,
                value: 4388525
            }, {
                'hc-a2': 'DE',
                name: 'Delaware',
                region: 'South',
                x: 4,
                y: 9,
                value: 1006764
            }, {
                'hc-a2': 'DC',
                name: 'District of Columbia',
                region: 'South',
                x: 4,
                y: 10,
                value: 914117
            }, {
                'hc-a2': 'FL',
                name: 'Florida',
                region: 'South',
                x: 8,
                y: 8,
                value: 14016659
            }, {
                'hc-a2': 'GA',
                name: 'Georgia',
                region: 'South',
                x: 7,
                y: 8,
                value: 6942391
            }, {
                'hc-a2': 'HI',
                name: 'Hawaii',
                region: 'West',
                x: 8,
                y: 0,
                value: 97440
            }, {
                'hc-a2': 'ID',
                name: 'Idaho',
                region: 'West',
                x: 3,
                y: 2,
                value: 631656
            }, {
                'hc-a2': 'IL',
                name: 'Illinois',
                region: 'Midwest',
                x: 3,
                y: 6,
                value: 12490874
            }, {
                'hc-a2': 'IN',
                name: 'Indiana',
                region: 'Midwest',
                x: 3,
                y: 7,
                value: 4078381
            }, {
                'hc-a2': 'IA',
                name: 'Iowa',
                region: 'Midwest',
                x: 3,
                y: 5,
                value: 2366798
            }, {
                'hc-a2': 'KS',
                name: 'Kansas',
                region: 'Midwest',
                x: 5,
                y: 5,
                value: 1290020
            }, {
                'hc-a2': 'KY',
                name: 'Kentucky',
                region: 'South',
                x: 4,
                y: 6,
                value: 1365731
            }, {
                'hc-a2': 'LA',
                name: 'Louisiana',
                region: 'South',
                x: 6,
                y: 5,
                value: 5732696
            }, {
                'hc-a2': 'ME',
                name: 'Maine',
                region: 'Northeast',
                x: 0,
                y: 11,
                value: 268805
            }, {
                'hc-a2': 'MD',
                name: 'Maryland',
                region: 'South',
                x: 4,
                y: 8,
                value: 5696893
            }, {
                'hc-a2': 'MA',
                name: 'Massachusetts',
                region: 'Northeast',
                x: 2,
                y: 10,
                value: 10140701
            }, {
                'hc-a2': 'MI',
                name: 'Michigan',
                region: 'Midwest',
                x: 2,
                y: 7,
                value: 6790230
            }, {
                'hc-a2': 'MN',
                name: 'Minnesota',
                region: 'Midwest',
                x: 2,
                y: 4,
                value: 2798608
            }, {
                'hc-a2': 'MS',
                name: 'Mississippi',
                region: 'South',
                x: 6,
                y: 6,
                value: 2294571
            }, {
                'hc-a2': 'MO',
                name: 'Missouri',
                region: 'Midwest',
                x: 4,
                y: 5,
                value: 2005918
            }, {
                'hc-a2': 'MT',
                name: 'Montana',
                region: 'West',
                x: 2,
                y: 2,
                value: 114170
            }, {
                'hc-a2': 'NE',
                name: 'Nebraska',
                region: 'Midwest',
                x: 4,
                y: 4,
                value: 1525892
            }, {
                'hc-a2': 'NV',
                name: 'Nevada',
                region: 'West',
                x: 4,
                y: 2,
                value: 1650121
            }, {
                'hc-a2': 'NH',
                name: 'New Hampshire',
                region: 'Northeast',
                x: 1,
                y: 11,
                value: 492211
            }, {
                'hc-a2': 'NJ',
                name: 'New Jersey',
                region: 'Northeast',
                x: 3,
                y: 10,
                value: 17115258
            }, {
                'hc-a2': 'NM',
                name: 'New Mexico',
                region: 'West',
                x: 6,
                y: 3,
                value: 1011270
            }, {
                'hc-a2': 'NY',
                name: 'New York',
                region: 'Northeast',
                x: 2,
                y: 9,
                value: 41571810
            }, {
                'hc-a2': 'NC',
                name: 'North Carolina',
                region: 'South',
                x: 5,
                y: 9,
                value: 4920440
            }, {
                'hc-a2': 'ND',
                name: 'North Dakota',
                region: 'Midwest',
                x: 2,
                y: 3,
                value: 309928
            }, {
                'hc-a2': 'OH',
                name: 'Ohio',
                region: 'Midwest',
                x: 3,
                y: 8,
                value: 4539737
            }, {
                'hc-a2': 'OK',
                name: 'Oklahoma',
                region: 'South',
                x: 6,
                y: 4,
                value: 1210800
            }, {
                'hc-a2': 'OR',
                name: 'Oregon',
                region: 'West',
                x: 4,
                y: 1,
                value: 750875
            }, {
                'hc-a2': 'PA',
                name: 'Pennsylvania',
                region: 'Northeast',
                x: 3,
                y: 9,
                value: 8450949
            }, {
                'hc-a2': 'RI',
                name: 'Rhode Island',
                region: 'Northeast',
                x: 2,
                y: 11,
                value: 1515607
            }, {
                'hc-a2': 'SC',
                name: 'South Carolina',
                region: 'South',
                x: 6,
                y: 8,
                value: 2915267
            }, {
                'hc-a2': 'SD',
                name: 'South Dakota',
                region: 'Midwest',
                x: 3,
                y: 4,
                value: 565146
            }, {
                'hc-a2': 'TN',
                name: 'Tennessee',
                region: 'South',
                x: 5,
                y: 7,
                value: 3794491
            }, {
                'hc-a2': 'TX',
                name: 'Texas',
                region: 'South',
                x: 7,
                y: 4,
                value: 14122466
            }, {
                'hc-a2': 'UT',
                name: 'Utah',
                region: 'West',
                x: 5,
                y: 4,
                value: 1722012
            }, {
                'hc-a2': 'VT',
                name: 'Vermont',
                region: 'Northeast',
                x: 1,
                y: 10,
                value: 125178
            }, {
                'hc-a2': 'VA',
                name: 'Virginia',
                region: 'South',
                x: 5,
                y: 8,
                value: 5041543
            }, {
                'hc-a2': 'WA',
                name: 'Washington',
                region: 'West',
                x: 2,
                y: 1,
                value: 3194672
            }, {
                'hc-a2': 'WV',
                name: 'West Virginia',
                region: 'South',
                x: 4,
                y: 7,
                value: 280451
            }, {
                'hc-a2': 'WI',
                name: 'Wisconsin',
                region: 'Midwest',
                x: 2,
                y: 5,
                value: 2573030
            }, {
                'hc-a2': 'WY',
                name: 'Wyoming',
                region: 'West',
                x: 3,
                y: 3,
                value: 129511
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
                const stateCasesA = a.state;
                const stateCasesB = b.state;
              
                let comparison = 0;
                if (stateCasesA > stateCasesB) {
                  comparison = 1;
                } else if (stateCasesA < stateCasesB) {
                  comparison = -1;
                }
                return comparison;
            }
            //Using this for honey comb
            var sort_state_asc=casesStateTotals.sort(compare)
            console.log("Total cases by State");
            console.log(sort_state_asc);
     

        })

        d3.json(covid_url).then((d2)=>{
            
            covid_data=d2
            //console.log(covid_data)
            //covid_data

            var userSelection=d3.select("#state-selector").node().value;
            console.log(userSelection)
            selectedCovid=covid_data.filter(c=>c.State==userSelection)
            
            console.log("Time series testing here")
            //console.log(selectedCovid)
            var timeseries_dates=selectedCovid.map(t=>t.date).reverse()
            console.log(timeseries_dates)
            var timeseries_cases=selectedCovid.map(t=>t.cases).reverse()
            //console.log(timeseries_cases)
            var timeseries_deaths=selectedCovid.map(t=>t.deaths).reverse()

            var newDate=[]
            for (var i = 0; i = timeseries_dates.length; i++){
                var d = new Date(timeseries_dates[i]);
                //console.log("d is here. look at me")
                //console.log(d)
                newDate.push(d);
            }

            
            console.log("Hello date look at me!")
            console.log(newDate)


            var trace1 = {
                type: "scatter",
                mode: "lines",
                name: 'COVID cases',
                x: timeseries_dates,
                y: timeseries_cases,
                line: {color: '#17BECF'}
            }

            var trace2 = {
                type: "scatter",
                mode: "lines",
                name: 'COVID deaths',
                x: timeseries_dates,
                y: timeseries_deaths,
                line: {color: '#7F7F7F'}
            }

            var data = [trace1,trace2];

            var layout = {
            title: 'Time Series of COVID Related Cases and deaths',
            xaxis:{
                autorange:true,
                range:['03-05-2020','07-28-2020'],
                rangeselector:{buttons:[
                    {
                        count:1,
                        lanel:'1m',
                        step:'month',
                        stepmode:'backward'
                    },
                    {
                        count:6,
                        labels:'6m',
                        step:'month',
                        stepmode:'backward'
                    },
                    {step:'all'}
                ]},
                rangeslider:{range: ['03-05-2020','07-28-2020']},
                type: 'date'
            },
            yaxis: {
                autorange: true,
                //range: [86.8700008333, 138.870004167],
                type: 'linear'
            }


            };

            Plotly.newPlot('time-series', data, layout);
              




            // Sum of Covid Cases for selected state
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