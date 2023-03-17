import React, { Component } from 'react';

import { 
    Col, 
    Row,   
  } from 'reactstrap';  

export default class Pagination extends Component {
  render() {
    return (
      <>
        <Row className="position-relative">
            <Col md={5}>
                <div className="dataTables_info">
                    Showing 1 to 10 of 50 entries
                </div>
            </Col>
            <Col md={7} > 
                <div className="dataTables_paginate text-right">
                    <ul className="pagination m-b-n m-t-n">
                        <li className="paginate_button previous disabled">
                            <a href="#">Previous</a>
                        </li>
                        <li className="active">
                            <a href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li className="paginate_button previous">
                            <a href="#">Next</a>
                        </li>
                    </ul>
                </div>
            </Col>         
        </Row>
      </>
    );
  }
}
