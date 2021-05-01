

import React from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import SelectedBeast from './component/SelectedBeast';
import data from './sets/data.json';
import OurForm from './component/OurForm';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state={
      element:data,
      show:false,
      newData:data,
      obj:{},

    };
  }
  filterData = (event) => {
    if (this.state.hornsNumb !== 'All') {
      this.setState({
        cornsAnimals: data.filter(animal => animal.horns === Number(this.state.hornsNumb))});
    }
    else{
      this.setState({
        cornsAnimals: data.filter(animal => animal.horns> 0)});
    }
  }

  updateHorns = horns => this.setState({ hornsNumb: horns.target.value });

  filterModal=(e)=>{
    this.setState({
      newData: e
    });
  }

  showElement=(event)=>{
    this.setState({
      show:true,
      obj:event,
    });
    console.log(event);
  }
dontShowElem=()=>{
  this.setState({
    show:false,
  });
}

render() {
  return (
    <div>
      <Header />
      <OurForm data={data} newState={this.filterModal} />

      <Main elementData={this.state.newData} sowModal={this.showElement}  />
      <SelectedBeast show={this.state.show}
        dontShow={this.dontShowElem}
        obj={this.state.obj}/>
      <Footer />
    </div>
  );
}
}

export default App;
