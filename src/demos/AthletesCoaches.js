import React, { Component } from 'react';
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

export default class AthletesCoaches extends Component {

    render() {   
        return (
            <Card>
                <CardHeader>{this.props.Title}</CardHeader>      

                <CardBody className="pb-1">
                    <Form>
                        <FormGroup className="mb-0" row>  
                            <Col md={5}>
                                <Input 
                                    name="SearchAthletesCoaches" 
                                    placeholder="Search Athletes &amp; Coaches"
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
                                <th className="text-center"><i className="fa fa-image"></i></th>
                                <th>Name</th>
                                <th className="text-center">Category</th>
                                <th className="text-center">Status</th>
                                <th className="text-center"># Replies</th> 
                                <th className="text-center">Member Since</th>
                                <th className="text-center">Total Revenue</th>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
                                <td className="text-center">$80</td>
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
