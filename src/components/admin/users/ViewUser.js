import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { AdminService } from '../../../services';
import { Routes } from "../../../constants";
import { Link } from "react-router-dom";

const ViewUser = () => { 
    const params = useParams(); 
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(()=>{
      console.log("params", params)
      AdminService.viewUser(params.user_id)
      .then((response)=>{
        if(response.success === true) {
           setUser(response.data);
        } else {
          setError(response.message);
        }
      }).catch((error)=>{  
        console.log(error);
        setError("An error has occured!");
      });
    }, []);

    
   
    return (
        <div className="content">
    <section className="content-header">
      <h1>
        View User Data List
      </h1>
    
    </section>
    <div className="box">
            <div className="box-header">
              <h3 className="box-title">Data List With Full View</h3>
            </div>
            
    <div className="box-body">
      <div className='row'>
        <div className='col col-md-12 col-lg-12 col-sm-12'>
            {user && <table id="example1" className="table table-bordered table-striped">
            <tbody>
            <tr>
              <td>First Name</td>
              <td>{user.firstName}</td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td>{user.lastName}</td>
            </tr> 
            <tr>
              <td>Email</td>
              <td>{user.email}</td>
            </tr>       
            </tbody>
          </table>}
          <Link to={Routes.ADMIN_OFFENDER}>Back to user page</Link>
          {error && <div className='alert alert-danger'>{error}</div>}
        </div>
      </div>
      </div>
     </div>
    </div>
   );
};

export default ViewUser;