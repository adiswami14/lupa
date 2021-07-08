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
        d3.csv('/stocks.csv', d3.autoType).then(function (data) {
            console.log(data)
        });
    }

    render() {
        return(
            <div>
                
            </div>
        );
    }
}

export default StockGraph;