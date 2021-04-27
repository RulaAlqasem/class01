import React from 'react';
import HornedBeasts from './HornedBeasts';
import data from '../sets/data.json';


class Cards extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      elementData: data
    };

  }
  render() {

    return (

      this.state.elementData.map(element => {

        return (

          <HornedBeasts name={element.title}
            description={element.description}
            imgUrl={element.image_url}
          />
        );

      }

      )
    );
  }
}

export default Cards;
