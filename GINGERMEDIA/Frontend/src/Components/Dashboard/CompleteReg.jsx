import { useRef,useContext } from "react";
import {context} from "../store";
import { useNavigate } from 'react-router-dom';
const CompleteReg=()=>{
    const navigate=useNavigate();
    const contextApi=useContext(context);
    const reg_id=contextApi.userdetails.reg_id;
    let age=useRef();let gender=useRef();let nationality=useRef();let state=useRef();let qualification=useRef();let address=useRef();
    const saveDetails=async(e)=>{
        e.preventDefault();
        const formdata={"reg_id":reg_id,"Age":age.current.value,"Gender":gender.current.value,"Nationality":nationality.current.value,"state":state.current.value,"qualification":qualification.current.value,"address":address.current.value};
            try {
                const response = await fetch('http://localhost:3001/api/details', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ data: formdata }),
                });
          
                const result = await response.json();
                console.log(result.message);
                if(result.message==="Data inserted successfully"){
                    alert("Your Data saved Successfully! Please login Again");
                    navigate("/");
                }
              } catch (error) {
                console.log('Error:', error);
              }
    }
    return<>
        <section className="dashboard-container">
                <p>Complte Your Profile</p>
                <form method="" onSubmit={(e)=>saveDetails(e)}>
                    <label>Age</label>
                    <input type="text" ref={age}/>
                    <label>Gender</label>
                    <input type="text" ref={gender}/>
                    <label>Nationality</label>
                    <input type="text" ref={nationality}/>
                    <label>State</label>
                    <input type="text" ref={state}/>
                    <label>Qualification</label>
                    <input type="text" ref={qualification}/>
                    <label>Address</label>
                    <textarea  ref={address}></textarea>
                    <button className="savedetails">Save</button>
                </form>
        </section>
    </>
}
export default CompleteReg;