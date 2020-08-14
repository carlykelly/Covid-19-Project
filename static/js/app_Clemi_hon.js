function updateDash(){

    /// route names for different data sets
    var nyt_state="/nyt_covid_state_latest";
    var nyt_covid_county="/nyt_covid_county_latest";

    var time_nyt ="/timeseries_nyt";

    var honey_atlantic="/atlantic_covid_latest";
    var time_atlantic="/timeseries_atlantic";
    var population ="/api/state_population";

    //console.log("Hello")
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
   
    var chart_nyt=Highcharts.chart('nyt-country-honeycomb', {
        chart: {
            type: 'tilemap',
            inverted: true,
            height: '80%',
    
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
            text: 'U.S. states by total number of positive Corona virus cases <br> (The New York Times)'
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
                color: '#ffbdd4',
                name: '< 10K'
            }, {
                from: 10000,
                to: 50000,
                color: '#ff70a2',
                name: '10K - 50K'
            }, {
                from: 50000,
                to: 100000,
                color: '#ef0055',
                name: '50K - 100K'
            }, {
                from: 100000,
                color: '#bc0043',
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
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 1000
                },
                chartOptions: {
                
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }

       
    });
    chart_nyt.setSize(null);

    //                      /// Atlantic Honey Comb  ///                          //
    d3.json(honey_atlantic).then((data)=>{
        //console.log("Atlantic Honey Comb")
        //console.log(data)
        //Pull out only state and positive test keys for easier reading in console
        // var cases_by_state=data.map(function(d){
        //     console.log( `State ${d.State}, Positive cases ${d.PositiveTests}`);
        // })
    })

    var chart_atl =Highcharts.chart('atl-country-honeycomb', {
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
                color: '#ffbdd4',
                name: '< 10K'
            }, {
                from: 10000,
                to: 50000,
                color: '#ff70a2',
                name: '10K - 50K'
            }, {
                from: 50000,
                to: 100000,
                color: '#ef0055',
                name: '50K - 100K'
            }, {
                from: 100000,
                color: '#bc0043',
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
    chart_atl.setSize(null);

    //Honey Comb Difference Table
    d3.json(nyt_state).then(function(NYT){
        d3.json(honey_atlantic).then(function(ATL){
            d3.json(population).then(function(POP){
                //console.log(NYT)
                //console.log(ATL)
                //console.log(POP)

                var default_state="Alaska"
            
                selectedCovidnyt=NYT.filter(c=>c.State==default_state)
                //console.log(selectedCovidnyt)
                var NYT_cases=selectedCovidnyt[0].cases
                var NYT_deaths=selectedCovidnyt[0].deaths
                //console.log(NYT_deaths)

                selectedCovid_atl=ATL.filter(a=>a.State==default_state)
                //console.log(selectedCovid_atl)
                var ATL_cases=selectedCovid_atl[0].PositiveTests
                var ATL_deaths=selectedCovid_atl[0].Deaths
                //console.log(ATL_deaths)

                selectedCovid_pop=POP.filter(a=>a.State==default_state)
                //console.log( selectedCovid_pop)
                var population=selectedCovid_pop[0].Population
                //console.log(population)

                //// Calculating percent different in cases
                var calculation_cases=(Math.abs(NYT_cases-ATL_cases)/population)*100
                /// round to 4 decimal places
                var percent_difference_cases=calculation_cases.toFixed(4)
                //console.log(percent_difference_cases)

                /// Calculating percent different in deaths
                var calculation_deaths=(Math.abs(NYT_deaths-ATL_deaths)/population)*100
                /// round to 4 decimal places
                var percent_difference_deaths=calculation_deaths.toFixed(4)
                //console.log(percent_difference_deaths)


                // Make table//
                var values=[
                    ["New York Times","The Atlantic", "% Difference per population"],
                    [NYT_cases,ATL_cases,percent_difference_cases],
                    [NYT_deaths,ATL_deaths,percent_difference_deaths]

                ]
                
                var data=[{
                    type:'table',
                    columnwidth: [8000,4000,4000],
                    header:{
                        values:[[`<b>${default_state} </b>`],["<b>Cases</b>"],["<b>Deaths</b>"]],
                        
                        align: "center",
                        line: {width: 1, color: 'black'},
                        fill: {color: '#E8CEC9'},
                        font: {family: "Arial", size: 14, color: "black"}
                        },
                    cells: {
                        values: values,
                        align: "center",
                        line: {color: "black", width: 1},
                        font: {family: "Arial", size: 16, color: ["black"]},
                        height:50
                    }
                }]

                var layout={
                    autosize: true,
                    //width:350,
                    //height:300,
                    margin: {
                        l: 20,
                        r: 20,
                        b: 20,
                        t: 20,
                        pad: 0
                    }
                }
                var config = {responsive: true}

                Plotly.newPlot('honeycomb-difference-table', data, layout,config);
                    

            })


        })
    })



    //////////////////////////   Default Time series, reliablity  ///////////////////////////////
    d3.json(time_nyt).then(function(nyt){
        //console.log("NYT Data")
        //console.log(nyt)

        d3.json(time_atlantic).then(function(atlantic){
            //console.log("Atlantic Data")
            //console.log(atlantic)


            var default_state="Alaska"
            
            selectedCovidnyt=nyt.filter(c=>c.State==default_state)
            selectedCovid_atl=atlantic.filter(a=>a.State==default_state)

            
            /////////// DATA RELIABILITY //////////////////
            //get back to this. There are several for one state
            //console.log("DATA QUALITY GRADE")
            //console.log(selectedCovid_atl)
            var DataGrade=selectedCovid_atl.map(t=>t.DataQualityGrade)
            //console.log(DataGrade)

            var result = { };
            for(var i = 0; i < DataGrade.length; ++i) {
                if(!result[DataGrade[i]])
                    result[DataGrade[i]] = 0;
                ++result[DataGrade[i]];
            }

            //console.log(result)
            var grades=Object.keys(result)
            //console.log(grades)
            var count=Object.values(result)
            //console.log(count)


            var data = [{
                values: count,
                labels: grades,
                domain: {column: 0},
                name: 'Data Quality Grade',
                hoverinfo: 'label+percent',
                hole: .5,
                type: 'pie'
            }];

            var layout = {
                autosize: true,
                annotations: [
                  {
                    font: {
                      size: 20
                    },
                    showarrow: false,
                    text: 'Grade',
                    x: 0.5,
                    y: 0.5
                  }
                ],
                //height: 400,
                //width: 400,
                showlegend: true,
                grid: {rows: 1, columns: 1},
                margin: {
                    l: 5,
                    r: 40,
                    b: 50,
                    t: 50
                }
              };
              var config = {responsive: true}
              Plotly.newPlot('data-reliability-score', data, layout,config);

              Plotly.newPlot('data-reliability-score-small', data, layout,config);



            //////////////// Time series //////////////////////
            
            
            //console.log("Time series NYT")
            //console.log(selectedCovid)
            var nyt_timeseries_dates=selectedCovidnyt.map(t=>t.date).reverse()
            //console.log(nyt_timeseries_dates)
            var nyt_timeseries_cases=selectedCovidnyt.map(t=>t.cases).reverse()
            //console.log(timeseries_cases)
            var nyt_timeseries_deaths=selectedCovidnyt.map(t=>t.deaths).reverse()

            //// Atlantic
            //console.log("Time series ATL")
            var atl_timeseries_dates=selectedCovid_atl.map(t=>t.Date).reverse()
            //console.log(atl_timeseries_dates)
            var atl_timeseries_cases=selectedCovid_atl.map(t=>t.PositiveTests).reverse()
            //console.log(timeseries_cases)
            var atl_timeseries_deaths=selectedCovid_atl.map(t=>t.Deaths).reverse()


            var trace1 = {
                type: "scatter",
                mode: "lines",
                name: 'The New York Times   ',
                x: nyt_timeseries_dates,
                y: nyt_timeseries_cases,
                line: {color: '#B123FF'}
            }

            var trace2 = {
                type: "scatter",
                mode: "lines",
                name: 'The New York Times   ',
                x: nyt_timeseries_dates,
                y: nyt_timeseries_deaths,
                line: {color: '#B123FF'}
            }

            var trace3 = {
                type: "scatter",
                mode: "lines",
                name: 'The Atlantic   ',
                x: atl_timeseries_dates,
                y: atl_timeseries_cases,
                line: {color: '#71FF23'}
            }

            var trace4 = {
                type: "scatter",
                mode: "lines",
                name: 'The Atlantic   ',
                x: atl_timeseries_dates,
                y: atl_timeseries_deaths,
                line: {color: '#71FF23'}
            }

            ////// Cases //////////
            var data = [trace1,trace3];
             ///// Deaths  //////////
            var data2 = [trace2,trace4];

    

            var layout = {
                autosize: true,
                showlegend:true,
                legend:{"orientation":"h",
                y:-1
                },
                width:500,
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


            var layout2 = {
                autosize: true,
                showlegend:true,
                legend:{"orientation":"h",
                y:-1
                },
                width:500,
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


            var config = {responsive: true}
            Plotly.newPlot('case-timeseries', data, layout,config);
            Plotly.newPlot('death-timeseries', data2, layout2,config);


            $('.hideshow button').click(function(){
                var btn_id = this.parentNode.id,
                    data_index = ( btn_id === 'top' ) ? 0 : 1,
                    myDiv = document.getElementById("case-timeseries"),
                    visible = myDiv.data[data_index].visible;
              
                if( visible === undefined ) visible = true;
              
                Plotly.restyle("case-timeseries", 'visible', !visible, data_index);
            });

            $('.hideshow button').click(function(){
                var btn_id = this.parentNode.id,
                    data_index = ( btn_id === 'top' ) ? 0 : 1,
                    myDiv = document.getElementById("death-timeseries"),
                    visible = myDiv.data[data_index].visible;
              
                if( visible === undefined ) visible = true;
              
                Plotly.restyle("death-timeseries", 'visible', !visible, data_index);
            });



        })

    })

    


 //////////////////////////////////////////////////////////////////////////////////////////////
 //                 S E L E C T   S T A T E                ///
    d3.select('form').on('change.clemi',function(d){

            //Honey Comb Difference Table
        d3.json(nyt_state).then(function(NYT){
            d3.json(honey_atlantic).then(function(ATL){
                d3.json(population).then(function(POP){
                    //console.log(NYT)
                    //console.log(ATL)
                    //console.log(POP)

                    var userSelection=d3.select("#state-selector").node().value;
                
                    selectedCovidnyt=NYT.filter(c=>c.State==userSelection)
                    //console.log(selectedCovidnyt)
                    var NYT_cases=selectedCovidnyt[0].cases
                    var NYT_deaths=selectedCovidnyt[0].deaths
                    //console.log(NYT_deaths)

                    selectedCovid_atl=ATL.filter(a=>a.State==userSelection)
                    //console.log(selectedCovid_atl)
                    var ATL_cases=selectedCovid_atl[0].PositiveTests
                    var ATL_deaths=selectedCovid_atl[0].Deaths
                    //console.log(ATL_deaths)

                    selectedCovid_pop=POP.filter(a=>a.State==userSelection)
                    //console.log( selectedCovid_pop)
                    var population=selectedCovid_pop[0].Population
                    //console.log(population)

                    //// Calculating percent different in cases
                    var calculation_cases=(Math.abs(NYT_cases-ATL_cases)/population)*100
                    /// round to 4 decimal places
                    var percent_difference_cases=calculation_cases.toFixed(4)
                    //console.log(percent_difference_cases)

                    /// Calculating percent different in deaths
                    var calculation_deaths=(Math.abs(NYT_deaths-ATL_deaths)/population)*100
                    /// round to 4 decimal places
                    var percent_difference_deaths=calculation_deaths.toFixed(4)
                    //console.log(percent_difference_deaths)


                    // Make table//
                    var values=[
                        ["The New York Times","The Atlantic", "% Difference per population"],
                        [NYT_cases,ATL_cases,percent_difference_cases],
                        [NYT_deaths,ATL_deaths,percent_difference_deaths]

                    ]
                    
                    var data=[{
                        type:'table',
                        header:{
                            values:[[`<b>${userSelection}</b>`],["<b>Cases</b>"],["<b>Deaths</b>"]],
                            
                            align: "center",
                            line: {width: 1, color: 'black'},
                            fill: {color: "#E8CEC9"},
                            font: {family: "Arial", size: 14, color: "black"}
                            },
                        cells: {
                            values: values,
                            align: "center",
                            line: {color: "black", width: 1},
                            font: {family: "Arial", size: 16, color: ["black"]},
                            height:50
                        }
                    }]

                    var layout={
                        autosize: true,
                        //width:350,
                        //height:350,
                        margin: {
                            l: 20,
                            r: 20,
                            b: 20,
                            t: 20,
                            pad: 0
                        }
                    }
                    var config = {responsive: true}
                    Plotly.newPlot('honeycomb-difference-table', data,layout, config);



                        

                })


            })
        })




       ////////////////// Time series  and data reliability//////////////////// 
        d3.json(time_nyt).then(function(nyt){
            //console.log("NYT Data")
            //console.log(nyt)

            d3.json(time_atlantic).then(function(atlantic){
                //console.log("Atlantic Data")
                //console.log(atlantic)


                var userSelection=d3.select("#state-selector").node().value;
                console.log(userSelection)
                selectedCovidnyt=nyt.filter(c=>c.State==userSelection)
                selectedCovid_atl=atlantic.filter(a=>a.State==userSelection)

                /////////// DATA RELIABILITY //////////////////
                //get back to this. There are several for one state
                console.log("DATA QUALITY GRADE")
                //console.log(selectedCovid_atl)
                var DataGrade=selectedCovid_atl.map(t=>t.DataQualityGrade)
                //console.log(DataGrade)

                var result = { };
                for(var i = 0; i < DataGrade.length; ++i) {
                    if(!result[DataGrade[i]])
                        result[DataGrade[i]] = 0;
                    ++result[DataGrade[i]];
                }

                console.log(result)
                var grades=Object.keys(result)
                console.log(grades)
                var count=Object.values(result)
                console.log(count)

                var data = [{
                    values: count,
                    labels: grades,
                    domain: {column: 0},
                    name: 'Data Quality Grade',
                    hoverinfo: 'label+percent',
                    hole: .5,
                    type: 'pie'
                }];
    
                var layout = {
                    autosize: true,
                    annotations: [
                        {
                          font: {
                            size: 20
                          },
                          showarrow: false,
                          text: 'Grade',
                          x: 0.5,
                          y: 0.5
                        }
                      ],
                      //height: 400,
                      //width: 400,
                      showlegend: true,
                      grid: {rows: 1, columns: 1},
                      margin: {
                          l: 5,
                          r: 40,
                          b: 50,
                          t: 50
                      }
                  };
                  var config = {responsive: true}
                  
                  Plotly.newPlot('data-reliability-score', data, layout,config);          
              
                  Plotly.newPlot('data-reliability-score-small', data, layout,config);

                /////////  Time  Series ////////////
                
                //console.log("Time series NYT")
                //console.log(selectedCovid)
                var nyt_timeseries_dates=selectedCovidnyt.map(t=>t.date).reverse()
                //console.log(nyt_timeseries_dates)
                var nyt_timeseries_cases=selectedCovidnyt.map(t=>t.cases).reverse()
                //console.log(timeseries_cases)
                var nyt_timeseries_deaths=selectedCovidnyt.map(t=>t.deaths).reverse()

                //// Atlantic
                //console.log("Time series ATL")
                var atl_timeseries_dates=selectedCovid_atl.map(t=>t.Date).reverse()
                //console.log(atl_timeseries_dates)
                var atl_timeseries_cases=selectedCovid_atl.map(t=>t.PositiveTests).reverse()
                //console.log(timeseries_cases)
                var atl_timeseries_deaths=selectedCovid_atl.map(t=>t.Deaths).reverse()


                var trace1 = {
                    type: "scatter",
                    mode: "lines",
                    name: 'The New York Times   ',
                    x: nyt_timeseries_dates,
                    y: nyt_timeseries_cases,
                    line: {color: '#B123FF'}
                }

                var trace2 = {
                    type: "scatter",
                    mode: "lines",
                    name: 'The New York Times   ',
                    x: nyt_timeseries_dates,
                    y: nyt_timeseries_deaths,
                    line: {color: '#B123FF'}
                }

                var trace3 = {
                    type: "scatter",
                    mode: "lines",
                    name: 'The Atlantic   ',
                    x: atl_timeseries_dates,
                    y: atl_timeseries_cases,
                    line: {color: '#71FF23'}
                }

                var trace4 = {
                    type: "scatter",
                    mode: "lines",
                    name: 'The Atlantic   ',
                    x: atl_timeseries_dates,
                    y: atl_timeseries_deaths,
                    line: {color: '#71FF23'}
                }

                ////// Cases //////////
                var data = [trace1,trace3];
                ///// Deaths  //////////
                var data2 = [trace2,trace4];

                var layout = {
                    autosize: true,
                    showlegend:true,
                    legend:{"orientation":"h",
                        y:-1
                    },
                    //width:500,
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


                var layout2 = {
                    autosize: true,
                    showlegend:true,
                    legend:{"orientation":"h",
                        y:-1
                    },
                    //width:500,
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

                var config = {responsive: true}
                Plotly.newPlot('case-timeseries', data, layout,config);
                Plotly.newPlot('death-timeseries', data2, layout2,config);



            })

        })


    })


}
updateDash()