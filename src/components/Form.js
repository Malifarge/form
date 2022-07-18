import React from "react";



class Form extends React.Component{
    render() {
        return (
            <form onSubmit={this.props.submit}>
            
            {/* Firstname Name */}

            <div className="form-row">

              {/* Firstname */}


                  <div className="col-md-6 mb-3">
                    <label for="validationCustom01">First name</label>
                    <input type="text" className="form-control" id="validationCustom01" placeholder="First name..." required onChange={this.props.firstName}/>
                    <div className="valid-feedback">
                      Looks good!
                  </div>

              {/* Name */}

                  </div>
                  <div className="col-md-6 mb-3">
                    <label for="validationCustom02">Last name</label>
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Last name..." required onChange={this.props.lastName}/>
                    <div className="valid-feedback">
                      Looks good!
                    </div>
                  </div>
              </div>

            {/* Mail */}

            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email"  className="form-control" style={{
                border: this.props.myborderMail
              }} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email..." onChange={this.props.mailChange}/>
              <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>

            {/* Password */}

            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" style={{
                border: this.props.myborderPassword
              }} id="exampleInputPassword1" placeholder="Enter Password..." onChange={this.props.passwordChange}/>
            </div>

            {/* Remember me */}


            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={this.props.checkChange}/>
              <label className="form-check-label" for="exampleCheck1">Remember me</label>
            </div>

            {/* Submit */}

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        );
    }
}

export default Form