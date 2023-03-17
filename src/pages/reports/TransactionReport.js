import Page from 'components/Page';
import React from 'react';
import { NavLink , Link} from 'react-router-dom'; 
import {
  Card, 
  Table, 
  CardHeader, 
  Button,
  Col, 
  Row,
  NavLink as BSNavLink, 
  CardBody,   
  Form, 
  FormGroup,
  FormText, 
  Input, 
  Label, 
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';

import { 
  chartjs
} from 'demos/dashboardPage';  


class TransactionReports extends React.Component { 

  componentDidMount() {        
      document.title = "Transaction Report || Your fan cam"  
  }

  handleFilterProduct(e) { 
    e.preventDefault()
  
  }

  render(){
    
    return (
      <Page title="Transaction Report" breadcrumbs={[{ name: 'Transaction Report', active: true }]}>
          <Row>
              <Col md={4}>
                <Card> 

                  <CardHeader><i className="fa fa-bar-chart mr-2"></i> Transaction List</CardHeader>                  

                  <CardBody>

                  <Form onSubmit={this.handleFilterProduct.bind(this)}>
                      <FormGroup>
                          <Label for="Bycategory">By Category</Label>
                          <Input type="select" placeholder="By category">
                            <option>By category</option>
                            <option>Cricket</option>
                            <option>Football</option>
                            <option>Baseball</option>
                            <option>Hokie Football</option>
                            <option>Boxing</option>
                            <option>Tennis</option>
                          </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="ByMentors">By Athletes</Label>
                        <Input type="select" placeholder="By Athletes">
                            <option value="">By Athletes</option>
                            <option>Jone Due</option>
                            <option>Devid Jonson</option>
                            <option>Frank Luich</option>
                            <option>Harry Pitter</option>
                            <option>Shane Watson</option>
                            <option>Williamson</option>
                          </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label for="ByStatus">By Status</Label>
                        <Input type="select" placeholder="By Status">
                          <option value="">By Status</option>
                          <option>Credited</option>
                          <option>Pending</option>
                          <option>Refunded</option>                          
                        </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="DateTo">Date To</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">To</InputGroupAddon>
                          <Input
                            type="date"
                            name="DateTo" 
                            placeholder="To"
                          />
                        </InputGroup>
                      </FormGroup>

                      <FormGroup>
                        <Label for="DateFrom">Date From</Label>
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">From</InputGroupAddon>
                          <Input
                            type="date"
                            name="DateFrom" 
                            placeholder="From"
                          />
                        </InputGroup>
                      </FormGroup>                       

                      <FormGroup row className="mt-4 mb-0">                                 
                        <Col md={6}>                                                       
                          <Button color="danger">Clear</Button>
                        </Col>
                        <Col md={6} className="text-right">
                          <Button color="primary"><i className="fa fa-search"></i> Search</Button>
                        </Col>
                      </FormGroup>                      
                    </Form>                     
                  </CardBody>
                </Card>  
              </Col>

              <Col lg="8" md="12" sm="12" xs="12">
                <Card>
                   
                  <CardBody>

                    <Pie 
                      data={chartjs.TransactionReports.data} 
                      options={chartjs.pie.options} 
                    />

                  </CardBody>                   
                </Card>
              </Col>

              <Col md={12}>                  
                <Table className="table-striped">
                  <thead>
                    <tr>
                        <th className="text-center">#</th>
                        <th>Athletes</th>
                        <th>Fans</th>
                        <th className="text-center">Status</th>
                        <th className="text-right">Amount</th>  
                        <th className="text-right">Commission</th>  
                        <th className="text-right">Date</th>  
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="text-center">1</td>
                          <td>Jone Larey</td>
                          <td>Devid Jonson</td>
                          <td className="text-center">Credited</td>
                          <td className="text-right">$250</td> 
                          <td className="text-right">$20</td> 
                          <td className="text-right">2020-08-15</td> 
                      </tr>                                           
                      <tr>
                          <td className="text-center">2</td>
                          <td>Jone Larey</td>
                          <td>Devid Jonson</td>
                          <td className="text-center">Pending</td>
                          <td className="text-right">$250</td> 
                          <td className="text-right">$20</td> 
                          <td className="text-right">2020-08-15</td> 
                      </tr>                                           
                      <tr>
                          <td className="text-center">3</td>
                          <td>Jone Larey</td>
                          <td>Devid Jonson</td>
                          <td className="text-center">Refunded</td>
                          <td className="text-right">$250</td> 
                          <td className="text-right">$20</td> 
                          <td className="text-right">2020-08-15</td> 
                      </tr>                                           
                      <tr>
                          <td className="text-center">4</td>
                          <td>Jone Larey</td>
                          <td>Devid Jonson</td>
                          <td className="text-center">Credited</td>
                          <td className="text-right">$250</td> 
                          <td className="text-right">$20</td> 
                          <td className="text-right">2020-08-15</td> 
                      </tr>                                           
                      <tr>
                          <td className="text-center">5</td>
                          <td>Jone Larey</td>
                          <td>Devid Jonson</td>
                          <td className="text-center">Pending</td>
                          <td className="text-right">$250</td> 
                          <td className="text-right">$20</td> 
                          <td className="text-right">2020-08-15</td> 
                      </tr>                                       
                  </tbody>
                </Table>   
              </Col>                  
              
          </Row>
      </Page>
    );
  }
};

export default TransactionReports;
