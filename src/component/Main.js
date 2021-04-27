
import React from 'react';
import CardColumns from 'react-bootstrap/CardColumns';


import Cards from './Cards';

class Main extends React.Component {
  render() {
    return (
      <CardColumns>
        <Cards />
      </CardColumns>
    );
  }
}
export default Main;
