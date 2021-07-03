import React from 'react'

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
            <h3>SEARCH BAR</h3>
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="search-bar">
                Look up stocks!
            </label>
            <input
                id="search-bar"
                onChange={this.handleChange}
                value={this.state.text}
            />
            <button>
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
    }
}

export default SearchBar;