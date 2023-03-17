import Page from 'components/Page';
import React, { Component } from 'react';

import {
    Col,
    Row
} from 'reactstrap';


/*const NoMatchPage = () => {
  return (
    <Page title="Statistics" breadcrumbs={[{ name: 'Statistics', active: true }]}>
        <Row>
            <Col md={5}>
                     
            </Col> 

            <Col md={7}>
                 
            </Col>
        </Row>
    </Page>
  );
};

export default NoMatchPage;*/

class ErrorPage extends Component {

    componentDidMount() {        
        document.title = "404 || Your fan cam"
    }

    render() {
        return (
            <Page title="404 - Page not found" breadcrumbs={[{ name: '404 Page', active: true }]}>
                <Row>
                    <Col lg={12}>
                        <div className="ibox ">
                            <div className="ibox-content">
                                <p>Sorry, we couldn't find the page you are looking for. Please check the URL or try other sections from sidebar.</p>     
                            </div>
                        </div>
                    </Col>
                </Row>
            </Page>             
        )
    }
}

export default ErrorPage;
