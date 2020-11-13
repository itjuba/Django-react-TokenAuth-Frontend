import React, { Component } from 'react';
import {Form,Button} from "react-bootstrap";
import { Redirect } from "react-router-dom";


export default class Signup extends React.Component{
   state = {
    email: '',
    password: '',
       password2:''
  };



  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
    console.log(this.state)
  };
    render(){
         if(localStorage.getItem('token')){
             console.log('token herer !')
            return (
                <Redirect to='/Welcome' first_name={this.props.first_name}></Redirect>
            )
        }
        return (
            <div style={mystyle}>
                 <Form  onSubmit={e=>{this.props.handle_signup(e,this.state)}}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  name="email" onChange={this.handle_change} type="text" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your Email with anyone else.
                    </Form.Text>
                  </Form.Group>
                     <Form.Group controlId="form">
                    <Form.Label>Adresse</Form.Label>
                    <Form.Control  name="Adresse" onChange={this.handle_change} type="text" placeholder="Enter Adresse" />
                    <Form.Text className="text-muted">
                      We'll never share your adresse with anyone else.
                    </Form.Text>
                  </Form.Group>
                     <Form.Group controlId="form_first_name">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control  name="first_name" onChange={this.handle_change} type="text" placeholder="First Name" />
                    <Form.Text className="text-muted">
                      We'll never share your first name with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={this.handle_change} type="password" placeholder="Password" />
                  </Form.Group>

                     <Form.Group controlId="formBasicPassword2">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control name="password2" onChange={this.handle_change} type="password" placeholder="Confirm Password" />
                  </Form.Group>

                       <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
            </div>

        )
    }
}

const mystyle = {
    display: 'flex',
    justifyContent: 'center',
    alignIitems: 'center',
    height:'100vh',
    }
