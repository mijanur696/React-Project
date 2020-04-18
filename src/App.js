import React, { Component } from 'react'
import Login from './Login'
import User from './User'

export default class App extends Component {
    state={
        islogin : true
    }

    mylogin=()=>{
        this.setState({islogin:false})
    }
    mylogout=()=>{
        this.setState({islogin:true})
    }
    render() {
       const islogin =this.state.islogin;
        return (
           <div>
              { islogin ? <User login={this.mylogin}/> :  <Login logout={this.mylogout}/>}
              
           </div>
        )
    }
}





