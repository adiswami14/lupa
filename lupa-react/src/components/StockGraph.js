import * as d3 from 'd3';
import './StockGraph.css'

var margin = {top: 20, right: 20, bottom: 30, left: 50},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

var chart = document.createElement("div");

var parseTime = d3.timeParse('%Y-%m-%d');

var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleLinear().range([0, height]);
var svg = d3.select(chart).append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
    "translate(" + margin.left + "," + margin.top + ")");

d3.csv("/stocks.csv").then(function(data) {

    data.forEach(function(d) {
        d.Date = parseTime(d.Date);
        d.Close = +d.Close;
    });

    data.sort(function(a,b){return a.Date>b.Date;});

    x.domain(d3.extent(data, function(d) { return d.Date; }));
    y.domain([d3.max(data, function(d) { return d.Close; }), 0]);

    svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

    svg.append("g")
    .call(d3.axisLeft(y));

    var valueline = d3.line().x(function(d) { return x(d.Date); }).y(function(d) { return y(d.Close); });

    svg.append("path")
    .data([data])
    .attr("class", "line")
    .attr("d", valueline);
});

export default chart;