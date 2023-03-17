import Page from 'components/Page';
import React from 'react';

import {
    Col,
    Row
} from 'reactstrap';


class EmailSettingsPage extends React.Component { 

  componentDidMount() {        
      document.title = "Email Settings || Your fan cam"  
  }

  render(){
    return (
      <Page title="Email Settings" breadcrumbs={[{ name: 'Email Settings', active: true }]}>
          <Row>
              <Col md={5}>
                      
              </Col> 

              <Col md={7}>
                  
              </Col>
          </Row>
      </Page>
    );
  }
};

export default EmailSettingsPage;
