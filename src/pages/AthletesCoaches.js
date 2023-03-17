import Page from 'components/Page';
import React from 'react';

import {
    Col,
    Row
} from 'reactstrap';

import AthletesCoachesData from 'demos/AthletesCoaches';

class AthletesCoachesPage extends React.Component { 

  componentDidMount() {        
      document.title = "Athletes || Your fan cam"  
  }

  render(){
    return (
      <Page title="Athletes" breadcrumbs={[{ name: 'Athletes', active: true }]}>
          <Row>
              <Col md={12}>
                
                <AthletesCoachesData Title="Athletes List"/>
                      
              </Col> 
          </Row>
      </Page>
    );
  }
};

export default AthletesCoachesPage;
