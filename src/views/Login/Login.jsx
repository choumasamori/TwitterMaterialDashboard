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

export class Login extends React.Component{
  constructor(props){
    super(props);
    this.state={
      isLogIn: false,
      email: '',
      password: '',
    };
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onChangeEmail(event){
    this.setState({
      email: event.target.value,
    });
  }
  onChangePassword(event){
    this.setState({
      password: event.target.value,
    });
  }
  handleClick(){
    if(this.state.email=='john'&&this.state.password=='123456'){
      this.setState({
        isLogIn: true
      });
    }else{
      this.setState({
        email: '',
        password: '',
      });
    }
  }
  render(){
    return (
      <div>
      {this.state.isLogIn ?  <Redirect to={{pathname: '/dashboard'}}/> : 
      <div id="loginContainer">
      <Grid container>
        <ItemGrid xs={12} sm={12} md={8}>
          <RegularCard
            cardTitle="Admin Login"
            cardSubtitle=""
            content={
              <div>
                <Grid container>
                  <ItemGrid xs={12} sm={12} md={4}>
                    <CustomInput
                      labelText="Email address"
                      id="email-address"
                      formControlProps={{
                        fullWidth: true
                      }}
                      value={this.state.email}
                      onChange={this.onChangeEmail}
                    />
                  </ItemGrid>
                </Grid>

                <Grid container>
                  <ItemGrid xs={12} sm={12} md={4}>
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
              </div>
            }
            footer={<Button color="primary" onClick={this.handleClick}>Log In</Button>}
          />
        </ItemGrid>
      </Grid>
    </div> 
      }
      </div>
    );
  }
}

export default Login;
