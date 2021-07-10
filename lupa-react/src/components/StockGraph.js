// general comment 
import * as d3 from 'd3';
import React from 'react';
import './StockGraph.css'

class StockGraph extends React.Component {
    constructor(name) {
        super(name);
        this.readCSV();
    }

    readCSV() {
        var margin = {top: 20, right: 20, bottom: 30, left: 50},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        // parse the date / time
        var parseTime = d3.timeParse("%Y-%m-%d");

        // set the ranges
        var x = d3.scaleTime().range([0, width]);
        var y = d3.scaleLinear().range([height, 0]);

        // define the line
        var valueline = d3.line()
        .x(function(d) { return d.Date; })
        .y(function(d) { return d.Close; });

        // append the svg obgect to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

        // Get the data
        d3.csv("/stocks.csv").then(function(data) {

        // format the data
        data.forEach(function(d) {
            d.Date = parseTime(d.Date);
            d.Close = +d.Close;
        });

        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d.Date; }));
        y.domain([0, d3.max(data, function(d) { return d.Close; })]);

        // set the gradient
        svg.append("linearGradient")				
        .attr("id", "line-gradient")			
        .attr("gradientUnits", "userSpaceOnUse")	
        .attr("x1", 0).attr("y1", 0)			
        .attr("x2", 0).attr("y2", 1000)		
        .selectAll("stop")						
        .data([								
        {offset: "0%", color: "red"},		
        {offset: "40%", color: "red"},	
        {offset: "40%", color: "black"},		
        {offset: "62%", color: "black"},		
        {offset: "62%", color: "lawngreen"},	
        {offset: "100%", color: "lawngreen"}	
        ])					
        .enter().append("stop")			
        .attr("offset", function(d) { return d.offset; })	
        .attr("stop-color", function(d) { return d.color; });

        // Add the valueline path.
        svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueline);

        // Add the X Axis
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        // Add the Y Axis
        svg.append("g")
        .call(d3.axisLeft(y));

        });
    }


    render() {
        return (
            <div>

            </div>
        );
    }
}

export default StockGraph;