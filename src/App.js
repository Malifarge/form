import React from "react";
import Form from "./components/Form";
import './style/global.css'


const regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/
let mymail
let mypassword

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
    mymail = document.getElementById("exampleInputEmail1")
    const mailTest = regex.test(e.target.value)
    if (mailTest){
      this.setState({
        email: e.target.value,
        emailIsValid: true
      })
      mymail.classList.remove("is-invalid")
      mymail.classList.add("is-valid")

    }else {
      this.setState({
        email: "",
        emailIsValid: false
      })
      mymail.classList.remove("is-valid")
      mymail.classList.add("is-invalid")
    }
  }

  handlePasswordChange = e =>{
    mypassword=document.getElementById("exampleInputPassword1")
    if (e.target.value.length>5){
      this.setState({
        password: e.target.value,
        passwordIsValid: true
      })
      mypassword.classList.remove("is-invalid")
      mypassword.classList.add("is-valid")
    }else {
      this.setState({
        password: "",
        passwordIsValid: false
      })
      mypassword.classList.remove("is-valid")
      mypassword.classList.add("is-invalid")
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
            {this.state.isSubmitted ? <p>Welcom <span>{this.state.firstName} {this.state.lastName}</span> </p> : <Form mailChange={this.handleEmailChange} passwordChange={this.handlePasswordChange} checkChange={this.handleRememberMeChange} submit={this.handleSubmit} firstName={this.handleFirstNameChange} lastName={this.handleLastNameChange}/>}
          </section>

    )
  }
}

export default App;
