import React, { Component } from 'react';

import {
    Row,
    Col,
    Card,
    CardBody,
    CardHeader
} from 'reactstrap'

export default class CategoryDetails extends Component {
  render() {
    return (
        <>
            <Card>                                        
                <CardHeader>Category Information</CardHeader>
                <CardBody>
                    <Row> 
                        <Col md={8}>
                            <p><strong>Name:</strong> {this.props.name}</p>
                            <Row>
                                <Col md={4}>
                                    <p><strong >Category Image:</strong></p> 
                                    <img className="w-100" src={this.props.CategoryImage} alt={this.props.name} />
                                </Col>
                            </Row>                            
                        </Col>
                    </Row>
                </CardBody>
            </Card>
        </>
    );
  }
}
