import React from 'react';

const LoginForm = (props) => {
    return (
        <div>
            <div className="imgcontainer">
                <img src="https://down-yuantu.pngtree.com/element_our/bg/20190704/bg/23750caeedcb7.png?e=1619253946&st=Y2FiYWU5ZmY2MWU2YTg4NDA1MzIzZTUxZWRjMDZkOWY&n=%E2%80%94Pngtree%E2%80%94user+vector+avatar_4830521.png" alt="Avatar" className="avatar" />
            </div>
            <div className="container">
                <label><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="username" value={props.username} onChange={props.handleInputChange} />
                <label><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" value={props.password} onChange={props.handleInputChange} />
            </div>
            <div className="container" style={{backgroundColor:'#f1f1f1'}}>
                <button type="submit" onClick={props.handleLogin}>LOGIN</button>
                {props.error && (
                    <div className="errorContainer">
                        {'User not authorized.'}
                    </div>
                )}
            </div>
        </div>
    );
}

export default LoginForm;