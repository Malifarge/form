import React from "react";
import Form from "./components/Form";
import './style/global.css'


const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
let myborderMail = "2px solid red"
let myborderPassword = "2px solid red"

class App extends React.Component{

  constructor(){
    super()

    this.state = {
      email: "",
      password: "",
      rememberMe: false,
      emailIsValid: false,
      passwordIsValid: false,
      isSubmitted: false,
      firstName: "",
      lastName: ""
    }
  }

  handleEmailChange = e =>{
    const mailTest = regex.test(e.target.value)
    if (mailTest){
      this.setState({
        email: e.target.value,
        emailIsValid: true
      })
      myborderMail= "2px solid green"
    }else {
      this.setState({
        email: "",
        emailIsValid: false
      })
      myborderMail= "2px solid red"
    }
  }

  handlePasswordChange = e =>{
    if (e.target.value.length>5){
      this.setState({
        password: e.target.value,
        passwordIsValid: true
      })
      myborderPassword = "2px solid green"
    }else {
      this.setState({
        password: "",
        passwordIsValid: false
      })
      myborderPassword = "2px solid red"
    }
  }

  handleRememberMeChange = e =>{
    this.setState({
      rememberMe : e.target.checked
    })
  }

  handleSubmit = e =>{
    e.preventDefault();
    if (this.state.emailIsValid && this.state.passwordIsValid){
      this.setState({
        isSubmitted : true
      })
    }else {
      this.setState({
        isSubmitted : false
      })
    }
    console.log(this.state);
  }

  handleFirstNameChange = e =>{
    this.setState({
      firstName : e.target.value
    })
  }

  handleLastNameChange = e =>{
    this.setState({
      lastName : e.target.value
    })
  }


  render() {
    return (
      
          <section>
            <h1>Login</h1>
            {this.state.isSubmitted ? <p>Welcom <span>{this.state.firstName} {this.state.lastName}</span> </p> : <Form mailChange={this.handleEmailChange} passwordChange={this.handlePasswordChange} checkChange={this.handleRememberMeChange} submit={this.handleSubmit} firstName={this.handleFirstNameChange} lastName={this.handleLastNameChange} myborderMail={myborderMail} myborderPassword={myborderPassword}/>}
          </section>

    )
  }
}

export default App;
