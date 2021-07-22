import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = { text: ' ' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
            <label className = "label" htmlFor="search-bar">
                Look up stocks!
            </label>
            <input
                id="search-bar"
                onChange={this.handleChange}
                value={this.state.text}
            />
            <button className = "button">
                Search!
            </button>
            </form>
        </div>
        );
    }

    handleChange(event) {
        this.setState({ text: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const newLogItem = {
            text: this.state.text,
            id: Date.now()
        };

        console.log(newLogItem);

        const exec = require('child_process').exec
        exec('python ../returns_calculator.py '+newLogItem.text);
    }
}

export default SearchBar;