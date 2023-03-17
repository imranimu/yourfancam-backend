import React, { Component } from 'react';

import product1Image from 'assets/img/products/product_640-1.jpg';
import product2Image from 'assets/img/products/product_640-2.jpg';
import product3Image from 'assets/img/products/product_640-3.jpg';
import product4Image from 'assets/img/products/product_640-4.jpg';
import product5Image from 'assets/img/products/product_640-5.jpg';
import product6Image from 'assets/img/products/product_640-6.jpg';

import {   
  Table  
} from 'reactstrap';  


export default class Transactions extends Component {
  render() {
    return (        
        <Table className="table-striped">
            <thead>
                <tr> 
                    <th className="text-center" width="100" ><i class="fa fa-video-camera"></i></th>
                    <th>Athletes</th> 
                    <th>Fans</th> 
                    <th>Status</th> 
                    <th>Date</th> 
                </tr>
            </thead>
            <tbody>
                <tr> 
                    <td className="text-center"><img src={product1Image} className="w-100" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>
                    <td>Jone Due</td>
                    <td>Replied</td>
                    <td>a min ago</td>   
                </tr>                                              
                <tr> 
                    <td className="text-center"><img src={product2Image} className="w-100" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>
                    <td>Jone Due</td>
                    <td>Viewed</td>
                    <td>20 min ago</td>   
                </tr>                                              
                <tr> 
                    <td className="text-center"><img src={product3Image} className="w-100" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>
                    <td>Jone Due</td>
                    <td>Pending</td>
                    <td>22 min ago</td>   
                </tr>                                              
                <tr> 
                    <td className="text-center"><img src={product4Image} className="w-100" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>
                    <td>Jone Due</td>
                    <td>Replied</td>
                    <td>30 min ago</td>   
                </tr>                                              
                <tr> 
                    <td className="text-center"><img src={product5Image} className="w-100" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>
                    <td>Jone Due</td>
                    <td>Pending</td>
                    <td>31 min ago</td>   
                </tr>                                         
                <tr> 
                    <td className="text-center"><img src={product6Image} className="w-100" alt="Devid Jonson"/></td>
                    <td>Devid Jonson</td>
                    <td>Jone Due</td>
                    <td>Viewed</td>
                    <td>35 min ago</td>   
                </tr>                                          
            </tbody>
        </Table>  
    );
  }
}
