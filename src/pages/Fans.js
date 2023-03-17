import Page from 'components/Page';
import React from 'react';

import {
    Col,
    Row
} from 'reactstrap';

import FansData from 'demos/Fans';


class FansPage extends React.Component { 

  componentDidMount() {        
      document.title = "Fans || Your fan cam"  
  }

  render(){
    return (
      <Page title="Fans" breadcrumbs={[{ name: 'Fans', active: true }]}>
          <Row>
              <Col md={12}>
                <FansData Title="Fans Lists" /> 
              </Col> 
          </Row>
      </Page>
    );
  }
};

export default FansPage;
