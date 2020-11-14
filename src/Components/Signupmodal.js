import React, { Component } from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import Signuo from "./Signup";
import styles from './Signupmodal.css'
function MyVerticallyCenteredModal2(props) {
  console.log(props)
  if(props.logged_in){
    return (
        <div></div>
    )
  }

  return (

    <Modal
        style={{height: '600px'}}
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
           // dialogClassName='custom-dialog'
           contentClassName="modal"
            transparent={true}
    >
      <Modal.Header closeButton >
        <Modal.Title  id="contained-modal-title-vcenter">
         <span>Signup</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Signuo handle_signup={props.handle_signup}/>
      </Modal.Body>
      {/*<Modal.Footer>*/}
      {/*  <Button onClick={props.onHide}>Close</Button>*/}
      {/*</Modal.Footer>*/}
    </Modal>
  );
}

export default MyVerticallyCenteredModal2 ;