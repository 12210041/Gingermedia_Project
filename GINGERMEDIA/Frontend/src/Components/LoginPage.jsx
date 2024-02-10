import './LoginPage.css';
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoMdRefresh } from "react-icons/io";
import { useState,useRef,useContext } from 'react';
import { context } from './store';
import { useNavigate } from 'react-router-dom';

const LoginPage=({prop})=>{
        const navigate = useNavigate();
        let session=useContext(context);//establish session for login
        let email=useRef();
        let password=useRef();
        const captaval="ABCDEFGHIJKLM1234abcdefgji";
        const captaDisp=()=>{
            let c="";
                for(let i=0;i<5;i++)
                {
                    let temp=Math.round(Math.random()*captaval.length);
                    c=c+captaval.charAt(temp);
                }
                return c;
        }
        const [capta,setCapta]=useState(captaDisp);
        const captaUpdate=()=>{
            setCapta(captaDisp);
        }
        const [checkCredential,setcheckCredential]=useState("");
        const LoginValidation=async(e)=>{
            e.preventDefault();
            try {
                const response = await fetch(`http://localhost:3001/api/registration/email/${email.current.value}`);
                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json(); // Handle potential parsing errors
              
                // Process the registration data here (iterate through `result`)
                if(result.length>0){
                    result.map((d)=>(session.userdetails=d));
                    if(session.userdetails.password===password.current.value)
                    { session.sessn="true";
                    console.log("loged in");
                    navigate("userdashboard");
                    }else{
                        session.sessn="false";
                        setcheckCredential("invalid credential");
                    }
                }else{
                    setcheckCredential("Invalid Credential");
                } // Or use the data in your application
                
              } catch (error) {
                console.log('Error:', error);
                // Handle errors gracefully, e.g., display an error message to the user
              }
            
        }
    return<>
            <div className="login">
            <IoCloseCircleOutline onClick={()=>prop("")}/>
                <p>User Login</p>
                <i style={{"color":"red"}}>{checkCredential}</i>
                <form onSubmit={(e)=>LoginValidation(e)} action="jj" method="GET">
                    <label>Email Id</label>
                    <input type="email" ref={email} />
                    <label>Password</label>
                    <input type="password" ref={password} />
                    <div className="captacontainer">
                        <input type="text" value={capta} disabled className="capta" />
                        <IoMdRefresh onClick={()=>captaUpdate()}/>
                        <input type="text" className="capta" />
                    </div>
                    <button type="submit">Login</button>
                    
                </form>
            </div>
    </>
}
export default LoginPage;