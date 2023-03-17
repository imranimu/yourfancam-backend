import Page from 'components/Page';

import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie'; 

import ProductMedia from 'components/ProductMedia'; 
import MenteesActivityTable from 'components/MenteesActivityTable';

import UserActivityTable from 'components/UserActivityTable';
import PendingActivityTable from 'components/PendingActivityTable';
import {NumberWidget } from 'components/Widget'; 
import Activity from 'components/RecentActivity';

import {  
  InventoryData,
  MenteesActivityTableData,
  userActivityTableData,
  PendingAthletesData,
  RecentActivityData
} from 'demos/dashboardPage';
import React from 'react'; 

import { 
  MdPersonPin,  
} from 'react-icons/md'; 

import { NavLink } from 'react-router-dom'; 

import { 
  Card,
  CardBody,  
  CardHeader, 
  Col, 
  Row, 
  NavLink as BSNavLink,
} from 'reactstrap';   

import Transactions from 'demos/Transactions';
import RecentReplies from 'demos/RecentReplies'
import RecentVideos from 'demos/RecentVideos'

class DashboardPage extends React.Component {   

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
      super(props);
      const { cookies } = props; 
      this.state = {   
          designation: cookies.get('designation') || '',
      };  
  }

  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    document.title = "Dashboard || Your fan cam"   

    window.scrollTo(0, 0);
  }

  render() {         
      return (
        <Page
          className="DashboardPage"
          title="Dashboard"
          breadcrumbs={[{ name: 'Dashboard', active: true }]}
        >
          <Row>             
            <Col lg={3} md={6} sm={6} xs={12}>
              <NumberWidget
                title="Athletes"
                subtitle="This Month"
                number="1.3k"
                color="secondary"
                progress={{
                  value: 75,
                  label: 'Last Month',
                }}
              />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
              <NumberWidget
                title="Fans"
                subtitle="This Month"
                number="5.4k"
                color="secondary"
                progress={{
                  value: 45,
                  label: 'Last Month',
                }}
              />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
              <NumberWidget
                title="Videos"
                subtitle="This Month"
                number="3,400"
                color="secondary"
                progress={{
                  value: 90,
                  label: 'Last Month',
                }}
              />
            </Col>

            <Col lg={3} md={6} sm={6} xs={12}>
              <NumberWidget
                title="Transactions($)"
                subtitle="This Month"
                number="8.2k"
                color="secondary"
                progress={{
                  value: 60,
                  label: 'Last Month',
                }}
              />
            </Col>
          </Row>  

          <Row>
            <Col md="6" sm="12" xs="12">
              <Transactions/>                             
            </Col>

            <Col md="6" sm="12" xs="12">
              <Card>                
                <CardHeader>                                
                  <div className="CardHeaderLeft">Recent Activities</div>                               
                  <div className="CardHeaderRight"> 
                      <BSNavLink                                        
                          className="btn btn-primary btn-sm"
                          tag={NavLink}
                          to="/report/athletes"
                          exact="false"
                      >View Details</BSNavLink>                                  
                  </div>                                                             
                </CardHeader>
                <CardBody>
                   

                  {RecentActivityData.map(RecentActivity => (

                    <Activity key={RecentActivity.id} {...RecentActivity} />

                  ))}
                </CardBody>
              </Card>
            </Col>

            <Col lg="6" md="12" sm="12" xs="12">
            <Card>              
              <CardHeader>                                
                <div className="CardHeaderLeft">Recent Replies</div>                               
                <div className="CardHeaderRight"> 
                    <BSNavLink                                        
                        className="btn btn-primary btn-sm"
                        tag={NavLink}
                        to="/report/visitors"
                        exact="false"
                    >View Details</BSNavLink>                                  
                </div>                                                             
              </CardHeader>
              <CardBody>
                 <RecentReplies/>
              </CardBody>
            </Card>
          </Col>
          <Col md="6" sm="12" xs="12">
            <Card>              
              <CardHeader>                                
                <div className="CardHeaderLeft">New Videos</div>                               
                <div className="CardHeaderRight"> 
                    <BSNavLink                                        
                        className="btn btn-primary btn-sm"
                        tag={NavLink}
                        to="/videos"
                        exact="false"
                    >View Details</BSNavLink>                                  
                </div>                                                             
              </CardHeader>
              <CardBody>
                <RecentVideos/>
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>              
              <CardHeader>                                
                <div className="CardHeaderLeft">Active Athletes</div>
                <div className="CardHeaderRight"> 
                    <BSNavLink                                        
                        className="btn btn-primary btn-sm"
                        tag={NavLink}
                        to="/athletes"
                        exact="false"
                    >View Details</BSNavLink>                                  
                </div>                                                             
              </CardHeader>
              <CardBody>
                <UserActivityTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'Last Active',
                    '# of Replies',
                    'Category',
                  ]}
                  usersData={userActivityTableData}
                />
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>              
              <CardHeader>                                
                <div className="CardHeaderLeft">Active Fans</div>                               
                <div className="CardHeaderRight"> 
                    <BSNavLink                                        
                        className="btn btn-primary btn-sm"
                        tag={NavLink}
                        to="/fans"
                        exact="false"
                    >View Details</BSNavLink>                                  
                </div>                                                             
              </CardHeader>
              <CardBody>
                <MenteesActivityTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'name',
                    'Last Active',
                    '# of Videos',
                    'Member Since',
                  ]}
                  usersData={MenteesActivityTableData}
                />
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>              
              <CardHeader>                                
                <div className="CardHeaderLeft">Pending Athletes</div>
                <div className="CardHeaderRight"> 
                    <BSNavLink                                        
                        className="btn btn-primary btn-sm"
                        tag={NavLink}
                        to="#"
                        exact="false"
                    >View Details</BSNavLink>                                  
                </div>                                                             
              </CardHeader>
              <CardBody>
                <PendingActivityTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'Name',
                    'Date', 
                    'Action',
                  ]}
                  usersData={PendingAthletesData}
                />
              </CardBody>
            </Card>
          </Col>

          <Col md="6" sm="12" xs="12">
            <Card>              
              <CardHeader>                                
                <div className="CardHeaderLeft">Pending Fans</div>                               
                <div className="CardHeaderRight"> 
                    <BSNavLink                                        
                        className="btn btn-primary btn-sm"
                        tag={NavLink}
                        to="#"
                        exact="false"
                    >View Details</BSNavLink>                                  
                </div>                                                             
              </CardHeader>
              <CardBody>
                <PendingActivityTable
                  headers={[
                    <MdPersonPin size={25} />,
                    'Name',
                    'Date', 
                    'Action',
                  ]}
                  usersData={PendingAthletesData}
                />
              </CardBody>
            </Card>
          </Col>          
          </Row>
        </Page>
      ); 
  }
}
export default withCookies(DashboardPage);