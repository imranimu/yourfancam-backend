import logo200Image from 'assets/img/logo/logo_200.png';
import PropTypes from 'prop-types';

import React, { Component } from 'react';

import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

import SweetAlert from 'react-bootstrap-sweetalert';

import { setUserSession, getToken, getUser } from 'utils/Common';

import BaseService from 'utils/base.service.jsx';

class AuthForm extends React.Component {  

  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      username: '', 
      password: '', 
      confirmPassword: '', 
      WrongMassage: '',
      ShowSweetAlert: false,
      Loader: false,
      token: '',
      avatar: '',         
      name: '',
      designation: '',
    };
  }
  
  get isLogin() {
    return this.props.authState === STATE_LOGIN;
  }

  get isSignup() {
    return this.props.authState === STATE_SIGNUP;
  }

  componentDidMount() { 

    const token = getToken();
    const user = getUser();
    
    const name = user.first_name + ' ' + user.last_name;  

    const designation = user.role;     

    if(token && name && designation){   
      window.location = '/dashboard';      
    }

    var FormType = this.props.authState;

    if(FormType == 'LOGIN'){
      document.title = "Login || Your fan cam"  
    }else{
      document.title = "Signup || Your fan cam"  
    }   
    
  }

  changeAuthState = authState => event => {
    event.preventDefault();

    this.props.onChangeAuthState(authState);
  };

  handleSubmit = event => {
      
    event.preventDefault();

    var FormType = this.props.authState;  

    let email = this.state.username
    let password = this.state.password  

    if(FormType == 'LOGIN'){         

      if (email && password) {

          this.setState({Loader : true})

          // let data = JSON.stringify({
          //     email: email,
          //     password: password
          // })

          let path = 'login?email='+email+'&password='+password ;

          BaseService.postData(path, {
              headers: {
                  'Content-Type': 'application/json',
              } 
          }).then(res => {  

              console.log(res.data); 

              const authsToken = res.data.results.access_token
              const user = res.data.results.data
              const role = res.data.results.data.role

              if(role === 'Admin'){

                setUserSession(
                    authsToken, 
                    user
                );               

                this.setState({Loader : false, WrongMassage: ''})

                window.location = '/dashboard'

              }else{
                this.setState({ WrongMassage: "You don't have admin access" , Loader : false });                 
              }

          }).catch(error => {

              console.log( error );    

              this.setState({ WrongMassage: 'Email or Password is incorrect' , Loader : false });                 

          }); // handle errors if needed
          
      }else{       
          this.setState({ WrongMassage: 'All Fields are required' , Loader : false }); 
      }
    }     
  };

  CallSuccessAlert(){
                
    this.setState({ 
        ShowSweetAlert: false
    });

    window.location = '/'; 
  }

  renderButtonText() {
    const { buttonText } = this.props;

    if (!buttonText && this.isLogin) {
      return 'Login';
    } 
    return buttonText;
  }

  NameHandler = (event) => {
    this.setState({name: event.target.value});
  }

  UserNameHandler = (event) => {
    this.setState({username: event.target.value});
  }

  PasswordHandler = (event) => {
    this.setState({password: event.target.value});
  }

  CPasswordHandler = (event) => {
    this.setState({confirmPassword: event.target.value});
  }
  CShopNameHandler = (event) => {
    this.setState({shopName: event.target.value});
  }
  CphoneHandler = (event) => {
    this.setState({phone: event.target.value});
  }
  CAddressHandler = (event) => {
    this.setState({Address: event.target.value});
  }

  render() {
    const {
      showLogo, 
      usernameLabel,
      usernameInputProps,
      passwordLabel,
      passwordInputProps, 
      children,
      onLogoClick,
    } = this.props;

    return (
      <Form onSubmit={this.handleSubmit}>
        {showLogo && (
          <div className="text-center pb-4">
            <img
              src={logo200Image}
              className="rounded"
              style={{ height: 60, cursor: 'pointer' }}
              alt="logo"
              onClick={onLogoClick}
            />
          </div>
        )}                 
        <FormGroup>
          <Label for={usernameLabel}>{usernameLabel}</Label>
          <Input {...usernameInputProps} onChange={this.UserNameHandler} required />
        </FormGroup>
         
        <FormGroup>
          <Label for={passwordLabel}>{passwordLabel}</Label>
          <Input {...passwordInputProps} onChange={this.PasswordHandler} required />
        </FormGroup>
              
        <FormGroup check>          
          <Label check>   
            {this.isSignup ? <Input type="checkbox" required /> : <Input type="checkbox"/>}

            {this.isSignup ? <>Agree the <a href="#">Terms and Policy</a></> : 'Remember me'}

          </Label>

        </FormGroup>
        <hr />

        <div className="ErrorMassge">{this.state.WrongMassage}</div> 

        {this.state.Loader ? (
            <div className="LoadingIcon">
                <img src="img/loader.svg" alt="Loading Image"/>
            </div>
        ) : ( '' )}       

        <Button 
          type="submit" 
          size="lg"
          className="bg-gradient-theme-left border-0"
          block>{this.renderButtonText()}
        </Button>         

        {children}

        <SweetAlert 
            show={this.state.ShowSweetAlert}
            success 
            title="Good job!" 
            onConfirm={()=>this.CallSuccessAlert()}>
            Seller Registered Successfully.
        </SweetAlert>
      </Form>
    );
  }
}

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,  
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,  
  usernameLabel: 'Email Address',
  usernameInputProps: {
    type: 'email',
    placeholder: 'example@gmail.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'Password',
  },   
  onLogoClick: () => {},
};

export default AuthForm;
