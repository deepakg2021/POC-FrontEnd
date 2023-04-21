import React from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../constants";

const Dashboard = (props) => {
  return (
    <div>
      <section className="content-header">
        <h1>
          Dashboard
          <small>Control panel</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <Link to="#">
              <i className="fa fa-dashboard"></i> Home
            </Link>
          </li>
          <li className="active">Dashboard</li>
        </ol>
      </section>

      <section className="content">
        <div className="row">
          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-blue">
              <div className="inner">
                <h3>53</h3>

                <p>New Cases</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <Link to={Routes.ADMIN_USERS} className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-green">
              <div className="inner">
                <h3>8</h3>

                <p>Agencies</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <Link to="#" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-yellow">
              <div className="inner">
                <h3>44</h3>

                <p>Cases Registrations</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              <Link to={Routes.ADMIN_USERS_ADD} className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-xs-6">
            <div className="small-box bg-red">
              <div className="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              <Link to="#" className="small-box-footer">
                More info <i className="fa fa-arrow-circle-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
