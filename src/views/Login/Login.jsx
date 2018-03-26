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


import Checkbox from 'material-ui/Checkbox';

import TextField from 'material-ui/TextField';

import Background from '../../assets/img/background.jpg';


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
        isLogIn: true
      });
    }else{
      this.setState({
        username: '',
        password: '',
      });
    }
  }
  render(){
    return (
      <div className="loginBody" style={sectionStyle}>
      {this.state.isLogIn ?  <Redirect to={{pathname: '/dashboard'}}/> : 
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
                <div id="checkbox">
                  <Checkbox
                  />Remember Me
                </div>
              </div>
            }
            footer={<Button style={{background: '#E63313'}} color="primary" onClick={this.handleClick}>Log In</Button>}
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
