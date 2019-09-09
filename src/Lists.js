import React, { Component } from 'react';
import logo from './logo.svg';

function ListItem(props) {
    return <li>{props.value}</li>;
}

class NumberList extends Component {
    render(){
        const numbers = this.props.numbers;
        return(
           <ul>
               {numbers.map((number) =>
               <ListItem key={number.toString()}
               value={number}/>
               )}
           </ul>
        )
    }
}

export default NumberList;