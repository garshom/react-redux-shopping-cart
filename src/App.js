import React ,{ Component} from 'react';
import Continer from "react-bootstrap/Container"
import './App.css';

import Subtotal from "./components/subtotal/Subtotal"
import PickupSavings from "./components/pickupsavings/PickupSavings"
import TaxesFees from "./components/taxesfees/TaxesFees"
import EstimatedTotal from "./components/estimatedtotal/EstimatedTotal"

import ItemDetails from "./components/itemdetails/ItemDetails"

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      total:100,
      pickupsavings:-3.85,
      taxes:0,
      estimatedtotal:0
    }
  }

  render(){
    return (
      <div className="container">
  
        <Continer className="purchase-card">
          <Subtotal price={this.state.total.toFixed(2)}/>
          <PickupSavings price={this.state.pickupsavings}/>
          <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
          <hr/>
          <EstimatedTotal total={this.state.estimatedtotal.toFixed(2)}/>
          <ItemDetails price={this.state.estimatedtotal.toFixed(2)}/>

          <hr/>
        </Continer>
      </div>
    );
  }
  
}

export default App;
