import Page from 'components/Page';
import React from 'react';

import {
    Col,
    Row
} from 'reactstrap';


class ContentPage extends React.Component { 

  componentDidMount() {        
      document.title = "Content Settings || Your fan cam"  
  }

  render(){
    return (
      <Page title="Content Settings" breadcrumbs={[{ name: 'Content Settings', active: true }]}>
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

export default ContentPage;
