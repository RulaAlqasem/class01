
import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';
import HornedBeasts from './HornedBeasts';



class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      elementData:this.props.data
    };

  }
  render() {
    let arraElment =this.state.elementData.map(element => {
      return (
        <HornedBeasts name={element.title}
          description={element.description}
          imgUrl={element.image_url}
          sowModal={this.props.sowModal}
        />
      );

    });
    return ( <CardColumns> {arraElment}</CardColumns>);


  }
}

export default Main;
