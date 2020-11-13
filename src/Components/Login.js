import React, { Component } from 'react';
import {Form,Button} from "react-bootstrap";
import { Redirect } from "react-router-dom";


export default class Login extends React.Component{
   state = {
    email: '',
    password: ''

  };



  handle_change = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevstate => {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  };
    render(){
        console.log(this.state)
        if(localStorage.getItem('token')){
            return (
                <Redirect to='/Welcome' first_name={this.props.first_name}></Redirect>
            )
        }
        return (

            <div style={mystyle}>
                 <Form  onSubmit={e=>{this.props.handle_login(e,this.state)}}>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control  name="email" onChange={this.handle_change} type="text" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your Username with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={this.handle_change} type="password" placeholder="Password" />
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
