import Page from 'components/Page';
import React from 'react';
import axios from 'axios';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import SweetAlert from 'react-bootstrap-sweetalert'; 

import { getToken } from 'utils/Common';

import BaseService from 'utils/base.service.jsx';
import ApiService from 'utils/api.service.jsx';

import CategoryDetails from 'pages/categories/categoryDetails'

import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Col,
    Form, 
    FormText,
    FormGroup,  
    Input,
    Label,
    Row
} from 'reactstrap';


class CategoryDetailsPage extends React.Component { 

    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);
        const { cookies } = props; 
        this.state = {   
            name: '', 
            CategoryImage: null,   
            ShowSweetAlert: false,                              
            Loader: false,         
            FormLoader: false,         
            WrongMassage: '',
            token: cookies.get('token') || '',
            GetApiUrl: cookies.get('ApiUrl') || '',
            designation: cookies.get('designation') || ''
        };     
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {  

        document.title = "Category Details || Laymoone"  

        this.GetCategoryDetails();

        const { id } = this.props.match.params;
        
        let path = 'categories/'+id;

        const getCategories = ApiService.getCategories(path);

        console.log(getCategories);

        // const name = getCategories.results.name;
        // const CategoryImage = getCategories.results.image_url;

        // console.log(name + ' ## ' + CategoryImage)
    }     

    GetCategoryDetails(){

        this.setState({FormLoader : true})

        const AccessToken = getToken();

        const { id } = this.props.match.params;
        
        let path = 'categories/'+id;

        BaseService.getData(path, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'bearer '+AccessToken
            } 
        }).then(res => {  

            console.log(res.data);    

            const name = res.data.results.name;
            const CategoryImage = res.data.results.image_url;     

            this.setState({
                name: name, 
                CategoryImage: CategoryImage    
            }) 

            this.setState({FormLoader : false})

        }).catch(error => {

            console.log( error );    

            this.setState({ WrongMassage: 'Something went wrong please try again!' , Loader : false });                 

        });
    }

    handleChange(event) {
        this.setState({
            CategoryImage: URL.createObjectURL(event.target.files[0])
        })
    } 

    handleCreateCategory(e) { 

        e.preventDefault()

        let name = this.state.name      

        const { id } = this.props.match.params                
        const AccessToken = getToken();
        
        this.setState({FormLoader : true})                                 

        let data = JSON.stringify({            
            name: name,            
        })         

        var Apiurl = BaseService.getBaseUrl()+'categories/'+id;

        axios.put( Apiurl, data, {
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
            this.setState({FormLoader : false});
            this.setState({ WrongMassage: 'Something went wrong please try again!' }); 
        });

    }

    CallSuccessAlert(){
        this.setState({ShowSweetAlert: false});
        //window.location.reload();
    }

    NameHandler = (event) => {
        this.setState({name: event.target.value});
    } 

    render(){        
        
        var FormTitle = 'Category Edit'        
        
        return (
            <Page title="Category Details" breadcrumbs={[{ name: 'Category Details', active: true }]}>
                <Row>
                    <Col md={6}>
                        <Card>
                            <CardHeader>{FormTitle}</CardHeader>
                            <CardBody>
                                <p className="ErrorMassge">{this.state.WrongMassage}</p>
                                <Form onSubmit={this.handleCreateCategory.bind(this)}>   
                                    <FormGroup>
                                        <Label for="Name">Name</Label>                                
                                        <Input ref="name" placeholder="Name" value={this.state.name} onChange={this.NameHandler}/> 
                                    </FormGroup>  

                                    <div className="multi-preview CategoryImage">
                                        {this.state.CategoryImage ? (
                                            <img src={this.state.CategoryImage}/>
                                        ) : ( '' )}                                    
                                    </div>
                                    <FormGroup className="mb-4 position-relative">
                                        <Label for="CategoryImage">Category Image</Label>
                                        <span className="btn btn-secondary UploadCustom btn-sm"><i className="fa fa-upload"></i> Upload Image</span>
                                        <Input type="file" name="CategoryImage" onChange={this.handleChange} />
                                        <FormText color="muted">Set category image.</FormText> 
                                    </FormGroup>

                                    <Button type="submit" color="primary">Update</Button>

                                    {this.state.FormLoader ? (
                                        <div className="LoadingIcon">
                                            <img src="/img/loader.svg" alt="Loading Image"/>
                                        </div>
                                    ) : ( '' )}
                                </Form>

                                <SweetAlert 
                                    show={this.state.ShowSweetAlert}
                                    success 
                                    title="Good job!" 
                                    onConfirm={()=>this.CallSuccessAlert()}>
                                    Category Updated successfully.
                                </SweetAlert>

                            </CardBody>
                        </Card>      
                    </Col> 

                    <Col md={6}>
                        <CategoryDetails name={this.state.name} CategoryImage={this.state.CategoryImage} />                         
                    </Col>
                </Row>
            </Page>
        );
    }
};
 
export default withCookies(CategoryDetailsPage);