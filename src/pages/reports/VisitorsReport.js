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
} from 'reactstrap';

import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';

import { 
  chartjs
} from 'demos/dashboardPage';  


class VisitorsPage extends React.Component { 

  componentDidMount() {        
      document.title = "Visitors || Your fan cam"  
  }

  handleFilterProduct(e) { 
    e.preventDefault()
  
  }

  render(){
    
    return (
      <Page title="Visitors Report" breadcrumbs={[{ name: 'Visitors Report', active: true }]}>
          <Row>
              <Col md={4}>
                <Card>
                  <CardHeader><i className="fa fa-bar-chart mr-2"></i> Visitors List</CardHeader>

                  <CardBody>

                    <Form onSubmit={this.handleFilterProduct.bind(this)}>

                      <FormGroup>
                          <Label for="ReportType">Report Type</Label>
                          <Input type="select" placeholder="Product Title">
                            <option value="Product By Quantity">Product By Quantity</option>
                            <option value="Product By Revenue">Product By Revenue</option>
                            <option value="Product By Seller">Product By Seller</option>
                            <option value="Product By Commission">Product By Commission</option>
                          </Input>
                      </FormGroup>

                      <FormGroup>
                        <Label for="StartDate">Start Date</Label>
                        <Input
                          type="date"
                          name="StartDate"
                          id="StartDate"
                          placeholder="date placeholder"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="EndtDate">Endt Date</Label>
                        <Input
                          type="date"
                          name="EndtDate"
                          id="EndtDate"
                          placeholder="date placeholder"
                        />
                      </FormGroup>

                      <FormGroup>
                          <Label for="Product">Product</Label>
                          <Input type="select" placeholder="Product Title">
                            <option value="All">All Products</option>
                            <option value="Vivo Y50 8GB/128GB">Vivo Y50 8GB/128GB</option>
                            <option value="DMX2 Plus Smart Mobile">DMX2 Plus Smart Mobile</option>
                            <option value="Walton Primo H9 (3GB/32GB)">Walton Primo H9 (3GB/32GB)</option>
                            <option value="Apple iPhone 6s plus">Apple iPhone 6s plus</option>
                            <option value="Apple iPhone X">Apple iPhone X</option>
                          </Input>
                      </FormGroup>

                      <FormGroup>
                          <Label for="GroupBy">Group By</Label>
                          <Input type="select" name="GroupBy" placeholder="Group By">
                            <option value="Days">Days</option>
                            <option value="Week">Week</option>
                            <option value="Month">Month</option>
                            <option value="Year">Year</option>                            
                          </Input>
                      </FormGroup>

                      <FormGroup>
                          <Label for="OrderStatus">Order Status</Label>
                          <Input type="select" placeholder="All Statuses">
                            <option value="">All Statuses</option>
                            <option value="Completed">Completed</option>
                            <option value="Pending">Pending</option> 
                          </Input>
                      </FormGroup>

                      <FormGroup>
                          <Label for="Seller">Seller</Label>
                          <Input type="select" placeholder="All Sellers">
                            <option value="">All Sellers</option>
                            <option value="Product By Revenue">Top Seller</option>
                            <option value="Product By Seller">Lowest Seller</option> 
                          </Input>
                      </FormGroup>

                      <FormGroup row className="mt-3">                                 
                        <Col md={6}>                                                       
                          <Button color="danger">Clear</Button>
                        </Col>
                        <Col md={6} className="text-right">
                          <Button color="info"><i className="fa fa-search"></i> Search</Button>
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
                      data={chartjs.VisitorsReports.data} 
                      options={chartjs.pie.options} 
                    />
                  </CardBody>                   
                </Card>
              </Col>

              <Col md={12}>                  
                <Table className="table-bordered">
                  <thead>
                    <tr>
                        <th>Date</th>
                        <th className="text-right">No. of Orders</th>
                        <th className="text-right">No. of Products</th>
                        <th className="text-right">Total Revenue</th> 
                        <th className="text-right">Seller Revenue</th> 
                        <th className="text-right">Commission</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>2020-08-11</td>
                          <td className="text-right">10</td>
                          <td className="text-right">20</td> 
                          <td className="text-right">$2,800.00</td>
                          <td className="text-right">$2,030.00</td>
                          <td className="text-right">$2,200.00</td>
                      </tr>                                                
                      <tr>
                          <td>2020-08-11</td>
                          <td className="text-right">10</td>
                          <td className="text-right">20</td> 
                          <td className="text-right">$2,800.00</td>
                          <td className="text-right">$2,030.00</td>
                          <td className="text-right">$2,200.00</td>
                      </tr>                                                
                      <tr>
                          <td>2020-08-11</td>
                          <td className="text-right">10</td>
                          <td className="text-right">20</td> 
                          <td className="text-right">$2,800.00</td>
                          <td className="text-right">$2,030.00</td>
                          <td className="text-right">$2,200.00</td>
                      </tr>                                                
                      <tr>
                          <td>2020-08-11</td>
                          <td className="text-right">10</td>
                          <td className="text-right">20</td> 
                          <td className="text-right">$2,800.00</td>
                          <td className="text-right">$2,030.00</td>
                          <td className="text-right">$2,200.00</td>
                      </tr>                                                
                      <tr>
                          <td>2020-08-11</td>
                          <td className="text-right">10</td>
                          <td className="text-right">20</td> 
                          <td className="text-right">$2,800.00</td>
                          <td className="text-right">$2,030.00</td>
                          <td className="text-right">$2,200.00</td>
                      </tr>                                                
                      <tr>
                          <td>2020-08-11</td>
                          <td className="text-right">10</td>
                          <td className="text-right">20</td> 
                          <td className="text-right">$2,800.00</td>
                          <td className="text-right">$2,030.00</td>
                          <td className="text-right">$2,200.00</td>
                      </tr>                                                
                                                                       
                  </tbody>
                </Table>   
              </Col>               
              
          </Row>
      </Page>
    );
  }
};

export default VisitorsPage;
