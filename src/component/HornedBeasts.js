import React from 'react';

import Card from 'react-bootstrap/Card';



import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      votes: 0,
      show: false,
    };

  }
  incVote = () => {
    this.setState({ votes: this.state.votes + 1 });
  }
showModal=()=>{
  this.props.sowModal({
    name: this.props.name,
    description: this.props.description,
    imgUrl: this.props.imgUrl
  });
}

render() {



  return (
    <div>
      <Card onClick={this.showModal}>

        <Card.Img variant="top" src={this.props.imgUrl} alt={`${this.props.name}`} title={`${this.props.name}`} />

        <Card.Body>
          <Card.Title >{this.props.name}</Card.Title>
          <Card.Text>
            {this.props.description}
          </Card.Text>
          <Card.Text>
            {this.state.votes} 🤩</Card.Text>
          <Button onClick={this.incVote}>like</Button>
        </Card.Body>
      </Card >

    </div>
  );
}
}
export default HornedBeasts;
