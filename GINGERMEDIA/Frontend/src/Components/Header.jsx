import './Header.css';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import { useState } from 'react';
const Header=()=>{
    const [loginv,setLogin]=useState("");
    const login=(v)=>{
        setLogin(v);
    }
    return<>
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://www.gingermediagroup.com/wp-content/uploads/2022/10/gmg-logo.png"/>
                </div>
                <ul className="header-content">
                    <li  onClick={()=>login("signup")}>SignUp</li>
                    <li onClick={()=>login("login")}>Login</li>
                    {loginv==="login"&&<LoginPage prop={login}/>}
                    {loginv==="signup"&&<SignUpPage prop={login}/>}
                </ul>
            </nav>
        </header>
    </>
};
export default Header;