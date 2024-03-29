import React, { Component } from 'react'
import {Row,Col} from "react-bootstrap"

export default class EstimatedTotal extends Component {
  render() {
    return (
      <Row>
          <Col md={6}> <h3>Est. Total</h3></Col>
          <Col md={6}> <h3>{this.props.currency} {this.props.total}</h3></Col>
      </Row>
    )
  }
}
