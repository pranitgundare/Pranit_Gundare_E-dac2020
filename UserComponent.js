import React, { Component } from 'react'
import UserService from '../services/UserService';

export default class UserComponent extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            userid: '',
            username: '',
            password: '',
            email: ''
            
       }
        this.changeuseridHandler = this.changeuseridHandler.bind(this);
        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.adduser = this.adduser.bind(this);
   }
   adduser = (e) => {
     e.preventDefault();
     let user = {userid: this.state.userid, username: this.state.username, password: this.state.password, email: this.state.email};
     console.log('user => '+ JSON.stringify(user));
   
    
    UserService.registerUser(user).then(res =>{
 
           this.props.history.push('/users');
    
    });
  

  }
  
   changeuseridHandler= (event) => {
     this.setState({userid: event.target.value});
   }
   changeusernameHandler= (event) => {
    this.setState({username: event.target.value});
  }
  changepasswordHandler= (event) => {
    this.setState({password: event.target.value});
  }
  changeemailHandler= (event) => {
    this.setState({email: event.target.value});
  }
 
  login(){
       this.props.history.push('/');
   }
    render() {
        return (
            <div>
                
                <div className="container-fluid">
    <div className="register">
    <form>
    <div class="board">
        <span>D</span>
        <span>A</span>
        <span>C</span>
        <span>-</span>
        <span>B</span>
        <span>O</span>
        <span>A</span>
        <span>R</span>
        <span>D</span>
        </div>

    <h1 className="mb-2"><u>Registration</u></h1>
   
    <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">UserId</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="colFormLabel" placeholder="Enter ID" value={this.state.userid} onChange={this.changeuseridHandler}></input>
    </div>
    </div>

    <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Username</label>
    <div class="col-sm-10">
      <input type="username" class="form-control" id="colFormLabel" placeholder="Enter Username" value={this.state.username} onChange={this.changeusernameHandler}></input>
    </div>
    </div>

    <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-10">
      <input type="password" class="form-control" id="colFormLabel" placeholder="Enter Password" value={this.state.password} onChange={this.changepasswordHandler}></input>
    </div>
    </div>
    
  
    <div class="form-group row">
    <label for="colFormLabel" class="col-sm-2 col-form-label">Email</label>
    <div class="col-sm-10">
      <input type="email" class="form-control" id="colFormLabel" placeholder="Enter Email" value={this.state.email} onChange={this.changeemailHandler}></input>
    </div>
    </div>
  
   <button class="btn btn-outline-info btn-lg btn-block mt-2" type="submit" onClick={this.adduser}>Register</button>
   <div><button class="btn btn-outline-info btn-lg btn-block mt-2" onClick={this.login.bind(this)}>Login</button></div>
    </form>
    </div>
    </div>
</div>
        )
    }
}

