import {Component} from "react";
import {Navbar,NavDropdown,Nav,Button,Modal} from "react-bootstrap";
import {BrowserRouter as Router, NavLink, Route,Link} from "react-router-dom";
import Welcome from "./Home";
import nav from './Nav.css'
import Modals from './Loginmodal'
import Signupmodal from "./Signupmodal";
export default class Na extends Component {
      constructor(props) {
    super(props);
    this.state = {
     token : localStorage.getItem('token'),
     popup : false,
        popupS : false

    };
    console.log(props)

  }

show = ()=>{
          this.setState({
              popup : true
          })
}
hide = ()=>{
          this.setState({
              popup : false
          })
}
showS = ()=>{
          this.setState({
              popupS : true
          })
}
hideS = ()=>{
          this.setState({
              popupS : false
          })
}

    render() {

        console.log(this.props.logged_in)
        console.log(this.state.popup)
        return(
            <Navbar className={nav} collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Django & React Auth</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
  <Link className="nav-link" to="/Welcome" ><span className="navItem"> Home</span></Link>

							<Nav.Link to="/blog"> <span className="navItem">Blog</span></Nav.Link>
							<Nav.Link to="/about"><span className="navItem">A propos</span></Nav.Link>
							<Nav.Link to="/contact"><span className="navItem">Contact</span></Nav.Link>

    </Nav>

        <Nav >
                  {this.props.logged_in ? <Button size="sm"  variant="outline-danger"><Link  className="nav-link" onClick={this.props.handle_logout} >Logout</Link> </Button>: <Button variant="outline-danger" onClick={this.show}><Link className="nav-link" >Login</Link></Button> }

        </Nav>
 <Nav>
        {!this.props.logged_in ? <Button  variant="outline-info"><Link className="nav-link" onClick={this.showS}>Signup</Link></Button>: <Link/>}
    </Nav>
                <Modals
                    logged_in={this.props.logged_in}
                    first_name={this.props.first_name}
                    handle_login={this.props.handle_login}
                show={this.state.popup}
                  onHide={this.hide}/>
                  <Signupmodal
                      first_name={this.props.first_name}
                    logged_in={this.props.logged_in}
                    handle_signup={this.props.handle_signup}
                show={this.state.popupS}
                  onHide={this.hideS}/>

  </Navbar.Collapse>



</Navbar>
        )
    }
}
