import Page from 'components/Page';
import React from 'react';
import { NavLink , Link} from 'react-router-dom'; 

import ThumImage01 from 'assets/img/products/product_640-1.jpg';
import ThumImage02 from 'assets/img/products/product_640-2.jpg';
import ThumImage03 from 'assets/img/products/product_640-3.jpg';
import ThumImage04 from 'assets/img/products/product_640-4.jpg';
import ThumImage05 from 'assets/img/products/product_640-5.jpg';

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

import { Pie } from 'react-chartjs-2';

import { 
  chartjs
} from 'demos/dashboardPage';  


class VideosPage extends React.Component { 

  componentDidMount() {        
      document.title = "Videos Report || Your fan cam"  
  }

  handleFilterProduct(e) { 
    e.preventDefault()
  
  }

  render(){
    
    return (
      <Page title="Videos Report" breadcrumbs={[{ name: 'Videos Report', active: true }]}>
          <Row>
              <Col md={4}>
                <Card>                  

                  <CardHeader><i className="fa fa-bar-chart mr-2"></i> Videos List</CardHeader>                  

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
                          <option>Pending</option>
                          <option>Viewed</option>
                          <option>Replied</option>                          
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
                      data={chartjs.VideoReports.data} 
                      options={chartjs.pie.options} 
                    />
                  </CardBody>                   
                </Card>
              </Col>

              <Col md={12}>                  
                <Table className="table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th width="120px" className="text-center"><i className="fa fa-video-camera"></i></th>
                            <th>Send To</th>
                            <th>Send By</th> 
                            <th>Status</th>
                            <th>Date</th>                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">1</td>
                            <td className="text-center"><img src={ThumImage01} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>                              
                        </tr>                                         
                        <tr>
                            <td scope="row">2</td>
                            <td className="text-center"><img src={ThumImage02} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Pending</td>
                            <td>10 June 2020</td>                              
                        </tr>                                         
                        <tr>
                            <td scope="row">3</td>
                            <td className="text-center"><img src={ThumImage03} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>                              
                        </tr>                                         
                        <tr>
                            <td scope="row">4</td>
                            <td className="text-center"><img src={ThumImage04} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>                              
                        </tr>                                         
                        <tr>
                            <td scope="row">5</td>
                            <td className="text-center"><img src={ThumImage05} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>                              
                        </tr>                                  
                    </tbody>
                </Table>    
              </Col>     
          </Row>
      </Page>
    );
  }
};

export default VideosPage;
