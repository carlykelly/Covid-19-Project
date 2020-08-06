function updateDash(){

    /// route names for different data sets
    var nyt_state="/nyt_covid_state_latest";
    var nyt_covid_county="/nyt_covid_county_latest";

    var time_nyt ="/timeseries_nyt";

    var honey_atlantic="/atlantic_covid_latest";
    var time_atlantic="/timeseries_atlantic";




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
        //console.log("Top to US")
        //console.log(top_10_counties_us)

        var table_county=top_10_counties_us.map(s=>s.County)
        var table_state=top_10_counties_us.map(s=>s.state)
        var table_cases=top_10_counties_us.map(s=>s.cases)
        var table_deaths=top_10_counties_us.map(s=>s.deaths)
        //console.log(table_state)

        ///// Building the table
        var values = [table_county,table_state,table_cases,table_deaths]

        var data = [{
            type: 'table',
            columnwidth: [100,100,100,100],
            
            header: {
              values: [["<b>County</b>"], ["<b>State</b>"],
                           ["<b>Total Cases</b>"], ["<b>Total Deaths</b>"]],
              align: "center",
              line: {width: 1, color: 'black'},
              fill: {color: "grey"},
              font: {family: "Arial", size: 14, color: "white"}
            },
            cells: {
              values: values,
              align: "center",
              line: {color: "black", width: 1},
              font: {family: "Arial", size: 11, color: ["black"]}
            }
        }]
          
        Plotly.newPlot('top-five-us-counties', data);


    })

////////   N Y T   T i m e  S e r i e s  M a i n  p a g e ///////////////////////////////

    d3.json(time_nyt).then((d2)=>{
                    
        var covid_data=d2
        console.log(covid_data)

        // var userSelection=d3.select("#state-selector").node().value;
        // //console.log(userSelection)
        // selectedState=covid_data.filter(c=>c.State==userSelection)
        
        // //console.log("Time series testing here")
        // //console.log(selectedCovid)
        // var timeseries_dates=selectedState.map(t=>t.date).reverse()
        // //console.log(timeseries_dates)
        // var timeseries_cases=selectedState.map(t=>t.cases).reverse()
        // //console.log(timeseries_cases)
        // var timeseries_deaths=selectedState.map(t=>t.deaths).reverse()
        // //console.log(timeseries_deaths)


        // var trace1 = {
        //     type: "scatter",
        //     mode: "lines",
        //     name: 'COVID cases',
        //     x: timeseries_dates,
        //     y: timeseries_cases,
        //     line: {color: '#17BECF'}
        // }

        // var trace2 = {
        //     type: "scatter",
        //     mode: "lines",
        //     name: 'COVID deaths',
        //     x: timeseries_dates,
        //     y: timeseries_deaths,
        //     line: {color: '#7F7F7F'}
        // }

        // var data = [trace1,trace2];

        // var layout = {
        // title: 'Time Series of COVID Related Cases and deaths',
        // xaxis:{
        //     autorange:true,
        //     range:['03-05-2020','07-28-2020'],
        //     rangeselector:{buttons:[
        //         {
        //             count:1,
        //             lanel:'1m',
        //             step:'month',
        //             stepmode:'backward'
        //         },
        //         {
        //             count:6,
        //             labels:'6m',
        //             step:'month',
        //             stepmode:'backward'
        //         },
        //         {step:'all'}
        //     ]},
        //     rangeslider:{range: ['03-05-2020','07-28-2020']},
        //     type: 'date'
        // },
        // yaxis: {
        //     autorange: true,
        //     type: 'linear'
        // }


        // };

        // Plotly.newPlot('nyt-state-timeseries', data, layout);
        

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
            console.log(selectedCovid)


            // Sorting dictionary
            function compare(a, b) {
                const deathpopA = a.death_pop_percent;
                const deathpopB = b.death_pop_percent;
            
                let comparison = 0;
                if (deathpopA > deathpopB) {
                comparison = 1;
                } else if (deathpopA < deathpopB) {
                comparison = -1;
                }
                return comparison * -1;
            }
            
            var sort_deathpop_desc=selectedCovid.sort(compare)
            //console.log("Sort by death_pop_percent") 
            //console.log(sort_deathpop_desc);

            var top_ten_counties_death_pop=sort_deathpop_desc.slice(0,11)
            //console.log(top_ten_counties)


            var bar_labels=top_ten_counties_death_pop.map(s=>s.County)
            var bar_values=top_ten_counties_death_pop.map(s=>s.death_pop_percent)

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
                title: `Top 10 counties by percent of Population who have died from COVID (NYT)`,
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
            Plotly.newPlot('top-five-counties', data,layout,config);


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