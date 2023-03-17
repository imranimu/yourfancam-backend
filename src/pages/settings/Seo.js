import Page from 'components/Page';
import React from 'react';

import {
    Col,
    Row
} from 'reactstrap';


class SeoSettingsPage extends React.Component { 

  componentDidMount() {        
      document.title = "SEO and Analytic Settings || Your fan cam"  
  }

  render(){
    return (
      <Page title="SEO and Analytic Settings" breadcrumbs={[{ name: 'SEO and Analytic Settings', active: true }]}>
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

export default SeoSettingsPage;
