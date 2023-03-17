import logo200Image from 'assets/img/logo/logo.png';
import sidebarBgImage from 'assets/img/sidebar/sidebar-11.jpg'; 

import React from 'react';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import {
    MdKeyboardArrowDown,     
    MdPayment
} from 'react-icons/md';
import { 
    AiOutlineDashboard, 
    AiOutlineAreaChart,  
    AiOutlineDollarCircle,
    AiOutlineTransaction,
    AiOutlineVideoCamera
} from 'react-icons/ai'; 
import { 
    FaList, 
    FaUsers, 
    FaUserTie, 
    FaUserShield, 
} from 'react-icons/fa'; 
import {FiGift, FiSettings, FiUsers} from 'react-icons/fi';  
import {RiMailSettingsLine, RiVideoChatLine} from 'react-icons/ri'; 
import {IoIosAnalytics} from 'react-icons/io'


import { NavLink } from 'react-router-dom'; 

import {
  Collapse,
  Nav,
  Navbar,
  NavItem,
  NavLink as BSNavLink,
} from 'reactstrap';
import bn from 'utils/bemnames';

const sidebarBackground = {
  backgroundImage: `url("${sidebarBgImage}")`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
}; 

const bem = bn.create('sidebar');

class Sidebar extends React.Component {

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props; 
        this.state = {         
            token: cookies.get('token') || '',
            name: cookies.get('name') || '',
            designation: cookies.get('designation') || '',
            isOpenProducts: false,
            isOpenUsers: false,
            isOpenReports: false,
            isOpenSettings: false,
        };     
    }  

    componentDidMount(){
    }

    handleClick = name => () => {
        if(name == 'Reports'){
            this.setState(prevState => {
                const isOpen = prevState[`isOpen${name}`];    
                return {
                    [`isOpenReports`]: !isOpen,
                    [`isOpenProducts`]: false,
                    [`isOpenUsers`]: false,
                    [`isOpenSettings`]: false,
                };    
            });
        }else if(name == 'Settings'){
            this.setState(prevState => {
                const isOpen = prevState[`isOpen${name}`];    
                return {
                    [`isOpenSettings`]: !isOpen,
                    [`isOpenProducts`]: false,
                    [`isOpenUsers`]: false,
                    [`isOpenReports`]: false,
                };    
            });
        }        
    };    

    render() {  

        /*
        ## Admin Menu 
        ***********************/
        var navItems = [
            { to: '/dashboard', name: 'dashboard', exact: true, Icon: AiOutlineDashboard },            
            { to: '/athletes', name: 'Athletes', exact: true, Icon: FiUsers },            
            { to: '/fans', name: 'Fans', exact: true, Icon: FaUsers },            
            { to: '/videos', name: 'Videos', exact: true, Icon: AiOutlineVideoCamera },            
            { to: '/packages', name: 'Packages', exact: true, Icon: FiGift },
            { to: '/categories', name: 'Categories', exact: true, Icon: FaList },
        ]; 
        var navReports = [
            { to: '/report/videos', name: 'Videos', exact: false, Icon: RiVideoChatLine },                
            { to: '/report/transaction', name: 'Transactions', exact: false, Icon: AiOutlineTransaction },
            { to: '/report/revenue', name: 'Revenue', exact: false, Icon: AiOutlineDollarCircle },            
            { to: '/report/athletes', name: 'Athletes', exact: false, Icon: FaUserTie }, 
            // { to: '/report/visitors', name: 'Visitors', exact: false, Icon: FaUserShield }, 
        ]; 
        var navSettings = [
            { to: '/settings/email', name: 'Emails', exact: false, Icon: RiMailSettingsLine },
            { to: '/settings/content', name: 'Content', exact: false, Icon: MdPayment },
            { to: '/settings/seo', name: 'SEO and Analytic', exact: false, Icon: IoIosAnalytics }, 
        ];

        /*
        ## Vendor Menu
        ***********************/

        return(

            <aside className={bem.b()} data-image={sidebarBgImage}>
                <div className={bem.e('background')} style={sidebarBackground} />
                <div className={bem.e('content')}>
                    <Navbar>             
                      <img
                      src={logo200Image}
                      width="100%" 
                      className="pr-2"
                      alt=""
                      />              
                    </Navbar>
                    <Nav vertical>
                        {navItems.map(({ to, name, exact, Icon }, index) => (
                            <NavItem key={index} className={bem.e('nav-item')}>
                            <BSNavLink
                                id={`navItem-${name}-${index}`}
                                className="text-uppercase"
                                tag={NavLink}
                                to={to}
                                activeClassName="active"
                                exact={exact}
                            >
                                <Icon className={bem.e('nav-item-icon')} />
                                <span className="">{name}</span>
                            </BSNavLink>
                            </NavItem>
                        ))}  

                        <NavItem
                            className={bem.e('nav-item')}
                            onClick={this.handleClick('Reports')}
                        >
                            <BSNavLink className={bem.e('nav-item-collapse')}>
                            <div className="d-flex">
                                <AiOutlineAreaChart className={bem.e('nav-item-icon')} />
                                <span className="">Reports</span>
                            </div>
                            <MdKeyboardArrowDown
                                className={bem.e('nav-item-icon')}
                                style={{
                                padding: 0,
                                transform: this.state.isOpenReports
                                    ? 'rotate(0deg)'
                                    : 'rotate(-90deg)',
                                transitionDuration: '0.3s',
                                transitionProperty: 'transform',
                                }}
                            />
                            </BSNavLink>
                        </NavItem>
                         
                        <Collapse isOpen={this.state.isOpenReports}>
                            {navReports.map(({ to, name, exact, Icon }, index) => (
                                <NavItem key={index} className={bem.e('nav-item')}>
                                    <BSNavLink
                                    id={`navItem-${name}-${index}`}
                                    className="text-uppercase"
                                    tag={NavLink}
                                    to={to}
                                    activeClassName="active"
                                    exact={exact}
                                    >
                                    <Icon className={bem.e('nav-item-icon')} />
                                    <span className="">{name}</span>
                                    </BSNavLink>
                                </NavItem>
                            ))}
                        </Collapse>    

                        {navSettings ? (
                            <>
                                <NavItem
                                    className={bem.e('nav-item')}
                                    onClick={this.handleClick('Settings')}
                                >
                                    <BSNavLink className={bem.e('nav-item-collapse')}>
                                    <div className="d-flex">
                                        <FiSettings className={bem.e('nav-item-icon')} />
                                        <span className="">Settings</span>
                                    </div>
                                    <MdKeyboardArrowDown
                                        className={bem.e('nav-item-icon')}
                                        style={{
                                        padding: 0,
                                        transform: this.state.isOpenSettings
                                            ? 'rotate(0deg)'
                                            : 'rotate(-90deg)',
                                        transitionDuration: '0.3s',
                                        transitionProperty: 'transform',
                                        }}
                                    />
                                    </BSNavLink>
                                </NavItem>
                                <Collapse isOpen={this.state.isOpenSettings}>
                                    {navSettings.map(({ to, name, exact, Icon }, index) => (
                                    <NavItem key={index} className={bem.e('nav-item')}>
                                        <BSNavLink
                                        id={`navItem-${name}-${index}`}
                                        className="text-uppercase"
                                        tag={NavLink}
                                        to={to}
                                        activeClassName="active"
                                        exact={exact}
                                        >
                                        <Icon className={bem.e('nav-item-icon')} />
                                        <span className="">{name}</span>
                                        </BSNavLink>
                                    </NavItem>
                                    ))}
                                </Collapse> 
                                
                            </>
                        ) : ( '' )}                                  
                    </Nav>
                </div>            
            </aside>
        )
    }


}

export default withCookies(Sidebar);