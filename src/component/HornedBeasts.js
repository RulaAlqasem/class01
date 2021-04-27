import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal'


import Button from 'react-bootstrap/Button';

class HornedBeasts extends React.Component{
    constructor(props){
        super(props);

        this.state={
            votes:0,
            show:false,
        }

    }
    incVote=()=>{
        this.setState({votes:this.state.votes+1});
    }
    showModal(){
      this.setState({show:true})
    }
    closeModal(){
      this.setState({show:false})
    }
  render() {
      

    
    return (
      <div>
<Card onClick={()=>{this.showModal()}} >

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
  <Modal
        show={this.state.show}
      >
        <Modal.Header closeButton onClick={()=>{this.closeModal()}}>
          <Modal.Title id="example-custom-modal-styling-title">
          Horrned Beast
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Card  >

<Card.Img variant="top" src={this.props.imgUrl}  alt={`${this.props.name}`} title={`${this.props.name}`} />

<Card.Body>
  <Card.Title >{this.props.name}</Card.Title>
  <Card.Text>
  {this.props.description}
  </Card.Text>
</Card.Body>
</Card > 
        </Modal.Body>
      </Modal>
  </div>  
    )
};
}
export default HornedBeasts;