import Page from 'components/Page';
import React from 'react';

import {
    Col,
    Row
} from 'reactstrap';

import Videos from 'demos/Videos'

class VideosPage extends React.Component { 

  componentDidMount() {        
      document.title = "Videos || Your fan cam"  
  }

  render(){
    return (
      <Page title="Videos" breadcrumbs={[{ name: 'Videos', active: true }]}>
          <Row>
              <Col md={12}>
                
                <Videos Title="Video List" />
                      
              </Col> 

          </Row>
      </Page>
    );
  }
};

export default VideosPage;
