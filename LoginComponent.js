import React, { Component } from 'react'
import UserService from '../services/UserService';


export default class LoginComponent extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            
            username: '',
            password: '',
        }
        this.changeuserpasswordHandler = this.changepasswordHandler.bind(this);
        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.adduser = this.adduser.bind(this);
   }
   adduser = (e) => {
     e.preventDefault();
     let user = {username: this.state.username, password: this.state.password};
     console.log('user => '+ JSON.stringify(user));
   
    
    UserService.loginUser(user).then(res =>{
 
           this.props.history.push('/loginusers');
    
    });
  

  }
  
   
   changeusernameHandler= (event) => {
    this.setState({username: event.target.value});
  }
  changepasswordHandler= (event) => {
    this.setState({password: event.target.value});
  }
  
 
 register (){
       this.props.history.push('/users');
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

    <h1 className="mb-2"><u>LogIn</u></h1>
   
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
    
   <button class="btn btn-outline-info btn-lg btn-block mt-2" type="submit" onClick={this.adduser}>LogIn</button>
   <div><button class="btn btn-outline-info btn-lg btn-block mt-2" onClick={this.register.bind(this)}>Register</button></div>
    </form>
    </div>
    </div>
</div>
        )
    }
}

