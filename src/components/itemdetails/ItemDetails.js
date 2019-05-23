import React, { Component } from 'react'
import {Button,Collapse,Media,Row,Col} from "react-bootstrap";


export default class ItemDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            open:false
        }
    }
    render() {

        return (
            <div>
                <Button
                        className="item-details-button"
                        variant="link"
                        onClick={()=>this.setState({open:!this.state.open})}
                >
                    {this.state.open===false? "See":"Hide"} item details
                    {this.state.open===false ?"+":"-"}
                </Button>
                <br/>
                <Collapse in={this.state.open}>
                    
                    <div className="card card-body">
                        
                            <Media>
                                <Media className="Left">
                                    <img
                                        width={100}
                                        height={100}
                                        alt="thumbnail"
                                        src="https://i5.walmartimages.com/asr/60d8f806-9a49-4e88-bd5d-ef6b8a99f70b_3.33abadc49170f199f347390fae6e0524.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                                    />
                                </Media>
                                <Media.Body>
                                    <p>Safety 1st Grow and Go Sprint 3-in-1 Convertible Car Seat, Seafarer</p>

                                    <Row className="show-grid">
                                        <Col md={6}>
                                            <strong> {this.props.currency} {this.props.price}</strong>
                                            <br/>
                                            <strong className="price-strike">
                                            {this.props.currency} {this.props.price}
                                            </strong> 
                                            
                                        </Col>
                                        <Col md={6}> Qty: 1</Col>
                                    </Row>
                                </Media.Body>
                            </Media>
                        
                    </div>
                </Collapse>

            </div>
        )
    }
}
