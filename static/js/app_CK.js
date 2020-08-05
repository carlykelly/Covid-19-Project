// Creating map object

var baseMaps
  // Adding tile layer

  
  // Load in geojson data
  var geoData = "static/js/final_geojson.json";
  
  var geojson;
  var cases;
  var patient_mortality;
  
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
        layer.bindPopup(feature.properties.NAME +", "+ feature.properties.State_Name + "<br>Percent of Populatin who has died from Covid:<br>" +
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
          accessToken: API_Key
        }).addTo(myMap);
      
        L.control.layers(baseMaps).addTo(myMap);

        myMap.on('baselayerchange',function(eventlayer){
          this.removeControl(legend)
          this.removeControl(legendMort)
          this.removeControl(legendCase)
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

        

        // if(myMap.layers == cases){
        //   var legend = L.control({ position: "bottomright" });
        //   legend.onAdd = function() {
        //     var div = L.DomUtil.create("div", "info legend");
        //     var limits = cases.options.limits;
        //     var colors = cases.options.colors;
        //     var labels = [];
        //     // Add min & max
        //     var legendInfo = "<h6>Percentage of Residents Contracting Covid</h6>" +
        //       "<div class=\"labels\">" +
        //         "<div class=\"min\">" + limits[0] + "</div>" +
        //         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        //       "</div>";
        //     div.innerHTML = legendInfo;
        //     limits.forEach(function(limit, index) {
        //       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        //     });
        //     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        //     return div;
        //   };
        //   // Adding legend to the map
        //   legend.addTo(myMap);
        // }
        
        // if(myMap.layers == patient_mortality){
        //   var legend = L.control({ position: "bottomright" });
        //   legend.onAdd = function() {
        //     var div = L.DomUtil.create("div", "info legend");
        //     var limits = patient_mortality.options.limits;
        //     var colors = patient_mortality.options.colors;
        //     var labels = [];
        //     // Add min & max
        //     var legendInfo = "<h6>Percentage of Coivd Patients who have Died</h6>" +
        //       "<div class=\"labels\">" +
        //         "<div class=\"min\">" + limits[0] + "</div>" +
        //         "<div class=\"max\">" + limits[limits.length - 1] + "</div>" +
        //       "</div>";
        //     div.innerHTML = legendInfo;
        //     limits.forEach(function(limit, index) {
        //       labels.push("<li style=\"background-color: " + colors[index] + "\"></li>");
        //     });
        //     div.innerHTML += "<ul>" + labels.join("") + "</ul>";
        //     return div;
        //   };
        //   // Adding legend to the map
        //   legend.addTo(myMap);
        // }
  
    })//.addTo(myMap);
  



  
  //})//.catch(function(err) {
      //console.warn(err);
  //});

