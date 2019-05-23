import React ,{ Component} from 'react';
import Continer from "react-bootstrap/Container"
import './App.css';



import Subtotal from "./components/subtotal/Subtotal"
import PickupSavings from "./components/pickupsavings/PickupSavings"
import TaxesFees from "./components/taxesfees/TaxesFees"
import EstimatedTotal from "./components/estimatedtotal/EstimatedTotal"

import ItemDetails from "./components/itemdetails/ItemDetails"
import PromoCodeDiscount from "./components/promocode/PromoCodeDiscount"


import {connect} from "react-redux";
import {handleChange} from "./store/actions/PromoCodeActions"

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      total:265.45,
      pickupsavings:-6.45,
      taxes:0,
      estimatedtotal:0,
      disablePromoButton:false
    }
  }

  componentDidMount(){
    this.setState({
      taxes:(this.state.total + this.state.pickupsavings)*0.18 // sales tax of 18% of the total
      },
      function(){
        this.setState({
          estimatedtotal:this.state.total+this.state.pickupsavings+this.state.taxes
        })
      })

    
  }

  giveDiscountHandler=()=>{
    if(this.props.promoCode==="DISCOUNT"){
      this.setState({
        estimatedtotal:this.state.estimatedtotal*0.4
      },
      function(){
        this.setState({
          disablePromoButton:true
        })
      }
      )
    }
  }
  render(){
    return (
      <div className="container">
  
        <Continer className="purchase-card">
          <hr/>
          <Subtotal price={this.state.total.toFixed(2)}/>
          <PickupSavings price={this.state.pickupsavings}/>
          <TaxesFees taxes={this.state.taxes.toFixed(2)}/>
          <hr/>
          <EstimatedTotal total={this.state.estimatedtotal.toFixed(2)}/>
          <ItemDetails price={this.state.estimatedtotal.toFixed(2)}/>

          <hr/>
          <PromoCodeDiscount 
              giveDiscount={()=>this.giveDiscountHandler()}
              isDisabled={this.state.disablePromoButton
              }
          />
        </Continer>
      </div>
    );
  }
  
}

const mapStateToProps=state=>({
  promoCode:state.promoCode.value
})
export default connect(mapStateToProps,{handleChange})(App);
