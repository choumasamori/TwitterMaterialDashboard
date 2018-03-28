import React from 'react';
import {
    withStyles,
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Avatar
  } from "material-ui";
import Divider from 'material-ui/Divider';
import {Redirect} from 'react-router-dom';
import { Grid } from "material-ui";
import {
    ProfileCard,
    RegularCard,
    TasksCard,
    Button,
    CustomInput,
    ItemGrid
  } from "components";
  import {
    FormLabel,
    FormControl,
    FormGroup,
    FormControlLabel,
    FormHelperText,
  } from 'material-ui/Form';

  //bootstrap & jquery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';


export class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            completed: 0,
            menu: false,
            tweets: [],
            file:"null",
            tweet: '',
            people: [],
        };
        this.onChangeTweet = this.onChangeTweet.bind(this);
        this.getTweets = this.getTweets.bind(this);
    }

    getTweets(){
        fetch('https://test-mobile.neo-fusion.com/data', {
            method: 'GET',
            headers: {
              'Access-Token': localStorage.getItem('access'),
            }
      }).then(results => results.json()).then(data => {let tweets = data.map((item)=>{
            return(
                <div key={item.id} className="tweetListWrapper">
                    <RegularCard
                    cardTitle="John"
                    cardSubtitle="john"
                    headerColor="blue"
                    avatar={<Avatar src="http://fanaru.com/random/image/thumb/160391-random-seriously-face-avatar.jpg"/>}
                    content={
                        <div className="tweetDetail">
                        <img src={item.thumbnail_url}/>
                        <p>
                           {item.summary}
                        </p>
                    </div>
                    }
                    >
                    </RegularCard>
                 </div>
            );
        });
        this.setState({
            tweets: tweets,
        });
    }).catch((error) => {
        console.error(error);
      });
      this.setState(({tweet: ""}));

      //rekomendasi friends 
      fetch('https://randomuser.me/api/?results=5')
        .then(results => results.json())
        .then(data => {let people = data.results.map((item, index)=>{
        return(
        <div key={index} className="followerEnter">
            <ItemGrid xs={12} sm={12} md={12}>  
                <ProfileCard
                    avatar={item.picture.medium}
                    subtitle={item.login.username}
                    title={item.name.first}
                    footer={
                        <Button color="primary" round>
                            Follow
                        </Button>
                    }
                />
            </ItemGrid>
        </div>
        );
        });
        this.setState({
            people: people,
        });
    })
    }


    componentDidMount() {
        this.getTweets();
      }
    
    onChangeTweet(e){
        this.setState({tweet: e.target.value});
    }

    handleSubmit(e){
        let image = document.getElementById("profilePictures").files[0];
        let form = new FormData();
        form.append("file", image);
        console.log(localStorage.getItem('access'));
        console.log( form.get('file'));
        fetch('http://test-mobile.neo-fusion.com/data/create', {
            method: 'POST',
            headers: {
              'Access-Token': localStorage.getItem('access'),
            },
            body: form
      }).then((response) => response.json())
      .then((data)=> {
          console.log(data);
          
            fetch('https://test-mobile.neo-fusion.com/data/'+data.id+'/update', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Access-Token': localStorage.getItem('access'),
                },
                body: JSON.stringify({
                    'summary': this.state.tweet,
                    'detail': this.state.tweet,
              })
          }).then(response => response.json()).then((data =>{
              this.getTweets();
          }))
    }).catch((error) => {
        console.error(error);
      });

        e.preventDefault();
    }
    isAuthenticated() {
        const token =  localStorage.getItem('access');
        /*if(token && token.length > 10 ){
            return true;
        }*/
        return token && token.length > 10;
    }
    isLogout(){
        localStorage.removeItem('access');
        return <Redirect to ={{pathname: '/'}} />
    }
    render(){
        const isAlreadyAuthenticated = this.isAuthenticated();
        return(
    <div>
            {!isAlreadyAuthenticated ?
            <Redirect to ={{pathname: '/'}} /> : 
        <div className="row">
        
        <Grid container>
            <div className="column">
            <ItemGrid xs={12} sm={12} md={12}>
                <div className="profile">
                    <ProfileCard 
                        avatar="http://fanaru.com/random/image/thumb/160391-random-seriously-face-avatar.jpg"
                        subtitle="john"
                        title="John"
                        description="I am the great John, duh."
                    />
                </div>
            </ItemGrid>
            </div>
            <div className="column">
            <ItemGrid xs={12} sm={12} md={12}>
                    <div>
                    <Card>
                        <div className="inputWrapper">
                            <form name="myForm" method="POST" onSubmit={(e) => this.handleSubmit(e)}encType="multipart/form-data">
                                <br />
                                <div className="form-group">
                                    <label>Write Something</label>
                                    <textarea
                                        className="form-control" rows="5" id="comment" name="tweetText"  maxLength="500"
                                        value={this.state.tweet} onChange={this.onChangeTweet} required>
                                    </textarea>
                                </div>

                                <input type="file" id="profilePictures" name="file" ref="file" className="fileInput" />
                                <Button color="primary" round type="submit"> TWIT </Button>
                            </form>
                        </div>
                    </Card>
                    </div>
                </ItemGrid>

                
                 <ItemGrid xs={12} sm={12} md={12}>
                    <div className="contentTWIT">
                        {this.state.tweets}
                     </div>
                 </ItemGrid>
                </div>
                 <div className="column">                 
                <ItemGrid xs={12} sm={12} md={12}>
                    <div className="followWrapper">
                        {this.state.people} 
                    </div>
                </ItemGrid>
                </div>
            </Grid>
        </div>
              }
    </div>
        );
    }
}
export default Main;
