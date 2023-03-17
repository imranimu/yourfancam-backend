import React, { Component } from 'react';

import { NavLink , Link} from 'react-router-dom'; 

import { 
  Card, 
  CardHeader,  
  Table, 
  NavLink as BSNavLink, CardBody
} from 'reactstrap';  


export default class Transactions extends Component {
  render() {
    return (
      <Card>           
        <CardHeader>                                
            <div className="CardHeaderLeft">Recent Transactions</div>                               
            <div className="CardHeaderRight"> 
                <BSNavLink                                        
                    className="btn btn-primary btn-sm"
                    tag={NavLink}
                    to="/report/transaction"
                    exact="false"
                >View Details</BSNavLink>                    
            </div>                                                             
        </CardHeader>    
        <CardBody>    
            <Table className="table-striped">
                <thead>
                    <tr> 
                        <th>Transaction ID</th>
                        <th>Status</th>
                        <th>Amount</th>
                        <th>Date</th> 
                    </tr>
                </thead>
                <tbody>
                    <tr> 
                        <td>#00011</td>
                        <td>Credited</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00012</td>
                        <td>Pending</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00013</td>
                        <td>Credited</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00014</td>
                        <td>Refunded</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00015</td>
                        <td>Credited</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00016</td>
                        <td>Credited</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00017</td>
                        <td>Credited</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00018</td>
                        <td>Pending</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00019</td>
                        <td>Pending</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                    <tr> 
                        <td>#00020</td>
                        <td>Pending</td>                       
                        <td>$250</td>                       
                        <td>10 June, 2020</td>   
                    </tr>                                              
                </tbody>
            </Table> 
        </CardBody>
    </Card>
    );
  }
}
