import React, { Component } from 'react';
import Modal from './Loginmodal'

export default class Home extends Component {


  render() {
	  if (this.props.logged_in) {
		  return (
			  <div>
				  <p>Welcome {this.props.first_name}</p>

			  </div>
		  )
	  } else {
		  return (

			  <div>
				  {/*<p>Welcome Home</p>*/}
				  <Modal/>
			  </div>
		  )
	  }
  }
}