import logo from './logo.svg';
import {BrowserRouter as Router, NavLink, Route} from "react-router-dom";
import Welcome from "./Components/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import Na from "./Components/Navbar";
// import Footer from "./Components/Footer";
import Login from "./Components/Login";
import style from './App.css'
import Signup from "./Components/Signup";
import image from './backg.jpg'
import React, { Component } from 'react';
class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      email: localStorage.getItem('email') ,
      first_name : localStorage.getItem('first_name')
    };
  }

      handle_login = (e,data) => {
     console.log('i am in ! ')
          console.log('damn ' + e)
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
          if (json.non_field_errors || !json.user) {
               const err = json.non_field_errors[0];
               alert(err);
                 throw new Error(err);

              } else {
              console.log(json)
              console.log(json.token)
              localStorage.setItem('token', json.token);
              localStorage.setItem('email', json.user.email);
              localStorage.setItem('first_name', json.user.first_name);
              this.setState({
                  logged_in: true,
                  displayed_form: '',
                  email: json.user.email,
                  first_name : json.user.first_name
              });
          }
        console.log(this.state)

      })
        .catch((err)=>{
          console.log(err)
    })
  };

   handle_signup = (e,data) => {
           e.preventDefault();

       console.log(data)
     if (data.password != data.password2){
          e.preventDefault();
         console.log('hahaha got ya !')
        alert('password must matche !')
        return ;
    }
    else {

         fetch('http://localhost:8000/auth/users/', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
         })
             .then(res => res.json())
             .then(json => {
                 console.log(json)
                 if (!json.token) {
                     console.log(json)
                     if (json.email) {
                         const err = json.email;
                         alert(json.email)
                         throw new Error(err);

                     }
                     if (json.password) {
                         const err = json.password;
                         alert(json.password)
                         throw new Error(err);

                     }
                 }

                 if (json.non_field_errors) {
                     const err = json.non_field_errors[0];
                     alert(err);
                     throw new Error(err);

                 } else {
                     console.log(json.token)
                     localStorage.setItem('token', json.token);
                     localStorage.setItem('email', json.email);
                     localStorage.setItem('first_name', json.first_name);

                     this.setState({
                         logged_in: true,
                         displayed_form: '',
                         email: json.email,
                         first_name : json.first_name

                     });
                 }
                 console.log(this.state)


             })
             .catch((err) => {
                 console.log(err)
             })
     }
  };

 handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, first_name: '',email:'' });
  };


      render(){
          console.log(this.state)
          return (
    <div className="App" >
    <Router>
      <header>
					<Na first_name={this.state.first_name} handle_login={this.handle_login}  handle_signup={this.handle_signup} logged_in={this.state.logged_in} handle_logout={this.handle_logout}/>

      </header>
     <Route  exact path="/Welcome" render={(props)=>(<Welcome logged_in={this.state.logged_in} first_name={this.state.first_name}/>)} />
     <Route  exact path="/Login"  render={(props) => (
    <Login  handle_login={this.handle_login} />

  )}/>
  <Route  exact path="/Signup"  render={(props) => (
    <Signup  handle_signup={this.handle_signup} />

  )}/>
   <Route/>
    </Router>
        {/*<Footer/>*/}

    </div>
  )
      }

}

export default App;
