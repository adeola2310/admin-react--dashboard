import React  from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import { useForm } from "react-hook-form";





const Login = (props) => {
    const {handleSubmit, register, errors} = useForm();
    const onSubmit = values => {
       props.history.push('/dashboard');
        console.log(values)};

    return (
        <div className="login__card">
            <form className="login__details" onSubmit={handleSubmit(onSubmit)}>
                <div className="login__header">
                    <h3>please login</h3>
                </div>
                <input
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    ref={register({
                        required: "email is required",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "invalid email address"
                        }
                    })}
                    />
                <p style={{color: 'red', fontSize: '11px', marginTop: '-10px'}}>{errors.email && errors.email.message}</p>

                <input
                    type="password"
                    placeholder="Enter Password"
                    name="password"
                    ref={register({
                        required: "Required",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!_%*?&]{6,}$/,
                            message: "password must have a of Minimum eight characters, at least one number and one special character"
                        }
                    })}
                />
                <p style={{color: 'red', fontSize: '11px', marginTop: '-10px'}}>{errors.password && errors.password.message}</p>
                <button className="login__button" type="submit">Login</button>
                <div className="otthers">
                    <Link to="">Dont have an account yet? Sign up</Link>
                    <Link to="">Forgot password</Link>
                </div>
            </form>

        </div>
    );
}

export default Login;


