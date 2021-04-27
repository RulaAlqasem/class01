import React from 'react';

class HornedBeasts extends React.Component{
  render() {

    
    return (
        <div>
            <h1>{this.props.name}</h1>
               <img src={this.props.imgUrl} alt={`${this.props.name}`}  title={`${this.props.name}`}/>
               <h3>{this.props.description}</h3>
        </div>
    )
};
}
export default HornedBeasts;