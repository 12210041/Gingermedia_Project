import { IoMdClose } from "react-icons/io";
import { useContext } from "react";
import {context} from '../store';
const Viewprofile=({prop})=>{
    const cotextApi=useContext(context);
    return<>
        <div className="viewprofile">
                <IoMdClose onClick={()=>prop("")}/>
                <table width={"100%"}>
                    <tr>
                        <td>Name:</td>
                        <td>{cotextApi.userdetails.name}</td>
                    </tr>
                    <tr>
                        <td>Mobile:</td>
                        <td>{cotextApi.userdetails.mobile}</td>
                        
                    </tr>
                    <tr>
                        <td>Email id:</td>
                        <td>{cotextApi.userdetails.email}</td>
                    </tr>
                    <tr>
                        <td>Age:</td>
                        <td>{cotextApi.Details.Age}</td>
                    </tr>
                    <tr>
                        <td>Qualifications:</td>
                        <td>{cotextApi.Details.qualification}</td>
                    </tr>
                    <tr>
                        <td>Nationality:</td>
                        <td>{cotextApi.Details.Nationality}</td>
                    </tr>
                    <tr>
                        <td>State:</td>
                        <td>{cotextApi.Details.state}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{cotextApi.Details.address}</td>
                    </tr>
                </table>
        </div>
    </>
}
export default Viewprofile;