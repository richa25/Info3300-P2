//This function takes in two different country names and maps a bar chart that shows a comparison of the values
  //based on GPD per capita of each of the countries
function renderGDP(country1, country2){

    var svgInside = d3.select(".realSVG");

    var svgInfo = d3.select(".info");

    var infoBox = d3.select("#confirmed-number2");

    svgInside.attr("id","GDP");

    var margin = {top: 20, right: 50, bottom: 150, left: 0},
        width = 300 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .4);

    var y = d3.scale.linear().domain([0,19000]).range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(8);

    var value;
    d3.csv("economicStats.csv", function(error, data) {

        data.forEach(function(d) {
            d.State = d["State"];
            d.GDPPC= d["GDPPC"];
            value = d.GDPPC;
        });
        
        x.domain(data.map(function(d) { 
          if (d["State"] == country1 || d["State"] == country2){
              return d.State; 
          }
        }));
    
    svgInside.append("g")
            .attr("class", "xaxis")
            .attr("transform", "translate(100," + (50+height) + ")")
            .call(xAxis)
          .selectAll("text")
            .style("font-size", "10px")
            .style("text-anchor", "end")
            .attr("dx", "-.8em")
            .attr("dy", "-.55em")
            .attr("transform", "rotate(-90)");

    svgInside.append("g")
          .attr("class", "yaxis")
          .attr("transform", "translate(100,50)")
          .call(yAxis);


        svgInside.selectAll("bar")
            .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("transform","translate(100,50)")
            .style("fill", "#660033")
            .attr("x", function(d) { 
              if(d["State"] == country1 || d["State"] == country2){
                  return x(d.State); 
              }
              })
            .attr("width", x.rangeBand())
            .attr("y", function(d) { 
              if(d["State"] == country1 || d["State"] == country2){
                  return y(d.GDPPC);
              } 
          })
            .attr("height", function(d) { 
              if(d["State"] == country1 || d["State"] == country2){
                  return height - y(d.GDPPC); 
              } 
          });

  });

}

//This function takes in two different country names and maps a bar chart that shows a comparison of the values
  //based on poverty 
function renderPoverty(country1, country2){

    var svgInside = d3.select(".realSVG");
    svgInside.attr("id","Poverty");

    var margin = {top: 20, right: 40, bottom: 150, left: 40},
        width = 300 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .4);

    var y = d3.scale.linear().domain([0,100]).range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10);

    d3.csv("economicStats.csv", function(error, data) {

        data.forEach(function(d) {
            d.State = d["State"];//+d.State;
            d.pr= d["Poverty headcount ratio"];//+d.GDPPC;
        });
        
      x.domain(data.map(function(d) { 
        if (d["State"] == country1 || d["State"] == country2){
          return d.State;
        }
      }));

      svgInside.append("g")
          .attr("class", "xaxis")
          .attr("transform", "translate(100," + (50+height) + ")")
          .call(xAxis)
        .selectAll("text")
          .style("font-size", "10px")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );

      svgInside.append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate(100,50)")
        .call(yAxis);

      svgInside.selectAll("bar")
          .data(data)
        .enter().append("rect")
        .attr("transform", "translate(100,50)")
        .attr("class", "bar")
          .style("fill", "#660033")
          .attr("x", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return x(d.State);
            }})
          .attr("width", x.rangeBand())
          .attr("y", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return y(d.pr); 
          }})
          .attr("height", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
            return height - y(d.pr);}});

    });

}
//This function takes in two different country names and maps a bar chart that shows a comparison of the values
  //based on preganant women recieving pre-natal care
function renderPreg(country1, country2){

   var svgInside = d3.select(".realSVG");
    
    var margin = {top: 20, right: 40, bottom: 150, left: 40},
        width = 300 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .4);

    var y = d3.scale.linear().domain([0,100]).range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    d3.csv("economicStats.csv", function(error, data) {

        data.forEach(function(d) {
            d.State = d["State"];//+d.State;
            d.prenatal= d["Prenatal Care"];//+d.GDPPC;
        });
        
      x.domain(data.map(function(d) { 
        if (d["State"] == country1 || d["State"] == country2){
          return d.State; } }));

      svgInside.append("g")
          .attr("class", "xaxis")
          .attr("transform", "translate(100," + (50+height) + ")")
          .call(xAxis)
        .selectAll("text")
          .style("font-size", "10px")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );

      svgInside.append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate(100,50)")
        .call(yAxis);

      svgInside.selectAll("bar")
          .data(data)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("transform", "translate(100,50)")
          .style("fill", "#660033")
          .attr("x", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return x(d.State); }})
          .attr("width", x.rangeBand())
          .attr("y", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return y(d.prenatal);} })
          .attr("height", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return height - y(d.prenatal); }});

    });

}

//This function takes in two different country names and maps a bar chart that shows a comparison of the values
  //based on the number of births attended by a skilled staff
function renderBirths(country1, country2){

    var svgInside = d3.select(".realSVG");
    var margin = {top: 20, right: 40, bottom: 150, left: 40},
        width = 300 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .4);

    var y = d3.scale.linear().domain([0,100]).range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10)
        .tickPadding(0);

    d3.csv("economicStats.csv", function(error, data) {

        data.forEach(function(d) {
            d.State = d["State"];//+d.State;
            d.births= d["Births Attended by Skilled Staff (%)"];//+d.GDPPC;
        });
        
      x.domain(data.map(function(d) { 
        if (d["State"] == country1 || d["State"] == country2){
          return d.State; }}));

      svgInside.append("g")
          .attr("class", "xaxis")
          .attr("transform", "translate(100," + (50+height) + ")")
          .call(xAxis)
        .selectAll("text")
          .style("font-size", "10px")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );

      svgInside.append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate(100,50)")
        .call(yAxis);

      svgInside.selectAll("bar")
          .data(data)
        .enter().append("rect")
        .attr("transform", "translate(100,50)")
        .attr("class", "bar")
          .style("fill", "#660033")
          .attr("x", function(d) {
          if (d["State"] == country1 || d["State"] == country2){
           return x(d.State);} })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return y(d.births);} })
          .attr("height", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return height - y(d.births); }});

    });

}

function renderMortality(country1, country2){

    var svgInside = d3.select(".realSVG");

    var margin = {top: 20, right: 40, bottom: 150, left: 40},
        width = 300 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

    var x = d3.scale.ordinal().rangeRoundBands([0, width], .4);

    var y = d3.scale.linear().domain([0,100]).range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    d3.csv("economicStats.csv", function(error, data) {

        data.forEach(function(d) {
            d.State = d["State"];//+d.State;
            d.mortality= d["Mortality Rate (per 1000)"];//+d.GDPPC;
        });
        
      x.domain(data.map(function(d) { 
        if (d["State"] == country1 || d["State"] == country2){
          return d.State; }}));

      svgInside.append("g")
          .attr("class", "xaxis")
          .attr("transform", "translate(100," +(50+height) + ")")
          .call(xAxis)
        .selectAll("text")
          .style("font-size", "10px")
          .style("text-anchor", "end")
          .attr("dx", "-.8em")
          .attr("dy", "-.55em")
          .attr("transform", "rotate(-90)" );

      svgInside.append("g")
        .attr("class", "yaxis")
        .attr("transform", "translate(100,50)")
        .call(yAxis);

      svgInside.selectAll("bar")
          .data(data)
        .enter().append("rect")
        .attr("transform", "translate(100,50)")
        .attr("class", "bar")
          .style("fill", "#660033")
          .attr("x", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return x(d.State);} })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return y(d.mortality);} })
          .attr("height", function(d) { 
            if (d["State"] == country1 || d["State"] == country2){
              return height - y(d.mortality); }});

    });

}