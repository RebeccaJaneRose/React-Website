import React, { Component } from 'react';
import logo from './logo.svg';

class NameForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: 'Beef Pocket'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert('Your favourite flavour is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favourite flavour:
                   <select value={this.state.value} onChange={this.handleChange}>
                       <option value="Beef Pocket">Beef Pocket</option>
                       <option value="Chicken Pocket">Chicken Pocket</option>
                       <option value="Veg Pocket">Veg Pocket</option>
                       <option value="Lamb Pocket">Lamb Pocket</option>
                   </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default NameForm;