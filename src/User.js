import React, { Component } from 'react'
import './User.css'
export default class User extends Component {
    state={
        name: ''
    }
   
   handle=(e)=>{
       console.log(e.target.name)
       this.setState({name:e.target.value.toUpperCase().substr(0,5)})
   }

    render() {
        return (
            <div className="signup">
                <label>
                    Name <br/>
                    <input type="text" value={this.state.name} onChange={this.handle}/><br/>
                </label> <br/>
                <label>
                    Email Id <br/>
                    <input type="text" /> <br/>
                </label> <br/>
                <label>
                    New Password <br/>
                    <input type="password"/> <br/>
                </label> <br/>
                <label>
                    Confirm Password <br/>
                    <input type="password"/> <br/>
                </label> <br/>
                <button className="nsignup btn btn-dark">Signup</button>
                <button className="nsignup btn btn-dark" onClick={this.props.login}>Login</button>
                
            </div>
        )
    }
}
