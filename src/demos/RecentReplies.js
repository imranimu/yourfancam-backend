import React, { Component } from 'react';

import user1Image from 'assets/img/users/100_7.jpg';
import user2Image from 'assets/img/users/100_8.jpg';
import user3Image from 'assets/img/users/100_9.jpg';
import user4Image from 'assets/img/users/100_10.jpg';
import user5Image from 'assets/img/users/100_11.jpg';
import user6Image from 'assets/img/users/100_12.jpg';

import {   
  Table  
} from 'reactstrap';  


export default class Transactions extends Component {
  render() {
    return (        
        <Table className="table-striped">
            <thead>
                <tr> 
                    <th className="text-center" width="70" ><i class="fa fa-image"></i></th>
                    <th>Athletes</th> 
                    <th>Date</th> 
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td className="text-center"><img src={user1Image} className="w-100 rounded-circle" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>                                           
                    <td>a min ago</td>   
                </tr>                                              
                <tr> 
                    <td className="text-center"><img src={user2Image} className="w-100 rounded-circle" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>                                           
                    <td>20 min ago</td>   
                </tr>                                              
                <tr> 
                    <td className="text-center"><img src={user3Image} className="w-100 rounded-circle" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>                                           
                    <td>22 min ago</td>   
                </tr>                                              
                <tr> 
                    <td className="text-center"><img src={user4Image} className="w-100 rounded-circle" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>                                           
                    <td>30 min ago</td>   
                </tr>                                              
                <tr> 
                    <td className="text-center"><img src={user5Image} className="w-100 rounded-circle" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>                                           
                    <td>31 min ago</td>   
                </tr>                                         
                <tr> 
                    <td className="text-center"><img src={user6Image} className="w-100 rounded-circle" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>                                           
                    <td>35 min ago</td>   
                </tr>                                          
            </tbody>
        </Table>  
    );
  }
}
