import React from 'react';

import Form from 'react-bootstrap/Form';


class OurForm extends React.Component{

  filterChanged=(event)=>{
    event.preventDefault();
    let filteredValue=Number(event.target.value);
    if(filteredValue>=1){
      let newCards=this.props.data.filter(element=>{
        return(Number(element.horns)===filteredValue);
      }
      );

      this.props.newState(newCards);
    }
    else{
      this.props.newState(this.props.data);
    }
  }
  render(){


    return(
      <Form >
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Example select</Form.Label>
          <Form.Control as="select" onClick={this.filterChanged}>
            <option value='-1'>All</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='100'>100</option>

          </Form.Control>
        </Form.Group>
      </Form>);
  }
}

export default OurForm;
