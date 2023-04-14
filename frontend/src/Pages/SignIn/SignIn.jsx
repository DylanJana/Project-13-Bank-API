import React from 'react';
import './SignIn.css';

// Import method react-router-dom
import {Link} from 'react-router-dom';

export default function SignIn() {
  return (
      <main className="signin t--dark">
        <section className="signin-container flex justify-content--center">
          <div className='signin-form mx--auto'>
            <div className="text--center">
              <i className="fa fa-user-circle"></i>
              <h1 className='title-md mt--md'>Sign In</h1>
            </div>
            <form className='mt--md'>
              <div className="flex flex-column signin-form__field-input">
                <label for="username" className='fw--700'>Username</label>
                <input type="text" id="username" />
              </div>
              <div className="flex flex-column signin-form__field-input">
                <label for="password" className='fw--700'>Password</label>
                <input type="password" id="password" />
              </div>
              <div className="signin-form__field-remember mb--sm">
                <input type="checkbox" id="remember-me" />
                <label for="remember-me">Remember me</label>
              </div>
              <Link to={"/user"} className="signin-btn">
                Sign In
              </Link>
              {/* <button type='submit' className="signin-btn">Sign In</button> */}
            </form>
          </div>
        </section>
      </main>
  )
}
