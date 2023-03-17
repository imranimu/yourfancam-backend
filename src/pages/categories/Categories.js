import Page from 'components/Page';
import React from 'react'; 

import {Link} from 'react-router-dom';
import SweetAlert from 'react-bootstrap-sweetalert';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';

import { getToken } from 'utils/Common';

import {
    Col,
    Row,
    Card,
    CardHeader,
    CardBody,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
    Table
} from 'reactstrap'; 

class CategoriesPage extends React.Component {

  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };
  
  constructor(props) {
    super(props); 
    const { cookies } = props;
    this.state = {   
        name: '', 
        CategoryImage: null, 
        CategoriesData: [],
        ShowSweetAlert: false,
        show: false,
        SuccessAlert: false,
        Loader: false,
        FormLoader: false,
        token: cookies.get('token') || '',
        GetApiUrl: cookies.get('ApiUrl') || ''
    };     
    this.handleChange = this.handleChange.bind(this)
  }  

  componentDidMount() {        
      document.title = "Categories || Your fan cam"  

      const ApiURL = this.state.GetApiUrl+'categories';

      this.GetAllCategories(ApiURL);
  }

  GetAllCategories(ApiURL){            

    const AccessToken =  getToken();     

    this.setState({Loader : true});      

    axios.get(ApiURL, {
        headers: {
            'Accept' : 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+AccessToken
        } 
    }).then(res => {  
        
        console.log(res.data);    
        
        const getCategoriesData = res.data.results;

        this.setState({
          Loader : false,
          CategoriesData: getCategoriesData,
        });          
    }).catch(error => {  
        console.log( error );
        this.setState({ WrongMassage: 'Something Went Wrong.' }); 
        this.setState({Loader : false})
    });
  }

  handleCreateCategory(e) { 
    e.preventDefault()
    let name = this.state.name                       
    let Image = 'https://lorempixel.com/640/480'
    
    const AccessToken =  getToken();  
    
    const GetApiUrl = 'https://services.yourfancam.com/api/v1/categories';

    this.setState({FormLoader : true})

    let data = JSON.stringify({            
      name: name,
      image_url: Image
    })

    axios.post( GetApiUrl, data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+AccessToken
        } 
    }).then(res => {

        console.log(res.data);  

        this.setState({ShowSweetAlert: true});

        this.setState({FormLoader : false});

    }).catch(error => {            
        console.log( error );
        this.setState({FormLoader : false, WrongMassage: 'Something went wrong please try again!'});        
    });
  }

  NameHandler = (event) => {
    this.setState({name: event.target.value});
  }    

  handleChange(event) {
    this.setState({
        CategoryImage: URL.createObjectURL(event.target.files[0])
    })
  }

  DeleteCategory(){

    var DeleteCategoryID = this.state.DeleteCategoryID;

    var CallApiUrl = this.state.GetApiUrl+'categories/'+DeleteCategoryID;

    const AccessToken =  this.state.token; 

    console.log(CallApiUrl); 

    axios.delete(CallApiUrl, {
        headers: {
            'Accept' : 'application/json', 
            'Content-Type': 'application/json',
            'Authorization': 'bearer '+AccessToken
        } 
    }).then(res => {

        console.log(res.data);               

        this.setState({show: false, DeleteCategoryID: '', SuccessAlert: true });

    }).catch(error => {

        console.log( error );             

        this.setState({show: false, DeleteCategoryID: ''});

    });
  }

  ActionCancel(){
    this.setState({show: false, DeleteCategoryID: ''});
  }

  CallSuccessAlert(){                
    this.setState({
        SuccessAlert: false, 
        ShowSweetAlert: false
    });
    window.location.reload();
  }

  render(){
    return (
      <Page title="Categories" breadcrumbs={[{ name: 'Categories', active: true }]}>
          <Row>
              <Col md={5}>
                <Card>
                  <CardHeader>Create Category</CardHeader>
                  
                  <CardBody>
                  
                      <p className="ErrorMassge">{this.state.WrongMassage}</p>
                      <Form onSubmit={this.handleCreateCategory.bind(this)}>                             
                          
                          <FormGroup>
                              <Label for="Name">Name</Label>                                
                              <Input ref="name" placeholder="Name" onChange={this.NameHandler}/> 
                          </FormGroup>  

                          {/* <FormGroup>
                              <Label for="ImageUrl">Image Url</Label>                                
                              <Input ref="ImageUrl" placeholder="Image Url" onChange={this.ImageHandler}/> 
                          </FormGroup>   */}

                          <div className="multi-preview CategoryImage">
                              {this.state.CategoryImage ? (
                                  <img src={this.state.CategoryImage}/>
                              ) : ( '' )}                                    
                          </div>

                          <FormGroup className="mb-4 position-relative">
                              <Label for="CategoryImage">Category Image</Label>
                              <span className="btn btn-secondary UploadCustom btn-sm"><i className="fa fa-upload"></i> Upload Image</span>
                              <Input type="file" name="CategoryImage" onChange={this.NameHandler} />
                              <FormText color="muted">Set category image.</FormText> 
                          </FormGroup>

                          <Button type="submit" color="primary">Save</Button>        

                          {this.state.FormLoader ? (
                              <div className="LoadingIcon">
                                  <img src="img/loader.svg" alt="Loading Image"/>
                              </div>
                          ) : ( '' )}                   
                      </Form>
                  </CardBody>
                </Card>     
              </Col>

              <Col md={7}>
                <Card className="mb-3">
                  <CardHeader>Categories</CardHeader>
                  <CardBody className="pb-1">
                    <Table className="table table-striped">
                      <thead>
                          <tr>
                              <th width="30">#</th> 
                              <th className="text-center"><i className="fa fa-image"></i></th>                                                    
                              <th>Name</th>  
                              <th className="text-center"># Mentors</th>
                              <th className="text-center">Action</th>
                          </tr>
                      </thead>                    

                      <tbody>
                        { this.state.CategoriesData.map( (value , i ) => 
                            <tr key={value.uuid}>                                         
                                <td scope="row">{ i + 1} </td>
                                <td className="text-center"><img src={value.image_url} width="45" /></td>                                                    
                                <td>{value.name}</td> 
                                <td className="text-center">10</td>
                                <td className="text-center">
                                    <span className="mr-2">
                                        <Link to={ 'category-edit/'+value.uuid} >
                                            <i className="text-primary fa fa-pencil-square-o"></i>
                                        </Link>
                                    </span> 
                                    <span>
                                        <Link to="#" onClick={() => this.setState({ show: true, DeleteCategoryID: value.uuid })}>
                                            <i className="text-danger fa fa-trash-o"></i>
                                        </Link>                                                                
                                    </span>
                                </td>                                                                                                       
                            </tr>      
                        )}                                                                          
                      </tbody>
                    </Table>
                    
                    <Row className="position-relative">
                      <Col md={5}>
                          <div className="dataTables_info">
                              Showing 1 to 5 of 10 entries
                          </div>
                      </Col>
                      <Col md={7} > 
                          <div className="dataTables_paginate text-right">
                              <ul className="pagination m-b-n m-t-n">
                                  <li className="paginate_button previous disabled">
                                      <a href="#">Previous</a>
                                  </li>
                                  <li className="active">
                                      <a href="#">1</a>
                                  </li>
                                  <li>
                                      <a href="#">2</a>
                                  </li>
                                  <li className="paginate_button previous disabled">
                                      <a href="#">Next</a>
                                  </li>
                              </ul>
                          </div>
                      </Col> 
                      {this.state.Loader ? (
                          <div className="LoadingIcon TableLoader">
                              <img src="/img/loader.svg" alt="Loading Image"/>
                          </div>
                      ) : ( '' )}   
                  </Row>

                  <SweetAlert
                      show={this.state.show}
                      warning
                      showCancel
                      confirmBtnText="Yes, delete it!"
                      confirmBtnBsStyle="danger"
                      title="Are you sure?"
                      onConfirm={() => this.DeleteCategory()}
                      onCancel={() => this.ActionCancel()}
                      >
                      You will not be able to recover this imaginary file!
                  </SweetAlert> 

                  <SweetAlert 
                      show={this.state.SuccessAlert}
                      success 
                      title="Deleted!" 
                      onConfirm={()=>this.CallSuccessAlert()}>
                      Your imaginary file has been deleted.
                  </SweetAlert>
                  
                  <SweetAlert 
                      show={this.state.ShowSweetAlert}
                      success 
                      title="Good job!" 
                      onConfirm={()=>this.CallSuccessAlert()}>
                      Category Created Successfully.
                  </SweetAlert>                  

                </CardBody> 
              </Card>                  
            </Col>
          </Row>
      </Page>
    );
  }
};

export default withCookies(CategoriesPage);
