import React, { Component } from 'react'
import './App.css'
export default class Login extends Component {
    
    render() {
        return (
            <div className="login">
            <label>
                User Name <br/>
                <input type="text"/> <br/>
            </label> <br/>

            <label>
                Password <br/>
                <input type="password"/>
            </label> <br/> <br/>
            <button type="button" className="btn btn-dark"  onClick={this.props.logout}>Log out</button>

            
            
             
         </div>
        )
    }
}
