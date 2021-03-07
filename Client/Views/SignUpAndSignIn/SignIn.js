import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";

function SignIn(props) {
  const history = useHistory();
  const handleCreteUser = () => {
    history.push("/create_user")
  }

  return (
    <section className="is-fullheight">
    <div className="hero-body has-text-centered">
      <div className="login">
        <img src="https://logoipsum.com/logo/logo-1.svg" width="325px" />
        <form>
          <div className="field">
            <div className="control">
              <input className="input is-medium is-rounded" type="email" placeholder="hello@example.com" autoComplete="username" required />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <input className="input is-medium is-rounded" type="password" placeholder="**********" autoComplete="current-password" required />
            </div>
          </div>
          <br />
          <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
            Login
          </button>
          <br />
          <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
            Login With Google (Coming soon)
          </button>
        </form>
        <br />
        <nav className="level">
          <div className="level-item has-text-centered">
            <div onClick={handleCreteUser}>
              <a>Create User</a>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <a href="#">Create an Account</a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </section>
  )
}

SignIn.propTypes = {

}

export default SignIn

