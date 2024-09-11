import React, { Component } from "react";
import axios from "axios";
import Navbar from "../global-components/navbar";
import Page_header from "../global-components/page-header";
import Footer_v2 from "../global-components/footer-v2";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

  componentDidMount() {
    const $ = window.$;

    $("body").addClass("bg-gray");
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const Admin = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email
    };

    axios
      .post("http://localhost:5000/Admin/register", Admin)
      .then((res) => {
        alert(res.data);

        if (res.data === "Registration Successful"){ 
            localStorage.setItem('sd-user', Admin.username);
            window.location = "/"};
      })
      .catch((res) => alert(res.data));
  }

  render() {
    return (
        <>
        <Navbar />
      <Page_header headertitle="Sign Up" />
      
      <div className="signin-page-area pd-top-100 ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-7">
              <form className="signin-inner">
                <div className="row">
                  <div className="col-12">
                    <label className="single-input-inner style-bg-border">
                      <input
                        type="text"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        required
                      />
                    </label>
                  </div>

                  <div className="col-12">
                    <label className="single-input-inner style-bg-border">
                      <input
                        type="text"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        required
                      />
                    </label>
                  </div>

                  <div className="col-12">
                    <label className="single-input-inner style-bg-border">
                      <input
                        type="text"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        required
                      />
                    </label>
                  </div>
                  <div className="col-12 mb-4">
                    <button
                      className="btn btn-base w-100"
                      onClick={this.onSubmit}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer_v2 />
      </>
    );
  }
}

export default SignUp;
