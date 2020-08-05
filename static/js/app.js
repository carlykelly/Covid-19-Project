function updateDash(){

    /// route names for different data sets
    var state_pop="/api/state_population";
    var county_pop="/api/county_population";
    
   
    var nyt_state="/nyt_covid_state_latest";
    var nyt_covid_county="/nyt_covid_county_latest";

    var time_nyt ="/timeseries_nyt";

    var honey_atlantic="/atlantic_covid_latest";
    var time_atlantic="/timeseries_atlantic";



//////////////////////////// H o n e y  C o m b s ////////////////////////////////////////////////
    //                       /// New York Times Honey Comb ///                     //
    d3.json(nyt_state).then((data)=>{
        //console.log("NYT Honey Comb")
        //console.log(data)

        //Pull out only state and positive test keys for easier reading in console
        var cases_by_state=data.map(function(d){
           // console.log( `State: ${d.State}, Positive cases: ${d.cases}`);
        }) 

    })
   
    Highcharts.chart('nyt-country-honeycomb', {
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
                to: 10000,
                color: '#B123FF',
                name: '< 10K'
            }, {
                from: 10000,
                to: 50000,
                color: '#FF2371',
                name: '10K - 50K'
            }, {
                from: 50000,
                to: 100000,
                color: '#71FF23',
                name: '50K - 100K'
            }, {
                from: 100000,
                color: '#23DFFF',
                name: '> 100K'
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
                value: 85762
            }, {
                'hc-a2': 'AK',
                name: 'Alaska',
                region: 'West',
                x: 0,
                y: 0,
                value: 3557
            }, {
                'hc-a2': 'AZ',
                name: 'Arizona',
                region: 'West',
                x: 5,
                y: 3,
                value: 170905
            }, {
                'hc-a2': 'AR',
                name: 'Arkansas',
                region: 'South',
                x: 5,
                y: 6,
                value: 41759
            }, {
                'hc-a2': 'CA',
                name: 'California',
                region: 'West',
                x: 5,
                y: 2,
                value: 494269
            }, {
                'hc-a2': 'CO',
                name: 'Colorado',
                region: 'West',
                x: 4,
                y: 3,
                value: 46338
            }, {
                'hc-a2': 'CT',
                name: 'Connecticut',
                region: 'Northeast',
                x: 3,
                y: 11,
                value: 49670
            }, {
                'hc-a2': 'DE',
                name: 'Delaware',
                region: 'South',
                x: 4,
                y: 9,
                value: 14689
            }, {
                'hc-a2': 'DC',
                name: 'District of Columbia',
                region: 'South',
                x: 4,
                y: 10,
                value: 12057
            }, {
                'hc-a2': 'FL',
                name: 'Florida',
                region: 'South',
                x: 8,
                y: 8,
                value: 461371
            }, {
                'hc-a2': 'GA',
                name: 'Georgia',
                region: 'South',
                x: 7,
                y: 8,
                value: 167545
            }, {
                'hc-a2': 'HI',
                name: 'Hawaii',
                region: 'West',
                x: 8,
                y: 0,
                value: 1966
            }, {
                'hc-a2': 'ID',
                name: 'Idaho',
                region: 'West',
                x: 3,
                y: 2,
                value:  20378
            }, {
                'hc-a2': 'IL',
                name: 'Illinois',
                region: 'Midwest',
                x: 3,
                y: 6,
                value: 178832
            }, {
                'hc-a2': 'IN',
                name: 'Indiana',
                region: 'Midwest',
                x: 3,
                y: 7,
                value: 66883
            }, {
                'hc-a2': 'IA',
                name: 'Iowa',
                region: 'Midwest',
                x: 3,
                y: 5,
                value: 44285
            }, {
                'hc-a2': 'KS',
                name: 'Kansas',
                region: 'Midwest',
                x: 5,
                y: 5,
                value: 27244
            }, {
                'hc-a2': 'KY',
                name: 'Kentucky',
                region: 'South',
                x: 4,
                y: 6,
                value: 30132
            }, {
                'hc-a2': 'LA',
                name: 'Louisiana',
                region: 'South',
                x: 6,
                y: 5,
                value: 114595
            }, {
                'hc-a2': 'ME',
                name: 'Maine',
                region: 'Northeast',
                x: 0,
                y: 11,
                value: 3888
            }, {
                'hc-a2': 'MD',
                name: 'Maryland',
                region: 'South',
                x: 4,
                y: 8,
                value: 87740
            }, {
                'hc-a2': 'MA',
                name: 'Massachusetts',
                region: 'Northeast',
                x: 2,
                y: 10,
                value: 117098
            }, {
                'hc-a2': 'MI',
                name: 'Michigan',
                region: 'Midwest',
                x: 2,
                y: 7,
                value: 89926
            }, {
                'hc-a2': 'MN',
                name: 'Minnesota',
                region: 'Midwest',
                x: 2,
                y: 4,
                value: 53732
            }, {
                'hc-a2': 'MS',
                name: 'Mississippi',
                region: 'South',
                x: 6,
                y: 6,
                value: 57579
            }, {
                'hc-a2': 'MO',
                name: 'Missouri',
                region: 'Midwest',
                x: 4,
                y: 5,
                value: 49671
            }, {
                'hc-a2': 'MT',
                name: 'Montana',
                region: 'West',
                x: 2,
                y: 2,
                value: 3829
            }, {
                'hc-a2': 'NE',
                name: 'Nebraska',
                region: 'Midwest',
                x: 4,
                y: 4,
                value: 25766
            }, {
                'hc-a2': 'NV',
                name: 'Nevada',
                region: 'West',
                x: 4,
                y: 2,
                value: 47034
            }, {
                'hc-a2': 'NH',
                name: 'New Hampshire',
                region: 'Northeast',
                x: 1,
                y: 11,
                value: 6544
            }, {
                'hc-a2': 'NJ',
                name: 'New Jersey',
                region: 'Northeast',
                x: 3,
                y: 10,
                value: 182845
            }, {
                'hc-a2': 'NM',
                name: 'New Mexico',
                region: 'West',
                x: 6,
                y: 3,
                value: 20388
            }, {
                'hc-a2': 'NY',
                name: 'New York',
                region: 'Northeast',
                x: 2,
                y: 9,
                value: 419081
            }, {
                'hc-a2': 'NC',
                name: 'North Carolina',
                region: 'South',
                x: 5,
                y: 9,
                value: 120463
            }, {
                'hc-a2': 'ND',
                name: 'North Dakota',
                region: 'Midwest',
                x: 2,
                y: 3,
                value: 6305
            }, {
                'hc-a2': 'OH',
                name: 'Ohio',
                region: 'Midwest',
                x: 3,
                y: 8,
                value: 89626
            }, {
                'hc-a2': 'OK',
                name: 'Oklahoma',
                region: 'South',
                x: 6,
                y: 4,
                value: 35710
            }, {
                'hc-a2': 'OR',
                name: 'Oregon',
                region: 'West',
                x: 4,
                y: 1,
                value: 18166
            }, {
                'hc-a2': 'PA',
                name: 'Pennsylvania',
                region: 'Northeast',
                x: 3,
                y: 9,
                value: 115853
            }, {
                'hc-a2': 'RI',
                name: 'Rhode Island',
                region: 'Northeast',
                x: 2,
                y: 11,
                value: 18950
            }, {
                'hc-a2': 'SC',
                name: 'South Carolina',
                region: 'South',
                x: 6,
                y: 8,
                value: 87572
            }, {
                'hc-a2': 'SD',
                name: 'South Dakota',
                region: 'Midwest',
                x: 3,
                y: 4,
                value: 8685
            }, {
                'hc-a2': 'TN',
                name: 'Tennessee',
                region: 'South',
                x: 5,
                y: 7,
                value: 100166
            }, {
                'hc-a2': 'TX',
                name: 'Texas',
                region: 'South',
                x: 7,
                y: 4,
                value:  432029
            }, {
                'hc-a2': 'UT',
                name: 'Utah',
                region: 'West',
                x: 5,
                y: 4,
                value: 39714
            }, {
                'hc-a2': 'VT',
                name: 'Vermont',
                region: 'Northeast',
                x: 1,
                y: 10,
                value: 1407
            }, {
                'hc-a2': 'VA',
                name: 'Virginia',
                region: 'South',
                x: 5,
                y: 8,
                value: 88904
            }, {
                'hc-a2': 'WA',
                name: 'Washington',
                region: 'West',
                x: 2,
                y: 1,
                value: 58100
            }, {
                'hc-a2': 'WV',
                name: 'West Virginia',
                region: 'South',
                x: 4,
                y: 7,
                value: 6422
            }, {
                'hc-a2': 'WI',
                name: 'Wisconsin',
                region: 'Midwest',
                x: 2,
                y: 5,
                value: 56111
            }, {
                'hc-a2': 'WY',
                name: 'Wyoming',
                region: 'West',
                x: 3,
                y: 3,
                value: 2686
            }]
        }]
    });

    //                      /// Atlantic Honey Comb  ///                          //
    d3.json(honey_atlantic).then((data)=>{
        //console.log("Atlantic Honey Comb")
        //console.log(data)
        //Pull out only state and positive test keys for easier reading in console
        // var cases_by_state=data.map(function(d){
        //     console.log( `State ${d.State}, Positive cases ${d.PositiveTests}`);
        // })
    })

    Highcharts.chart('atl-country-honeycomb', {
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
            text: 'U.S. states by total number of positive Corona virus cases (Atlantic)'
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
                to: 10000,
                color: '#B123FF',
                name: '< 10K'
            }, {
                from: 10000,
                to: 50000,
                color: '#FF2371',
                name: '10K - 50K'
            }, {
                from: 50000,
                to: 100000,
                color: '#71FF23',
                name: '50K - 100K'
            }, {
                from: 100000,
                color: '#23DFFF',
                name: '> 100K'
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
                value: 87723
            }, {
                'hc-a2': 'AK',
                name: 'Alaska',
                region: 'West',
                x: 0,
                y: 0,
                value: 3677
            }, {
                'hc-a2': 'AZ',
                name: 'Arizona',
                region: 'West',
                x: 5,
                y: 3,
                value: 174010
            }, {
                'hc-a2': 'AR',
                name: 'Arkansas',
                region: 'South',
                x: 5,
                y: 6,
                value: 42511
            }, {
                'hc-a2': 'CA',
                name: 'California',
                region: 'West',
                x: 5,
                y: 2,
                value: 493588
            }, {
                'hc-a2': 'CO',
                name: 'Colorado',
                region: 'West',
                x: 4,
                y: 3,
                value: 46204
            }, {
                'hc-a2': 'CT',
                name: 'Connecticut',
                region: 'Northeast',
                x: 3,
                y: 11,
                value: 49810 
            }, {
                'hc-a2': 'DE',
                name: 'Delaware',
                region: 'South',
                x: 4,
                y: 9,
                value: 14788
            }, {
                'hc-a2': 'DC',
                name: 'District of Columbia',
                region: 'South',
                x: 4,
                y: 10,
                value: 12126
            }, {
                'hc-a2': 'FL',
                name: 'Florida',
                region: 'South',
                x: 8,
                y: 8,
                value: 470386
            }, {
                'hc-a2': 'GA',
                name: 'Georgia',
                region: 'South',
                x: 7,
                y: 8,
                value: 186352
            }, {
                'hc-a2': 'HI',
                name: 'Hawaii',
                region: 'West',
                x: 8,
                y: 0,
                value: 1989
            }, {
                'hc-a2': 'ID',
                name: 'Idaho',
                region: 'West',
                x: 3,
                y: 2,
                value: 20246
            }, {
                'hc-a2': 'IL',
                name: 'Illinois',
                region: 'Midwest',
                x: 3,
                y: 6,
                value: 180118
            }, {
                'hc-a2': 'IN',
                name: 'Indiana',
                region: 'Midwest',
                x: 3,
                y: 7,
                value: 66154
            }, {
                'hc-a2': 'IA',
                name: 'Iowa',
                region: 'Midwest',
                x: 3,
                y: 5,
                value:  44582
            }, {
                'hc-a2': 'KS',
                name: 'Kansas',
                region: 'Midwest',
                x: 5,
                y: 5,
                value: 27812
            }, {
                'hc-a2': 'KY',
                name: 'Kentucky',
                region: 'South',
                x: 4,
                y: 6,
                value: 30151
            }, {
                'hc-a2': 'LA',
                name: 'Louisiana',
                region: 'South',
                x: 6,
                y: 5,
                value: 116280
            }, {
                'hc-a2': 'ME',
                name: 'Maine',
                region: 'Northeast',
                x: 0,
                y: 11,
                value: 3912
            }, {
                'hc-a2': 'MD',
                name: 'Maryland',
                region: 'South',
                x: 4,
                y: 8,
                value:88346 
            }, {
                'hc-a2': 'MA',
                name: 'Massachusetts',
                region: 'Northeast',
                x: 2,
                y: 10,
                value: 117612
            }, {
                'hc-a2': 'MI',
                name: 'Michigan',
                region: 'Midwest',
                x: 2,
                y: 7,
                value: 90574
            }, {
                'hc-a2': 'MN',
                name: 'Minnesota',
                region: 'Midwest',
                x: 2,
                y: 4,
                value:54463
            }, {
                'hc-a2': 'MS',
                name: 'Mississippi',
                region: 'South',
                x: 6,
                y: 6,
                value: 58747
            }, {
                'hc-a2': 'MO',
                name: 'Missouri',
                region: 'Midwest',
                x: 4,
                y: 5,
                value: 50323
            }, {
                'hc-a2': 'MT',
                name: 'Montana',
                region: 'West',
                x: 2,
                y: 2,
                value: 3965
            }, {
                'hc-a2': 'NE',
                name: 'Nebraska',
                region: 'Midwest',
                x: 4,
                y: 4,
                value: 25766
            }, {
                'hc-a2': 'NV',
                name: 'Nevada',
                region: 'West',
                x: 4,
                y: 2,
                value:  48088
            }, {
                'hc-a2': 'NH',
                name: 'New Hampshire',
                region: 'Northeast',
                x: 1,
                y: 11,
                value: 6544
            }, {
                'hc-a2': 'NJ',
                name: 'New Jersey',
                region: 'Northeast',
                x: 3,
                y: 10,
                value: 181660
            }, {
                'hc-a2': 'NM',
                name: 'New Mexico',
                region: 'West',
                x: 6,
                y: 3,
                value:  20388
            }, {
                'hc-a2': 'NY',
                name: 'New York',
                region: 'Northeast',
                x: 2,
                y: 9,
                value: 415014
            }, {
                'hc-a2': 'NC',
                name: 'North Carolina',
                region: 'South',
                x: 5,
                y: 9,
                value: 122148
            }, {
                'hc-a2': 'ND',
                name: 'North Dakota',
                region: 'Midwest',
                x: 2,
                y: 3,
                value: 6469
            }, {
                'hc-a2': 'OH',
                name: 'Ohio',
                region: 'Midwest',
                x: 3,
                y: 8,
                value: 91159
            }, {
                'hc-a2': 'OK',
                name: 'Oklahoma',
                region: 'South',
                x: 6,
                y: 4,
                value: 36487
            }, {
                'hc-a2': 'OR',
                name: 'Oregon',
                region: 'West',
                x: 4,
                y: 1,
                value: 18492
            }, {
                'hc-a2': 'PA',
                name: 'Pennsylvania',
                region: 'Northeast',
                x: 3,
                y: 9,
                value: 112048
            }, {
                'hc-a2': 'RI',
                name: 'Rhode Island',
                region: 'Northeast',
                x: 2,
                y: 11,
                value: 19022
            }, {
                'hc-a2': 'SC',
                name: 'South Carolina',
                region: 'South',
                x: 6,
                y: 8,
                value: 89016
            }, {
                'hc-a2': 'SD',
                name: 'South Dakota',
                region: 'Midwest',
                x: 3,
                y: 4,
                value: 8764
            }, {
                'hc-a2': 'TN',
                name: 'Tennessee',
                region: 'South',
                x: 5,
                y: 7,
                value: 105959
            }, {
                'hc-a2': 'TX',
                name: 'Texas',
                region: 'South',
                x: 7,
                y: 4,
                value: 420946
            }, {
                'hc-a2': 'UT',
                name: 'Utah',
                region: 'West',
                x: 5,
                y: 4,
                value: 40196
            }, {
                'hc-a2': 'VT',
                name: 'Vermont',
                region: 'Northeast',
                x: 1,
                y: 10,
                value: 1414
            }, {
                'hc-a2': 'VA',
                name: 'Virginia',
                region: 'South',
                x: 5,
                y: 8,
                value: 89888 
            }, {
                'hc-a2': 'WA',
                name: 'Washington',
                region: 'West',
                x: 2,
                y: 1,
                value: 55803
            }, {
                'hc-a2': 'WV',
                name: 'West Virginia',
                region: 'South',
                x: 4,
                y: 7,
                value:  6642
            }, {
                'hc-a2': 'WI',
                name: 'Wisconsin',
                region: 'Midwest',
                x: 2,
                y: 5,
                value: 56934
            }, {
                'hc-a2': 'WY',
                name: 'Wyoming',
                region: 'West',
                x: 3,
                y: 3,
                value: 2726
            }]
        }]
    });


//////////////////////   T o p  10  c o u n t i e s  i n   t h e   U  S  /////////////////////////
    d3.json(nyt_covid_county).then((data)=>{
        //console.log(data)
        /// State, county  cases, death
        // //console.log(latest_data_county)

        // Sorting dictionary cases
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
            
        var sort_cases_desc=data.sort(compare)
        var top_10_counties_us=sort_cases_desc.slice(0,10)
        console.log(top_10_counties_us)

        var display_top_10_counties=top_10_counties_us.map(function(d){
            console.log(`${d.County}, ${d.state} ${d.cases} cases, ${d.deaths} deaths `);
         }) 



    })

 //////////////////////////////////////////////////////////////////////////////////////////////
 //                 S E L E C T   S T A T E                ///
    d3.select('form').on('change',function(d){
        /////////  T i m e  s e r i e s  f o r  N Y T  d a t a ////////
        d3.json(time_nyt).then((d2)=>{
                
            covid_data=d2
            //console.log(covid_data)

            var userSelection=d3.select("#state-selector").node().value;
            //console.log(userSelection)
            selectedState=covid_data.filter(c=>c.State==userSelection)
            
            //console.log("Time series testing here")
            //console.log(selectedCovid)
            var timeseries_dates=selectedState.map(t=>t.date).reverse()
            //console.log(timeseries_dates)
            var timeseries_cases=selectedState.map(t=>t.cases).reverse()
            //console.log(timeseries_cases)
            var timeseries_deaths=selectedState.map(t=>t.deaths).reverse()
            //console.log(timeseries_deaths)


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
                type: 'linear'
            }


            };

            Plotly.newPlot('nyt-state-timeseries', data, layout);
            

        })

        ///////// T i m e  S e r i e s  f o r  A t l a n t i c  D a t a ///////////////////////
        d3.json(time_atlantic).then((atl_data)=>{
            //console.log("Atlantic data here")
            //console.log(atl_data)
        
        //console.log(casesStateTotals)

            var userSelection=d3.select("#state-selector").node().value;
            console.log(userSelection)
            selectedCovid=atl_data.filter(c=>c.State==userSelection)
            
            //console.log(selectedCovid)
            var timeseries_dates=selectedCovid.map(t=>t.Date).reverse()
            //console.log(timeseries_dates)
            var timeseries_cases=selectedCovid.map(t=>t.PositiveTests).reverse()
            //console.log(timeseries_cases)
            var timeseries_deaths=selectedCovid.map(t=>t.Deaths).reverse()


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
                title: 'Time Series of COVID Related Cases and deaths (Atlantic)',
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
                    type: 'linear'
                }


            };

            Plotly.newPlot('atl-state-timeseries', data, layout);


        })

        /////// Top 10 cases by county
        d3.json(nyt_covid_county).then((data)=>{
            //console.log("-----N Y T  C O U N T Y  D A T A -----")
            //covid_county_data=data
            //console.log("Cases by county")
            //console.log(data)

            //console.log(latest_data)
            var userSelection=d3.select("#state-selector").node().value;
            //console.log(userSelection)
            selectedCovid=data.filter(c=>c.state==userSelection)
            //console.log(selectedCovid)


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
            
            var sort_cases_desc=selectedCovid.sort(compare)
            //console.log("Sort by case") 
            //console.log(sort_cases_desc);

            var top_ten_counties=sort_cases_desc.slice(0,11)
            //console.log(top_ten_counties)


            var bar_labels=top_ten_counties.map(s=>s.County)
            var bar_values=top_ten_counties.map(s=>s.cases)

            //console.log(bar_labels);
            //console.log(bar_values);

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
                title: `Top 10 counties by total number of cases (NYT)`,
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
            Plotly.newPlot('nyt-10-counties', data,layout,config);


            /// Total deaths by County
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
            
            var sort_deaths_desc=selectedCovid.sort(compare)
            //console.log("Total deaths by county");
            //console.log("Sort by death") 
            //console.log(sort_deaths_desc);

            var top_ten_counties_deaths=sort_deaths_desc.slice(0,11)
            //console.log(top_ten_counties_deaths)


            var bar_labels=top_ten_counties_deaths.map(s=>s.County)
            var bar_values=top_ten_counties_deaths.map(s=>s.deaths)

            //console.log(bar_labels);
            //console.log(bar_values);

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
                title: `Top 10 counties by total number of deaths (NYT)`,
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
            Plotly.newPlot('atlantic-10-counties', data,layout,config);

            
        })


        

    })


}
updateDash()