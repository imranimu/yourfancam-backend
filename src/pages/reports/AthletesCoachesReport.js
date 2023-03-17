import Page from 'components/Page';
import React from 'react';
import { NavLink , Link} from 'react-router-dom'; 

import User01 from 'assets/img/users/100_11.jpg';
import User02 from 'assets/img/users/100_7.jpg';
import User03 from 'assets/img/users/user5.jpg';
import User04 from 'assets/img/users/300_10.jpg';
import User05 from 'assets/img/users/100_3.jpg';
import User06 from 'assets/img/users/user4.jpg';
import User07 from 'assets/img/users/100_5.jpg';
import User08 from 'assets/img/users/100_1.jpg';
import User09 from 'assets/img/users/100_14.jpg';
import User10 from 'assets/img/users/300_8.jpg';

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
  InputGroup,
  InputGroupAddon,
  FormText, 
  Input, 
  Label, 
} from 'reactstrap';

import { Bar, Line, Doughnut, Pie } from 'react-chartjs-2';

import { 
  chartjs
} from 'demos/dashboardPage';  


class AthletesCoaches extends React.Component { 

  componentDidMount() {        
      document.title = "Athletes Reports || Your fan cam"  
  }

  handleFilterProduct(e) { 
    e.preventDefault()
  
  }

  render(){
    
    return (
      <Page title="Athletes Report" breadcrumbs={[{ name: 'Athletes Report', active: true }]}>
          <Row>
              <Col md={4}>
                <Card>                  

                  <CardHeader><i className="fa fa-bar-chart mr-2"></i> Athletes List</CardHeader>                  

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
                          <Label for="ByStatus">By Status</Label>
                          <Input type="select" placeholder="By Status">
                            <option>By Status</option>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option> 
                            <option value="Blocked">Blocked</option>
                          </Input>
                      </FormGroup>                                            

                      <FormGroup row className="mt-4 mb-0">                                 
                        <Col md={6}>                                                       
                          <Button color="danger">Clear</Button>
                        </Col>
                        <Col md={6} className="text-right">
                          <Button color="primary"><i className="fa fa-search"></i> Filter</Button>
                        </Col>
                      </FormGroup>
                      
                    </Form>
                    
                  </CardBody>
                </Card>  
              </Col>

              <Col lg="5" md="12" sm="12" xs="12">
                <Card>
                   
                  <CardBody>

                  <Pie 
                      data={chartjs.MentorReports.data} 
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
                          <th className="text-center"><i className="fa fa-image"></i></th>
                          <th>Name</th>
                          <th className="text-center">Category</th>
                          <th className="text-center">Status</th>
                          <th className="text-center"># Replies</th> 
                          <th className="text-center">Member Since</th>
                          <th className="text-center">Action</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td className="text-center" scope="row">1</td>
                          <td className="text-center"><img src={User01} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Current Playing</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">2</td>
                          <td className="text-center"><img src={User10} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Retired</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">3</td>
                          <td className="text-center"><img src={User03} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Current Playing</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">4</td>
                          <td className="text-center"><img src={User04} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Current Playing</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">5</td>
                          <td className="text-center"><img src={User05} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Current Playing</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">6</td>
                          <td className="text-center"><img src={User06} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Current Playing</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">7</td>
                          <td className="text-center"><img src={User07} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Current Playing</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">8</td>
                          <td className="text-center"><img src={User08} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Current Playing</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">9</td>
                          <td className="text-center"><img src={User09} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Retired</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                      <tr>
                          <td className="text-center" scope="row">10</td>
                          <td className="text-center"><img src={User02} width="60"/></td>
                          <td>Jone Larey</td>
                          <td className="text-center">Handball</td>
                          <td className="text-center">Current Playing</td> 
                          <td className="text-center">10</td>
                          <td className="text-center">10 May 2015</td>
                          <td className="text-center">
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-primary fa fa-pencil-square-o"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                  <i className="text-info fa fa-file"></i>
                                  </a>
                              </span>
                              <span className="mr-2">
                                  <a href="#">
                                      <i className="text-danger fa fa-ban"></i>
                                  </a>
                              </span>
                              <span>
                                  <a href="#">
                                      <i className="text-danger fa fa-trash-o"></i>
                                  </a>
                              </span>
                          </td>  
                      </tr>                                             
                  </tbody>
              </Table>    
              </Col>  
          </Row>
      </Page>
    );
  }
};

export default AthletesCoaches;
