import { IoMdClose } from "react-icons/io";
import { useState,useContext } from "react";
import {context} from '../store';
const EditProfile=({prop})=>{
   const [alrt,setAlrt]=useState("");
    const contextApi=useContext(context);
    const [name,setName]=useState(contextApi.userdetails.name);
    function HandleName(e){
        setName(e.target.value);
    }
    const [mobile,setMobile]=useState(contextApi.userdetails.mobile);
    function HandleMobile(e){
        setMobile(e.target.value);
    }
    const [Password,setPass]=useState(contextApi.userdetails.password);
    function HandlePass(e){
        setPass(e.target.value);
    }
    const UpdateDetails=async(e)=>{
        e.preventDefault();
        setAlrt("details updated successfully");
        let newdata={"reg_id":contextApi.userdetails.reg_id,"name":name,"mobile":mobile,"password":Password};
        console.log(newdata);
        try {
            const response = await fetch(`http://localhost:3001/api/registration/update`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ data: newdata }),
            });
      
            const result = await response.json();
            console.log(result.message);
            if(result.message==="updated successfully"){
               
            }else
            {
                // setAlrt("Something went wrong!");
            }
          } catch (error) {
            console.log('Error:', error);
          }
    }
    return<>
        <div className="viewprofile">
                <IoMdClose onClick={()=>prop("")}/>
                <form method="" onSubmit={(e)=>UpdateDetails(e)}>
                <i style={{"color":"green"}}>{alrt}</i>
                    <fieldset  className="editprofile">
                        <legend>Edit Your Profile</legend>
                        <label>Name</label>
                        <input type="text" value={name} onChange={(e)=>HandleName(e)} />
                        <label>Mobile</label>
                        <input type="text" value={mobile} onChange={(e)=>HandleMobile(e)} />
                        <label>Password</label>
                        <input type="text" value={Password} onChange={(e)=>HandlePass(e)} />
                        <button type="submit" className="btn">Update</button>
                    </fieldset>
                </form>
        </div>
    </>
}
export default EditProfile;