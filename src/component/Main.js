/* eslint-disable no-unused-vars */

import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from '../sets/data.json';
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'

import Cards from './Cards'

class Main extends React.Component {
    render() {
     return (
            <CardColumns>
                <Cards/>
            </CardColumns>   
        )  
    }
}
export default Main;