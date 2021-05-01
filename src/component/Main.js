
import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';



class Main extends React.Component {




  render() {

    return ( <CardColumns> { this.props.elementData.map(element => {
      return (
        <HornedBeasts name={element.title}
          description={element.description}
          imgUrl={element.image_url}
          sowModal={this.props.sowModal}
        />
      );

    })}</CardColumns>);


  }
}

export default Main;
