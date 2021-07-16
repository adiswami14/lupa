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


        // set the ranges
        var x = d3.scaleLinear().range([0, width]);
        var y = d3.scaleLinear().range([0, height]);

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
        d3.csv("/test.csv").then(function(data) {

        // format the data
        data.forEach(function(d) {
            d.X = d.X*100;
            d.Y = +d.Y*50;
        });
        
        data.sort(function(a,b){return a.X<b.X;});

        // Scale the range of the data
        x.domain(d3.extent(data, function(d) { return d.X; }));
        y.domain([d3.max(data, function(d) { return d.Y; }), 0]);

        // Add the X Axis
        svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

        // Add the Y Axis
        svg.append("g")
        .call(d3.axisLeft(y));

        // define the line
        var valueline = d3.line().x(function(d) { return d.X; }).y(function(d) { return d.Y; });

        // Add the valueline path.
        svg.append("path")
        .data([data])
        .attr("class", "line")
        .attr("d", valueline);

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