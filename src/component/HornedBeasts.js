import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';



import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);

        this.state={
            votes:0,
        }

    }
    incVote=()=>{
        this.setState({votes:this.state.votes+1});
    }
  render() {
      

    
    return (
<Card  >
  <Card.Img variant="top" src={this.props.imgUrl}  alt={`${this.props.name}`} title={`${this.props.name}`} />
  <Card.Body>
    <Card.Title >{this.props.name}</Card.Title>
    <Card.Text>
    {this.props.description}
    </Card.Text>
    <Card.Text>
    {this.state.votes} 🤩
    </Card.Text>
    <Button onClick={this.incVote}>like</Button>
  </Card.Body>
  </Card >   
    )
};
}
export default HornedBeasts;