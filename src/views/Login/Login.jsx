import React from "react";
import { Grid } from "material-ui";

import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/marc.jpg";

import Checkbox from 'material-ui/Checkbox';


const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginBottom: 16,
  },
};

export class Login extends React.Component{
  componentDidMount(){
    
  }
  hideEverything(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("footer").style.display = "none";
  }
  render(){
    return (
      <div id="loginContainer">
        <Grid container>
          <ItemGrid xs={12} sm={12} md={8}>
            <RegularCard
              cardTitle="EARLY ALERT MANAGEMENT SYSTEM"
              cardSubtitle=""
              content={
                <div>
                  <Grid container>
  
  
                    <ItemGrid xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Username"
                        id="username"
                        formControlProps={{
                          fullWidth: true
                        }}
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
                      />
                    </ItemGrid>
                  </Grid>

                <Checkbox
                  label="DSASSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSDADSADA"
                />
  
                </div>
              }
              footer={<Button color="primary">Log In</Button>}
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default Login;
