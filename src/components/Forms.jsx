import React,{Component} from "react";
import { Alert } from 'react-bootstrap';
import { Button,Col,Container } from 'react-bootstrap';
class Forms extends Component{

    constructor(props){
        super(props);
         this.state={
            username: '',
            password: '',
            firstName: '',
            lastName: '',
            email:'',
            contact: '',
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    //handle change
    handleChange(event) {
            this.setState({[event.target.name]: event.target.value});
        
      }
     //handle submit 
    handleSubmit(event) {
        alert("Registered Successfully")
        event.preventDefault();
      }
    
    render()
    {   return(
        <div>
               <Container fluid>
               <Col md={{ span: 6, offset: 3 }}>
               <Alert variant="success">
                <h2>Register</h2>
               </Alert>
                </Col>
               </Container>
                <form>
                <Container fluid>
                <div className="form-group" >
                <Col md={{ span: 6, offset: 3 }}>
                    <label className="l">User Name *:</label>
                    <input type="text" placeholder="username" name="username"  className="form-control" value={this.state.username} onChange={this.handleChange}/>
                    </Col> 
                </div> 
               

                <div className="form-group">
                <Col md={{ span: 6, offset: 3 }}>
                    <label>Password *:</label>
                    <input type="password" placeholder="password" name="password"  className="form-control" value={this.state.password} onChange={this.handleChange}/>
                    </Col>
                </div>

                <div className="form-group">
                <Col md={{ span: 6, offset: 3 }}>
                    <label>Name *:</label>
                    <input placeholder="First Name" name="firstName" className="form-control" value={this.state.firstName} onChange={this.handleChange}/>
                    </Col>
                </div>

                <div className="form-group">
                      <Col md={{ span: 6, offset: 3 }}>
                    <label>Email id *:</label>
                    <input placeholder="Email id" name="email"  className="form-control" value={this.state.email} onChange={this.handleChange}/>
                    </Col>
                </div>


                <div className="form-group">
                    <Col md={{ span: 6, offset: 3 }}>
                    <label>Contact Number:</label>
                    <input placeholder="Enter 10 digit mobile number"    name="contact" className="form-control" value={this.state.contact} onChange={this.handleChange}/>
               </Col>
               </div>
               <div className="form-group">
               <Col md={{ span: 6, offset: 3 }}>   
               <Button  variant="success" onClick={this.handleSubmit}>Submit</Button>           
               </Col>
               </div>
                </Container>              
            </form>
        </div>
        );
    }
}
export default Forms;
