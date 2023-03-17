import React, { Component } from 'react';
import { 
  Card, 
  CardHeader,
  CardBody,  
  Table, 
  Form,
  FormGroup,
  Col,
  Input,
  Button
} from 'reactstrap';  

import Pagination from 'components/pagination';

export default class Fans extends Component {

    render() {   
        return (
            <Card>
                <CardHeader>{this.props.Title}</CardHeader>      

                <CardBody className="pb-1">
                    <Form>
                        <FormGroup className="mb-0" row>  
                            <Col md={5}>
                                <Input 
                                    name="SearchFans" 
                                    placeholder="Search Fans"
                                    bsSize="sm"
                                />
                            </Col>  
                            <Col md={2}>
                                <Input type="select" name="Category" bsSize="sm">
                                    <option value="">Category</option>
                                    <option value="Cricket">Cricket</option>
                                    <option value="Football">Football</option>
                                    <option value="Hokie Football">Hokie Football</option>
                                </Input>
                            </Col>                                         
                            <Col md={2}>
                                <Input type="select" name="Status" bsSize="sm">
                                    <option value="">Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option> 
                                    <option value="Blocked">Blocked</option>  
                                </Input>
                            </Col>                                         
                            <Col md={2}>
                                <Input type="select" name="OrderBy" bsSize="sm">
                                    <option value="">Order By</option>
                                    <option value="Alphabetic">Alphabetic</option> 
                                    <option value="Membership Date">Membership Date</option> 
                                    <option value="Recent Activity">Recent Activity</option> 
                                    <option value="Number of Replies">Number of Replies</option>  
                                </Input>
                            </Col>  
                            <Col md={1}><Button size="sm" block>Filter</Button></Col>
                        </FormGroup> 
                    </Form>
                </CardBody>

                <CardBody>
                    <Table className="table-striped">
                        <thead>
                            <tr>
                                <th className="text-center">#</th>
                                <th>Name</th>                                
                                <th className="text-center">Status</th>
                                <th className="text-center"># Videos</th> 
                                <th className="text-center">Received Replies</th>
                                <th className="text-center">Last Communication</th>
                                <th className="text-center">Member Since</th>
                                <th className="text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="text-center" scope="row">1</td>
                                <td>Devid Jonson</td> 
                                <td className="text-center">Active</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Blocked</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Inactive</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Active</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Blocked</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Active</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Active</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Active</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Blocked</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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
                                <td>Devid Jonson</td> 
                                <td className="text-center">Inactive</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">55</td>
                                <td className="text-center">03</td>
                                <td className="text-center">10 May 2018</td>
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

                    <Pagination/>
                </CardBody>
            </Card>
        );
    }
}
