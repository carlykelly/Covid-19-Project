// Creating map object

var baseMaps
  // Adding tile layer

  
  // Load in geojson data
  //var geoData = "static/js/final_geojson.json";
  var geoData = "/static/js/final_geojson.json";
  
  var geojson;
  var cases;
  var patient_mortality;
  var outlineLayer
  var outline
  
  // Grab data with d3
  d3.json(geoData).then(function(data) {
  
      console.log(data)
    // Create a new choropleth layer
    geojson = L.choropleth(data, {
  
      // Define what  property in the features to use
      valueProperty: "death_pop_percent",
  
      // Set color scale
      scale: ["#ffffb2", "#b10026"],
  
      // Number of breaks in step range
      steps: 10,
  
      // q for quartile, e for equidistant, k for k-means
      mode: "q",
      style: {
        // Border color
        color: "black",
        weight: 1,
        fillOpacity: 0.7
      },
      onEachFeature: function(feature, layer) {
        layer.bindPopup(feature.properties.NAME +", "+ feature.properties.State_Name + "<br>Percent of Population who has died from Covid:<br>" +
         feature.properties.death_pop_percent);
      }
    });

    var legend = L.control({ position: "bottomright" });
    legend.onAdd = function() {
      var div = L.DomUtil.create("div", "info legend");
      var limits = geojson.options.limits;
      var colors = geojson.options.colors;
      var labels = [];
      // Add min & max
      var legendInfo = "<h6>Percentage of Residents Dying of Covid</h6>" +
        "<div class=\"labels\">" +
          "<div class=\"min\">" + limits[0] + "</div>" +
          "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        "</div>";
      div.innerHTML = legendInfo;
      limits.forEach(function(limit, index) {
        labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
      });
      div.innerHTML += "<ul>" + labels.join("") + "</ul>";
      return div;
    };
    // Adding legend to the map


      cases = L.choropleth(data, {
  
        // Define what  property in the features to use
        valueProperty: "case_pop_percent",
    
        // Set color scale
        scale: ["#ffffb2", "#89168c"],
    
        // Number of breaks in step range
        steps: 10,
    
        // q for quartile, e for equidistant, k for k-means
        mode: "q",
        style: {
          // Border color
          color: "black",
          weight: 1,
          fillOpacity: 0.7
        },
        // Binding a pop-up to each layer
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.NAME +", "+ feature.properties.State_Name + "<br>Percent of Populatin who has contracted Covid:<br>" +
           feature.properties.case_pop_percent);
        } 
      });

      var legendCase = L.control({ position: "bottomright" });
      legendCase.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var limits = cases.options.limits;
        var colors = cases.options.colors;
        var labels = [];
        // Add min & max
        var legendInfo = "<h6>Percentage of Residents Contracting Covid</h6>" +
          "<div class=\"labels\">" +
            "<div class=\"min\">" + limits[0] + "</div>" +
            "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
          "</div>";
        div.innerHTML = legendInfo;
        limits.forEach(function(limit, index) {
          labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        });
        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        return div;
      };

      patient_mortality = L.choropleth(data, {
  
        // Define what  property in the features to use
        valueProperty: "death_case_percent",
    
        // Set color scale
        scale: ["#ffffb2", "#000080"],
    
        // Number of breaks in step range
        steps: 10,
    
        // q for quartile, e for equidistant, k for k-means
        mode: "q",
        style: {
          // Border color
          color: "black",
          weight: 1,
          fillOpacity: 0.7
        },
        // Binding a pop-up to each layer
        onEachFeature: function(feature, layer) {
          layer.bindPopup(feature.properties.NAME +", "+ feature.properties.State_Name + "<br>Percent of Covid Patients who have died:<br>" +
           feature.properties.death_case_percent);
        }
      });
      var legendMort = L.control({ position: "bottomright" });
      legendMort.onAdd = function() {
        var div = L.DomUtil.create("div", "info legend");
        var limits = patient_mortality.options.limits;
        var colors = patient_mortality.options.colors;
        var labels = [];
        // Add min & max
        var legendInfo = "<h6>Percentage of Coivd Patients who have Died</h6>" +
          "<div class=\"labels\">" +
            "<div class=\"min\">" + limits[0] + "</div>" +
            "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
          "</div>";
        div.innerHTML = legendInfo;
        limits.forEach(function(limit, index) {
          labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        });
        div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        return div;
      };


        baseMaps = {
          "Death Rate": geojson,
          "Cases Rate": cases,
          "Death Rate of Covid Patients": patient_mortality
        }
      
        var myMap = L.map("total-county-cloropleth", {
          center: [38.7003, -93.7095],
          zoom: 5,
          layers: geojson
        });
        legend.addTo(myMap);

          L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
            attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
            tileSize: 512,
            maxZoom: 18,
            zoomOffset: -1,
            id: "mapbox/light-v9",
            accessToken: 'sk.eyJ1IjoiY2FybHlma2VsbHkiLCJhIjoiY2tkZ3U4Z3B3Mmx6dDJ4cG16Y2l6eWQ1bCJ9.ewwhVCi9nw45LL2iNZ1hbA'
          }).addTo(myMap);

        L.control.layers(baseMaps, null, {collapsed:false}).addTo(myMap);

        myMap.on('baselayerchange',function(eventlayer){
          this.removeControl(legend)
          this.removeControl(legendMort)
          this.removeControl(legendCase)
          if(outline){
            if(state == 'us'){
              myMap.removeLayer(outline)
            }
            else{
            myMap.removeLayer(outline)
            outline.addTo(myMap)
            }
            }
          if(eventlayer.name == 'Cases Rate'){
            legendCase.addTo(myMap)
          }
          if(eventlayer.name == 'Death Rate'){
            legend.addTo(myMap)
          }
          if(eventlayer.name == 'Death Rate of Covid Patients'){
            legendMort.addTo(myMap)
          }
        })

        d3.select('form').on('change.carly', function(d){
          d3.json(stateData).then(function(data2){
            //console.log(data2.features[0].properties)
            

          state = d3.select("#state-selector").node().value;
          //console.log(state)
          var poly = data2.features.filter(a => a.properties.name == state)
          var stategeo = {"type":"FeatureCollection","features":poly}
          console.log(poly)
          //console.log(poly[0].geometry.coordinates)
          //geoCords = poly[0].geometry.coordinates
          console.log(stategeo)
          var coordinates = stateCoordDict[state]
          //console.log(coordinates)
          var graphCoords = myMap.options.center
          //console.log(graphCoords)
          //console.log(zoom)
          graphCoords = coordinates
          //myMap.panTo(new L.LatLng(coordinates[0],coordinates[1]))
          if(state != 'us' && state != 'Alaska' && state != 'California' && state !='Texas' && state !='Hawaii' && state != 'Nevada' && state != 'New Mexico' && state != 'Idaho' && state != 'Montana' && state != 'Minnesota' && state != 'North Dakota' && state != 'South Dakota' && state != 'Illinois' && state != 'Oklahoma' && state != 'Arizona'&& state != 'Colorado' && state != "Kansas"){
            myMap.setView(coordinates, 7)
            if(outline){
            myMap.removeLayer(outline)
            };
            outline = L.geoJSON(poly[0].geometry, {
              color: "black",
              weight: 5,
              opacity: 2,
              interactive: false,
              fillOpacity: 0
            }).addTo(myMap)
          }

          else if(state == 'Texas' || state == 'California' || state == 'Nevada' || state == 'New Mexico'|| state == 'Idaho' || state == 'Montana' || state == 'Minnesota'|| state == 'North Dakota'|| state == 'South Dakota'|| state == 'Illinois'|| state == 'Oklahoma'|| state == 'Arizona'|| state == 'Colorado'|| state == "Kansas"){
            myMap.setView(coordinates, 6)
            if(outline){
              myMap.removeLayer(outline)
              };
              outline = L.geoJSON(poly[0].geometry, {
                color: "black",
                weight: 5,
                opacity: 2,
                interactive: false,
                fillOpacity: 0
              }).addTo(myMap)
          }
          else if(state == 'Hawaii'){
            myMap.setView(coordinates, 6)
          }
          else if(state == 'us' || state=='Alaska'){
            //myMap.setZoom(4)
            if(outline){
              myMap.removeLayer(outline)
              };
            myMap.setView(coordinates, 5)
          }

        })
      })
    })
  
stateCoordDict = {
  "Alabama": [32.3182, -86.9023 ],
  "Alaska": [64.2008, -149.4937],
  "Arizona": [34.0489, -111.0937],
  "Arkansas": [35.2010, -91.8318],
  "California": [36.7783, -119.4179],
  "Colorado": [39.5501, -105.7821],
  "Connecticut": [41.6032, -73.0877],
  "Delaware": [38.9108, -75.5277],
  "Florida": [27.6648, -81.5158],
  "Georgia": [32.1656, -82.9001],
  "Hawaii": [19.8968, -155.5828],
  "Idaho": [44.0682, -114.7420],
  "Illinois": [40.6331, -89.3985],
  "Indiana": [40.2672, -40.2672],
  "Iowa": [41.8780, -93.0977],
  "Kansas": [39.0119, -98.4842],
  "Kentucky": [37.8393, -84.2700],
  "Louisiana": [30.9843, -91.9623],
  "Maine": [45.2538, -69.4455],
  "Maryland": [39.0458, -76.6413],
  "Massachusetts": [42.407211, -71.382439],
  "Michigan": [44.3148, -85.6024],
  "Minnesota": [46.7296, -94.6859],
  "Mississippi": [32.3547, -89.3985],
  "Missouri": [37.9643, -91.8318],
  "Montana": [46.8797, -110.3626],
  "Nebraska": [41.4925, -99.9018],
  "Nevada": [38.8026, -116.4194],
  "New Hampshire": [43.1939, -71.5724] ,
  "New Jersey": [40.0583, -74.4057],
  "New Mexico": [34.5199, -105.8701],
  "New York": [42.9128, -76.0060],
  "North Carolina": [35.7596, -80.0193],
  "North Dakota": [47.5515, -101.0020],
  "Ohio": [40.4173, -82.9071],
  "Oklahoma": [35.0078, -97.0929],
  "Oregon": [43.8041, -120.5542],
  "Pennsylvania": [41.2033, -77.1945],
  "Rhode Island": [41.5801, -71.4774],
  "South Carolina": [33.8361, -81.1637],
  "South Dakota": [43.9695, -99.9018],
  "Tennessee": [35.5175, -86.5804],
  "Texas": [30.9686, -99.9018],
  "Utah": [39.3210, -111.0937],
  "Vermont": [44.5588, -72.5778],
  "Virginia": [37.4316, -79.6569],
  "Washington": [46.7511, -120.7401],
  "West Virginia": [38.5976, -80.4549],
  "Wisconsin": [44.2844, -88.7879],
  "Wyoming": [43.0760, -107.2903],
  "us": [38.7003, -93.7095]
}

var stateData = "static/js/state_geojson.json"


