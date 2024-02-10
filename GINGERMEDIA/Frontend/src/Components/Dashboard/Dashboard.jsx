import '../Header.css';
import './Dashboard.css';
import { RiLogoutCircleRLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import CompleteReg from './CompleteReg';
import DashboardList from './DashboardList';
import { useContext,useState,useEffect } from 'react';
import { context } from '../store';
const Dashboard=()=>{
   const [val,upd]=useState(false);
    const obj=useContext(context);
    // console.log(obj.userdetails);
    let reg_id=obj.userdetails.reg_id;
    if(obj.sessn==="false"){
        window.location="/";
    }
    function logout(){
        obj.sessn="false";
        window.location="/";
    } 
     // store details data
     const GetDetailsData=async()=>{
        try {
            const response = await fetch(`http://localhost:3001/api/details/reg_id/${reg_id}`);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json(); // Handle potential parsing errors
          
            // Process the registration data here (iterate through `result`)
             // Or use the data in your application
             if(result.length>0){
                result.map((dt)=>(obj.Details=dt));
                upd(true);
                obj.isDetails="true";
                console.log(result);

             }else
             {  upd(false);
                obj.isDetails="false"; 
             }
           
          } catch (error) {
            console.log('Error:', error);
            // Handle errors gracefully, e.g., display an error message to the user
          }
    }
    GetDetailsData();
    //stored end details data
    return<>
        <header>
            <nav className="navbar">
                <div className="logo">
                    <img src="https://www.gingermediagroup.com/wp-content/uploads/2022/10/gmg-logo.png"/>
                </div>
                <ul className="header-content">
                    <li><CgProfile/></li>
                    <li><RiLogoutCircleRLine onClick={()=>logout()}/></li>
                </ul>
            </nav>
        </header>
        {val==true&&<DashboardList/>}
        {val==false&&<CompleteReg/>}
      {/* { console.log(obj.isDetails)} */}
        
    </>
};
export default Dashboard;