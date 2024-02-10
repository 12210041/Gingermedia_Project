import './LoginPage.css';
import { useRef,useState} from 'react';
import { IoCloseCircleOutline } from "react-icons/io5";
const SignUpPage=({prop})=>{
    const [pcheck,setPass]=useState("");
    let name=useRef(),mobile=useRef(),email=useRef(),password=useRef(),cPass=useRef();
    const formdata=()=>{
     let data={"name":name.current.value,"email":email.current.value,"password":password.current.value,"mobile":mobile.current.value};
        return data;
    }   
    const Signup=async(e)=>{
        e.preventDefault();
            try {
                const response = await fetch('http://localhost:3001/api/registration', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ data: formdata() }),
                });
          
                const result = await response.json();
                setPass(result.message);
              } catch (error) {
                setPass('Error:', error);
              }
    }
    return<>
            <div className="login">
            <IoCloseCircleOutline onClick={()=>prop("")}/>
                <p>User Registration Form</p>
                <form method="" onSubmit={(e)=>Signup(e)}>
                    <label>Full Name</label>
                    <input type="text" ref={name} />  
                    <label>Mobile Number</label>
                    <input type="text" ref={mobile}/> 
                    <label>Enter Email id</label>
                    <input type="email" ref={email}/>
                    <label>Password</label>
                    <input type="Password" ref={password}/>
                    <label>Confirm password</label>
                    <input type="Password" ref={cPass}/>
                    <i style={{"color":"yellow","background":"red"}}>{pcheck}</i>
                    <button type="submit">Login</button>
                </form>
            </div>
    </>
}
export default SignUpPage;