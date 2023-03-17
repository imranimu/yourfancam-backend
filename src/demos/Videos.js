import React, { Component } from 'react';

import ThumImage01 from 'assets/img/products/product_640-1.jpg';
import ThumImage02 from 'assets/img/products/product_640-2.jpg';
import ThumImage03 from 'assets/img/products/product_640-3.jpg';
import ThumImage04 from 'assets/img/products/product_640-4.jpg';
import ThumImage05 from 'assets/img/products/product_640-5.jpg';
import ThumImage06 from 'assets/img/products/product_640-6.jpg';
import ThumImage07 from 'assets/img/products/product_640-7.jpg';


import Pagination from 'components/pagination';

import { 
  Card, 
  CardBody,
  CardHeader,  
  Table, 
  Form,
  FormGroup,
  Col,
  Input,
  Button
} from 'reactstrap';  

export default class Transactions extends Component {
  render() {
    return (
        <Card>            
            <CardHeader>{this.props.Title}</CardHeader>     

            <CardBody className="pb-1">
                <Form>
                    <FormGroup className="mb-0" row>  
                        <Col md={5}>
                            <Input 
                                name="SearchVideo" 
                                placeholder="Search Video"
                                bsSize="sm"
                            />
                        </Col>  
                        <Col md={3}>
                            <Input type="select" name="Status" bsSize="sm">
                                <option value="">Status</option>
                                <option value="Cricket">Pending</option>
                                <option value="Football">Viewed</option>
                                <option value="Hokie Football">Replied</option>
                            </Input>
                        </Col>                                         
                        <Col md={3}>
                            <Input type="select" name="OrderBy" bsSize="sm">
                                <option value="">Order By</option>
                                <option value="Ending Soon">Ending Soon</option>
                                <option value="Date">Date</option>  
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
                            <th>#</th>
                            <th width="120px" className="text-center"><i className="fa fa-video-camera"></i></th>
                            <th>Send To</th>
                            <th>Send By</th> 
                            <th>Status</th>
                            <th>Date</th>                        
                            <th className="text-center">Action</th>
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
                            <td scope="row">2</td>
                            <td className="text-center"><img src={ThumImage02} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Pending</td>
                            <td>10 June 2020</td>
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
                            <td scope="row">3</td>
                            <td className="text-center"><img src={ThumImage03} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>
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
                            <td scope="row">4</td>
                            <td className="text-center"><img src={ThumImage04} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>
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
                            <td scope="row">5</td>
                            <td className="text-center"><img src={ThumImage05} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>
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
                            <td scope="row">6</td>
                            <td className="text-center"><img src={ThumImage06} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>
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
                            <td scope="row">7</td>
                            <td className="text-center"><img src={ThumImage07} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Replied</td>
                            <td>10 June 2020</td>
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
                            <td scope="row">8</td>
                            <td className="text-center"><img src={ThumImage01} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>
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
                            <td scope="row">9</td>
                            <td className="text-center"><img src={ThumImage02} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Replied</td>
                            <td>10 June 2020</td>
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
                            <td scope="row">10</td>
                            <td className="text-center"><img src={ThumImage03} alt="Thum" className="w-100" /></td>
                            <td>Devid Jonson</td>
                            <td>Jone Due</td>        
                            <td>Viewed</td>
                            <td>10 June 2020</td>
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
