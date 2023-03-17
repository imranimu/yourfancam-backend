import Page from 'components/Page';
import React from 'react';

import cat01 from 'assets/img/category/01.jpg';
import cat02 from 'assets/img/category/02.jpg';
import cat03 from 'assets/img/category/03.jpg';
import cat04 from 'assets/img/category/04.jpg';
import cat05 from 'assets/img/category/05.jpg';
import cat06 from 'assets/img/category/06.jpg';
import cat07 from 'assets/img/category/07.jpg';
import cat08 from 'assets/img/category/08.jpg'; 

import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
    Table
} from 'reactstrap';

import Pagination from 'components/pagination';


class PackagesPage extends React.Component { 

  constructor(props) {
    super(props); 
    this.state = {   
        CategoryImage: null, 
    };     
  }

  componentDidMount() {        
    document.title = "Packages || Your fan cam"  
  }

  handleCreatePackage(e) { 
    e.preventDefault()
    let name = this.state.name        
    let Price = this.state.Price        
    let description = this.state.description        
    let NumberOfVideos = this.state.NumberOfVideos 

    console.log(name+ ' ' + Price + ' ' + description + ' ' + NumberOfVideos); 

  }

  NameHandler = (event) => {
    this.setState({name: event.target.value});
  }
  PriceHandler = (event) => {
    this.setState({Price: event.target.value});
  }
  DescriptionHandler = (event) => {
    this.setState({description: event.target.value});
  }
  NumberOfVideosHandler = (event) => {
    this.setState({NumberOfVideos: event.target.value});
  } 

  render(){
    return (
      <Page title="Packages" breadcrumbs={[{ name: 'Packages', active: true }]}>
          <Row>
          <Col md={5}>
                <Card>
                  <CardHeader>Create Package</CardHeader>
                  <CardBody>
                      <Form onSubmit={this.handleCreatePackage.bind(this)}>                             
                          
                          <FormGroup>
                              <Label for="Name">Name</Label>                                
                              <Input ref="name" placeholder="Name" onChange={this.NameHandler}/> 
                          </FormGroup>  

                          <FormGroup>
                              <Label for="Price">Price</Label>                                
                              <Input ref="price" placeholder="Price" onChange={this.PriceHandler}/> 
                          </FormGroup>                                                         
                          
                          <FormGroup>
                              <Label for="Description">Description</Label>                                
                              <Input className="CustomTextArea" type="textarea" placeholder="Description" onChange={this.DescriptionHandler}/>
                          </FormGroup> 

                          <FormGroup>
                              <Label for="NumberOfVideos">Number of Videos</Label>                                
                              <Input ref="NumberOfVideos" placeholder="Number Of Videos" onChange={this.NumberOfVideosHandler}/> 
                          </FormGroup>  

                          <Button type="submit" color="primary">Save</Button>        

                      </Form>

                  </CardBody>
                </Card>          
              </Col> 

              <Col md={7}>
                <Card className="mb-3">

                  <CardHeader>Packages</CardHeader>

                  <CardBody className="pb-1">
                    <Table className="table table-striped">
                      <thead>
                          <tr>
                              <th className="text-center" width="30">#</th>                                                 
                              <th>Name</th> 
                              <th>Price</th>
                              <th width="350px">Description</th>
                              <th className="text-center"># Videos</th>
                              <th className="text-center">Action</th>
                          </tr>
                      </thead>                     

                      <tbody>
                        <tr>
                          <td className="text-center" scope="row">1</td> 
                          <td>Package 1</td>
                          <td>$250</td>
                          <td>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.</td>
                          <td className="text-center">10</td>
                          <td className="text-center">
                            <span className="mr-2"><a href="#"><i className="text-primary fa fa-pencil-square-o"></i></a></span>
                            <span className="mr-2"><a href="#"><i className="text-info fa fa-file"></i></a></span>
                            <span><a href="#"><i className="text-danger fa fa-trash-o"></i></a></span>
                          </td>
                        </tr>                         
                        <tr>
                          <td className="text-center" scope="row">2</td> 
                          <td>Package 2</td>
                          <td>$250</td>
                          <td>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.</td>
                          <td className="text-center">10</td>
                          <td className="text-center">
                            <span className="mr-2"><a href="#"><i className="text-primary fa fa-pencil-square-o"></i></a></span>
                            <span className="mr-2"><a href="#"><i className="text-info fa fa-file"></i></a></span>
                            <span><a href="#"><i className="text-danger fa fa-trash-o"></i></a></span>
                          </td>
                        </tr>                         
                        <tr>
                          <td className="text-center" scope="row">3</td> 
                          <td>Package 3</td>
                          <td>$250</td>
                          <td>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.</td>
                          <td className="text-center">10</td>
                          <td className="text-center">
                            <span className="mr-2"><a href="#"><i className="text-primary fa fa-pencil-square-o"></i></a></span>
                            <span className="mr-2"><a href="#"><i className="text-info fa fa-file"></i></a></span>
                            <span><a href="#"><i className="text-danger fa fa-trash-o"></i></a></span>
                          </td>
                        </tr>                         
                        <tr>
                          <td className="text-center" scope="row">4</td> 
                          <td>Package 4</td>
                          <td>$250</td>
                          <td>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.</td>
                          <td className="text-center">10</td>
                          <td className="text-center">
                            <span className="mr-2"><a href="#"><i className="text-primary fa fa-pencil-square-o"></i></a></span>
                            <span className="mr-2"><a href="#"><i className="text-info fa fa-file"></i></a></span>
                            <span><a href="#"><i className="text-danger fa fa-trash-o"></i></a></span>
                          </td>
                        </tr>                         
                        <tr>
                          <td className="text-center" scope="row">5</td> 
                          <td>Package 5</td>
                          <td>$250</td>
                          <td>Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.</td>
                          <td className="text-center">10</td>
                          <td className="text-center">
                            <span className="mr-2"><a href="#"><i className="text-primary fa fa-pencil-square-o"></i></a></span>
                            <span className="mr-2"><a href="#"><i className="text-info fa fa-file"></i></a></span>
                            <span><a href="#"><i className="text-danger fa fa-trash-o"></i></a></span>
                          </td>
                        </tr>                    
                      </tbody>
                    </Table>
                    
                    <Row className="position-relative">
                        <Col md={5}>
                            <div className="dataTables_info">
                                Showing 1 to 5 of 10 entries
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
                                    <li className="paginate_button previous disabled">
                                        <a href="#">Next</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>         
                    </Row>
                  </CardBody> 
                </Card>
                  
              </Col>
          </Row>
      </Page>
    );
  }
};

export default PackagesPage;
