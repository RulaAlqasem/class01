/* eslint-disable no-unused-vars */

import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from '../sets/data.json';
import CardColumns from 'react-bootstrap/CardColumns'
import CardGroup from 'react-bootstrap/CardGroup'

class Main extends React.Component {

    constructor(props){
super(props);
this.state={
elementData:data
};

    }
    render() {

        return (
            
            this.state.elementData.map( element=>{

            return<CardGroup>
                <HornedBeasts name={element.title}
                 description={element.description} 
                 imgUrl={element.image_url}
                  />
           </CardGroup>
            }
        )
            
        )
    }
}
export default Main;