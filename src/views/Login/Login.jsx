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

export class Login extends React.Component{
  componentDidMount(){
    this.hideEverything();
  }
  hideEverything(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("footer").style.display = "none";
  }
  render(){
    return (
      <div>
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
