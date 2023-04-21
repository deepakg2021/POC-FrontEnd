/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
//import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {  useHistory } from 'react-router-dom';
import { Routes } from '../../constants';
import { injectModels } from '../../redux/injectModels';

const Header = (props) => {
    const handleToggle = () => {
       const list = document.querySelector('body').classList;
       if(list.contains("sidebar-collapse")){
           list.remove("sidebar-collapse");
       } else{
           list.add("sidebar-collapse");
       }
    }
    const handleDrop = (e) => {
      e.preventDefault();

      const list = document.getElementById('header-user-drop-down').classList;
      if(list.contains("open")){
          list.remove("open");
      } else{
          list.add("open");
      }
   }

   const history = useHistory();

    return (
      <React.Fragment>
        <header className="main-header">
      <NavLink to={Routes.ADMIN_USERS} className="logo">
    
      <span className="logo-mini"><b>A</b>LT</span>
      <span className="logo-lg"><b>Admin</b>LTE</span>
    </NavLink>

    <nav className="navbar navbar-static-top">
     <button className="sidebar-toggle" onClick={handleToggle}>
        <span className="sr-only">Toggle navigation</span>
      </button>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
          <li className="dropdown user user-menu" id='header-user-drop-down'>
            <Link to="#" className="dropdown-toggle" onClick={handleDrop} data-toggle="dropdown" aria-expanded="true">
              
              <img src="/assets/img/user2-160x160.jpg" className="user-image" alt="User Image" />
              <span className="hidden-xs">Sourav Mishra</span>
            </Link>
            <ul className="dropdown-menu">

         
              <li className="user-header">
                <img src="/assets/img/user2-160x160.jpg" className="img-circle" alt="User Image"/>

                <p>
                  sourav Mishra - Mern Developer
                  <small>Member since Nov. 2021</small>
                </p>
              </li>
    
              <li className="user-body">
                <div className="row">
                  <div className="col-xs-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div className="col-xs-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
  
              </li>     
              <li className="user-footer">
                <div className="pull-left">
                  <Link to="#" className="btn btn-default btn-flat">Profile</Link>
                </div>
                <div className="pull-right">
                  {/* <a href="#" className="btn btn-default btn-flat">Sign out</a> */}
                 
                <Link to="#" onClick={(e) =>{
                  e.preventDefault();
                  props.auth.logout(); 
                  history.push(Routes.LOGIN);
                  console.log("Logged out")

                }}>
                <i className="fa fa-gears"></i> <span>Logout</span></Link>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  </React.Fragment>
    );
};

export default injectModels(['auth']) (Header);