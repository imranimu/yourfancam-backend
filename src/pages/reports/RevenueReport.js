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


class RevenuePage extends React.Component { 

  componentDidMount() {        
      document.title = "Revenue Report || Your fan cam"  
  }

  handleFilterProduct(e) { 
    e.preventDefault()
  
  }

  render(){
    
    return (
      <Page title="Revenue Report" breadcrumbs={[{ name: 'Revenue Report', active: true }]}>
          <Row>
              <Col md={4}>
                <Card>
                   

                  <CardHeader><i className="fa fa-bar-chart mr-2"></i> Products List</CardHeader>                  

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

              <Col lg="6" md="12" sm="12" xs="12">
                <Card>
                   
                  <CardBody>

                    <Pie 
                      data={chartjs.RevenueReports.data} 
                      options={chartjs.pie.options} 
                    />

                  </CardBody>                   
                </Card>
              </Col>

              <Col md={12}>                  
                <Table className="table-striped">
                  <thead>
                    <tr>
                        <th>Date</th>
                        <th className="text-center">Transaction ID</th>
                        <th className="text-center">Athletes</th>
                        <th className="text-center">Amount</th> 
                        <th className="text-center">Revenue</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>10 June 2020</td>
                          <td className="text-center">#000010</td>
                          <td className="text-center">Devid Jonson</td> 
                          <td className="text-center">$2000.00</td>
                          <td className="text-center">$200.00</td>
                      </tr>                                                
                      <tr>
                          <td>12 June 2020</td>
                          <td className="text-center">#000011</td>
                          <td className="text-center">Devid Jonson</td> 
                          <td className="text-center">$2000.00</td>
                          <td className="text-center">$200.00</td>
                      </tr>                                                
                      <tr>
                          <td>14 June 2020</td>
                          <td className="text-center">#000012</td>
                          <td className="text-center">Devid Jonson</td> 
                          <td className="text-center">$2000.00</td>
                          <td className="text-center">$200.00</td>
                      </tr>                                                
                      <tr>
                          <td>15 June 2020</td>
                          <td className="text-center">#000013</td>
                          <td className="text-center">Devid Jonson</td> 
                          <td className="text-center">$2000.00</td>
                          <td className="text-center">$200.00</td>
                      </tr>                                                
                      <tr>
                          <td>15 June 2020</td>
                          <td className="text-center">#000014</td>
                          <td className="text-center">Devid Jonson</td> 
                          <td className="text-center">$2000.00</td>
                          <td className="text-center">$200.00</td>
                      </tr>                                                
                      <tr>
                          <td>17 June 2020</td>
                          <td className="text-center">#000015</td>
                          <td className="text-center">Devid Jonson</td> 
                          <td className="text-center">$2000.00</td>
                          <td className="text-center">$200.00</td>
                      </tr>                                                
                      <tr>
                          <td>20 June 2020</td>
                          <td className="text-center">#000016</td>
                          <td className="text-center">Devid Jonson</td> 
                          <td className="text-center">$2000.00</td>
                          <td className="text-center">$200.00</td>
                      </tr>                                           
                  </tbody>
                </Table>   
              </Col>   
          </Row>
      </Page>
    );
  }
};

export default RevenuePage;
