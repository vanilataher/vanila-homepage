import React, {Component} from 'react';
import '../../public/styles/login.css'

import LoginStore from '../stores/login';


export default class Login extends Component {

  loginAPI({ username, password }) {
    const self = this;

    return new Promise((resolve, reject) => {
      fetch(`${self.BASE_URL}/login`, {
        method: 'POST',
        body: JSON.stringify({
          username,
          password,
        }),
      })
        .then(response => response.json())
        .then((responseJson) => {
          console.log(responseJson);
          if (responseJson.status === 'success') {
            resolve(responseJson.data);
          } else {
            reject(responseJson);
          }
        })
        .catch(err => reject(err));
    });
  }

  constructor() {
    super();
    const self = this;

    self.BASE_URL = 'http://app.vanila.io/api';

    setTimeout(() => {
      self.loginAPI({
        username: LoginStore.username,
        password: LoginStore.password
      }).then((data) => {
        window.parent.postMessage({
          event: 'login-with-token',
          loginToken: data.authToken,
        }, 'http://app.vanila.io/chat');
      }).catch(err => console.log(err));
    }, 500);
  }

  login() {
    const self = this;

    self.loginAPI({
      username: LoginStore.username,
      password: LoginStore.password
    }).then((data) => {
      window.parent.postMessage({
        event: 'login-with-token',
        loginToken: data.authToken,
      }, 'http://app.vanila.io/chat');
    }).catch(err => console.log(err));
  }

  render() {
      return (
        <div className="loginWrapper">
          <div className="left-container">
              <div className="container">
                  <div className="row">
                      <h1 className="title">
                          Login Vanila.io
                          <b>
                              &nbsp;community&nbsp;
                          </b>
                          <div>and become big!</div>
                      </h1>
                      <h4 className="sub-title">
                          Sharpen your skills while working<br/>
                          on Cool projects, while you
                          <b>
                              &nbsp;learn, earn and make Friends.
                          </b>
                      </h4>
                  </div>
                  <div className="row rowLoginInput">
                  <div className="form col-md-6">
                      <label className="form-heading">Username</label>
                      <input type="text" name="username" autoComplete="username" value={LoginStore.username} placeholder="johny" onChange={(event) => LoginStore.setUsername(event.target.value)}/>
                  </div>
                  <div className="form col-md-6">
                      <label className="form-heading">Password</label>
                      <input type="password" name="password" autoComplete="new-password" value={LoginStore.password} placeholder="password" onChange={(event) => LoginStore.setPassword(event.target.value)}/>
                  </div>
                  </div>
                  <div className="row">
                    <div className="form col-md-12">
                      <button className="login-button" onClick={this.login}>Login</button>
                      <hr></hr>
                    </div>
                  </div>
                  <div className="rowSocialLogin">
                    <h4 className="sub-title">Or login via social media</h4>
                    <div className="form col-md-5">
                      <button className="btnLoginFb">
                        <img src={require('../../public/img/freelancerAssets/facebook.png')} />
                        Sign in with Facebook
                      </button>
                    </div>
                    <div className="col-md-2 text-center or">
                      or
                    </div>
                    <div className="form col-md-5">
                      <button className="btnLoginTw">
                        <img src={require('../../public/img/freelancerAssets/twitter.png')} />
                        Sign in with Twitter
                      </button>
                    </div>
                  </div>
                </div>
          </div>
          <div className="right-container">
              <div className="wizard-images">
                  <img src={require('../../public/img/freelancerAssets/freelancerAsset1.png')}/>
              </div>
          </div>
        </div>
      );
    }
}
