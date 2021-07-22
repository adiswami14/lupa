import React from 'react';
import rd3 from 'react-d3-library';
import chart from './StockGraph'

const RD3Component = rd3.Component;

class StockGraphComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {d3:''}
    }

    async componentDidMount() {
        this.setState({d3: chart});
    }

    render() {
        return (
            <RD3Component data={this.state.d3} />
        );
      }
}

export default StockGraphComp;