import React from "react";
import { Grid } from "material-ui";
import {Redirect} from 'react-router-dom';

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/marc.jpg";
import logo from "assets/img/logo.png";


import TextField from 'material-ui/TextField';

import Background from '../../assets/img/background.jpg';


import {
  FormLabel,
  FormControl,
  FormGroup,
  FormControlLabel,
  FormHelperText,
} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';


/* material ui next*/
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { CircularProgress } from 'material-ui/Progress';

var sectionStyle = {
  backgroundSize: "cover",
  backgroundImage: `url(${Background})`
};


export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogIn: false,
      username: '',
      password: '',
      accessToken: ''
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onChangeUsername(event){
    this.setState({
      username: event.target.value,
    });
  }
  onChangePassword(event){
    this.setState({
      password: event.target.value,
    });
  }

  handleClick(){
    if(this.state.username=='john'&&this.state.password=='123456'){
      this.setState({
              isLoggedIn: true
            });
          }

          fetch('https://test-mobile.neo-fusion.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'username': 'john',
          'password': '123456',
    })
    
  }).then((response) => response.json())
  .then((data) => {localStorage.setItem('access', JSON.stringify(data).substring(17,53))})
  .catch((error) => {
    console.error(error);
  });

    //alert(this.state.username);
    //alert(this.state.password);
    //alert(localStorage.getItem('access'));
  }

  isAuthenticated() {
    const token =  localStorage.getItem('access');
    /*if(token && token.length > 10 ){
        return true;
    }*/
    return token && token.length > 10;
}


  render(){
    const isAlreadyAuthenticated = this.isAuthenticated();
    return (

      <div className="loginBody" style={sectionStyle}>
        {isAlreadyAuthenticated ?
          <Redirect to ={{pathname: '/main'}} /> :  (
          <Redirect to ={{pathname: '/login'}} />
         )}

      {this.state.isLogIn ?  <Redirect to={{pathname: '/login'}}/> : 
    <div class="outer">
      <div class="middle">
        <div class="inner">
          <div id="loginContainer">
          <div className='logoContainer'>
            <img src={logo} />
          </div>
          <Grid container>
            <ItemGrid xs={12} sm={12} md={12}>
              <RegularCard
                cardTitle="EARLY ALERT MANAGEMENT SYSTEM"
                cardSubtitle=""
                styleHeader={{background: '#760403'}}
                content={
                  <div>
                    <form onSubmit={this.handleClick}>
                      <Grid container>
                        <ItemGrid xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Username"
                            id="username"
                            formControlProps={{
                              fullWidth: true
                            }}
                            value={this.state.username}
                            onChange={this.onChangeUsername}
                          />
                        </ItemGrid>
                      </Grid>
                      <Grid container>
                        <ItemGrid xs={12} sm={12} md={12}>
                          <CustomInput
                            labelText="Password"
                            id="first-name"
                            formControlProps={{
                              fullWidth: true
                            }}
                            value={this.state.password}
                            type="password"
                            onChange={this.onChangePassword}
                            
                          />
                        </ItemGrid>
                      </Grid>

                    <FormControl component="fieldset" id = "checkbox">
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              value="Remember Me"
                              
                            />
                          }
                          label="Remember Me"
                          required
                        />
                        </FormGroup>
                    </FormControl>
                    <Button type="submit" >Log In</Button>
                    </form>
              </div>
            }
          />
        </ItemGrid>
      </Grid>
    </div> 
    </div>
  </div>
</div>
      }
      </div>
    );
  }
}

export default Login;
