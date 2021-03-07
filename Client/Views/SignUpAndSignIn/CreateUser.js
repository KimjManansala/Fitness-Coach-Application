import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import axios from 'axios';
// import Select from 'react-select/src/Select';

const options = [
    {value: 'trainer', label: 'Trainer'},
    {value: 'client', label: 'client'}
]

function CreateUser(props) {
    const history = useHistory();
    const handleCreteUser = () => {
        history.push("/create_user")
    }

    const [userEmail, setUserEmail] = useState('');
    const [userPasword, setUserPasword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [type, setType] = useState('')

    const handleSubmit = () => {
        axios.post('/create/user', {
            user: {
                email: userEmail,
                fName: firstName,
                lName: lastName,
                password: userPasword,
                type,
            }
        }).then((res) => {
            console.log('res')
        })
        .catch((error) => {
            console.log('error')
        })
    }

    return (
        <section className="is-fullheight">
            <div className="hero-body has-text-centered">
                <div className="login">
                    <img src="https://logoipsum.com/logo/logo-1.svg" width="325px" />
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input is-medium is-rounded"
                                    type="email" placeholder="hello@example.com"
                                    autoComplete="username"
                                    required
                                    value={userEmail}
                                    onChange={(event) => {setUserEmail(event.target.value)}}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                            <input
                                className="input is-medium is-rounded"
                                type="password" placeholder="**********"
                                autoComplete="current-password"
                                required
                                value={userPasword}
                                onChange={(event) => {setUserPasword(event.target.value)}}
                            />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input is-medium is-rounded"
                                    type="text" placeholder="John"
                                    required
                                    value={firstName}
                                    onChange={(event) => {setFirstName(event.target.value)}}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <input
                                    className="input is-medium is-rounded"
                                    type="text" placeholder="lastname"
                                    onChange={(event) => {setLastName(event.target.value)}}
                                    required
                                />
                            </div>
                        </div>

                        <br />
                        <button className="button is-block is-fullwidth is-primary is-medium is-rounded" type="submit">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

CreateUser.propTypes = {

}

export default CreateUser

