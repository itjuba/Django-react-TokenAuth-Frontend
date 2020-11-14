import React, { Component } from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import Login from "./Login";
import style from './Loginmodal.css'


function MyVerticallyCenteredModal(props) {
  console.log(props)
  if(props.logged_in){
    return (
        <div></div>
    )
  }

  return (
    <Modal
        // style={{height : '500px'}}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
           contentClassName="nadjib"
           dialogClassName="nadjib"
            transparent={true}
    >
      <Modal.Header closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
         <span>Login</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Login handle_login={props.handle_login}/>
      </Modal.Body>
      {/*<Modal.Footer>*/}
      {/*  <Button onClick={props.onHide}>Close</Button>*/}
      {/*</Modal.Footer>*/}
    </Modal>
  );
}

export default MyVerticallyCenteredModal;