import React, { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import { AdminService } from "../../../services";
import { Routes } from "../../../constants";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

 const EditUser= (props) => {
  console.log(props,"props")
  const params = useParams();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");;
  const [firstnameError, setFirstNameError] = useState("");
  const [lastnameError, setLastNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passError, setPassError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");



  useEffect( async()=>{
    const  r = await AdminService.viewUser(params.user_id);
         console.log("data",r);
          setFirstName(r.data.firstName);
          setLastName(r.data.lastName);
          setEmail(r.data.email); 
      }, [params]);

  const handleFirstNameChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val.trim() === "") {
      setFirstNameError("First Name is required");
    } else {
      setFirstNameError("");
    }
    setFirstName(val.trim());
  };

  const handleLastNameChange = (e) => {
    e.preventDefault();
    const val = e.target.value;
    if (val.trim() === "") {
      setLastNameError("Last Name is required");
    } else {
      setLastNameError("");
    }
    setLastName(val.trim());
  };

  const handleEmailChange = (e) => {
    e.preventDefault();
    const val = e.target.value.trim();
    if (val === "") {
      setEmailError("Email is required");
    } else if (!emailRegex.test(val)) {
      setEmailError("Email is not valid");
    } else {
      setEmailError("");
    }

    setEmail(val);
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    const val = e.target.value.trim();
    if (val === "") {
      setPassError("password is required");
    } else {
      setPassError("");
    }
    setPassword(val);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    if (email === "") {
      setEmailError("email is required");
      valid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Not a valid email");
      valid = false;
    } else {
      setEmailError("");
    }

    if (firstname === "") {
      setFirstNameError("First Name is required");
      valid = false;
    } else {
      setFirstNameError("");
    }
    
    if (lastname === "") {
      setLastNameError("Last Name is required");
      valid = false;
    } else {
      setLastNameError("");
    }


    if (password === "") {
      setPassError("password is required");
      valid = false;
    } else {
      setPassError("");
    }


    if(!valid){
      setPassError("Form is not valid");
      return;
    }else{
     setPassError("")
    AdminService.editUser({firstName:firstname,lastName:lastname,email:email, password:password}, params.user_id)
        .then((response)=>{
          if(response.success === true) {
            setFirstName(response.message.firstname);
            setLastName(response.message.lastname);
            setEmail(response.message.email);
            setPassword(response.message.passsword);
             setSuccessMessage(response.message);
          } else {
              setPassError(response.message);
          }
        }).catch((error)=>{  
          console.log(error);
          setPassError("An error has occured!");
        });
        e.target.reset();
    }
  };

  return (
    <div className="login-box-body">
      <p className="login-box-msg">Manage user details</p>

      <form action="../../index.html" method="post" onSubmit={handleSubmit}>
        <div className="form-group has-feedback">
          <input
            type="text"
            className="form-control"
            placeholder="Firstname"
            value={firstname}
            onChange={handleFirstNameChange}
          />
          {firstnameError && <span className="error">{firstnameError}</span>}
          <span className="glyphicon glyphicon-user form-control-feedback"></span>
        </div>
        {<div className="form-group has-feedback">
          <input
            type="text"
            className="form-control"
            placeholder="Last name"
            value={lastname}
            onChange={handleLastNameChange}
          />
          {lastnameError && <span className="error">{lastnameError}</span>}
          <span className="glyphicon glyphicon-user form-control-feedback"></span>
        </div> }
        <div className="form-group has-feedback">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          {emailError && <span className="error">{emailError}</span>}
          <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div className="form-group has-feedback">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handlePasswordChange}
          />
          {passError && <span className="error">{passError}</span>}
          <span className="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div className="row">
          {successMessage && 
          <div className="col-xs-12 col-md-12 col-lg-12">
               <div className="alert alert-success">
                   {successMessage}
               </div>
          </div>
          } 
      
        <div className="content">
          <div className="col-xs-15 col-lg-15 col-md-15">
            <div className="checkbox icheck">
              <label>
                <input type="checkbox" /> I agree to the terms <Link to="#" />
              </label>
            </div>
          </div>

          <div className="col-xs-10 col-lg-10 col-md-10">
            <button type="submit" className="btn btn-success btn-block btn-flat">
              Update
            </button>
            
            </div>
          </div>
        </div>
      </form>
      <Link to={Routes.ADMIN_OFFENDER}>Back to user page</Link>
      {error && <div className='alert alert-danger'>{error}</div>}
    </div>
  );
};

export default EditUser;
