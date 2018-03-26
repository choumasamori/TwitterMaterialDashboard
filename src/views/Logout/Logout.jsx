import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export class Logout extends Component{

    render(){
        localStorage.removeItem('access');
        return <Redirect to ={{pathname: '/'}} />
        return(
            <div>
                
            </div>
        )
    }
}