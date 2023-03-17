import React from 'react';

import { Navbar, Nav, NavItem } from 'reactstrap';

import SourceLink from 'components/SourceLink';

const Footer = () => {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          {/* <p className="mb0">Developed and Managed with <i className="fa fa-heart"></i> by <a href="http://bit.ly/systdev" target="_blank">Systway</a></p> */}
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
