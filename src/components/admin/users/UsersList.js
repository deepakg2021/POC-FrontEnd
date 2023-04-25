import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminService } from "../../../services";
import { Routes } from "../../../constants";
// import Swal from "sweetalert2";
import axios from "axios";
import EditUser from "./EditUser";

const UsersList = (props) => {
  const [error, setError] = useState(null);

  const [crimeId, setCrimaId] = useState("");
  const [offenderDetails, setOffenderDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/user/view?_id=${crimeId}`
      );
      if (response.data.success) {
        setOffenderDetails(response.data);
        setMessage("");
        setError("");
      } else {
        setMessage("No Record Found Please Add the record of Offender");
        // alert("Please Enter Correct Crime ID");
        setError("No record found....");
      }
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };
  console.log(crimeId)

  return (
    <div>
      <div className="content content-wrapper">
      
        <section className="content-header">
          <h1>
            Search Offender Data
            {/* <small>advanced list</small> */}
          </h1>
        </section>
        <div className="box">
          <section className="cyber-security">
            <div className="crime-form">
              <div className="user-details">
                <form onSubmit={handleSubmit}>
                  <label htmlFor="userId">Crime ID:</label>
                  <input
                    type="text"
                    id="userId"
                    value={crimeId}
                    onChange={(e) => setCrimaId(e.target.value)}
                  />

                  <button type="submit">Enter Unique Crime ID</button>
                </form>
              </div>
            </div>
          </section>
          <div className="content text-center">
            {loading && <p>Loading user details...</p>}
            {message && (
              <p><b> No Record Found </b></p>
            )}
            {error && (
              <Link className="btn btn-success " to={Routes.ADMIN_OFFENDER_ADD}>
                Add Offender
              </Link>
            )}

            {offenderDetails && offenderDetails.data && (
              <div>
                <section className="content-header">
                  <h1> Offender Details</h1>
                  <Link to={Routes.ADMIN_USERS_EDIT + "/" + crimeId}>
                    Alter Records
                  </Link>
                </section>
                <section className="content">
                  <div className="row">
                    <div className="col-md-2">
                      <div className="box-primary">
                        <div className="box-body box-profile">
                          <img
                            className="profile-user-img img-responsive img-circle"
                            src="/assets/img/avatar5.png"
                            alt="profile"
                          />
                          <h3 className="profile-username text-center">
                            {offenderDetails.data.name}
                          </h3>
                          <p className="text-muted text-center">
                            {offenderDetails.data.offenceType}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="row">
                        <div className="col-md-5">
                          <div className="crime-form">
                            {/* <button onClick={() => <EditUser  crimeId={offenderDetails.data._id}/>}>Edit Details</button> */}

                            <p>Name: {offenderDetails.data.name}</p>
                            <p>
                              Date of Birth: {offenderDetails.data.dateOfBirth}
                            </p>

                            <p>Sex: {offenderDetails.data.sex}</p>

                            <p>Height: {offenderDetails.data.height}</p>

                            <p>
                              Driving License NO.:{" "}
                              {offenderDetails.data.drivingLicenseNo}
                            </p>

                            <p>PVC NO.: {offenderDetails.data.pvcNo}</p>

                            <p>NIN NO: {offenderDetails.data.ninNo}</p>
                            <p>
                              National ID NO.:{" "}
                              {offenderDetails.data.nationalIdNo}
                            </p>

                            <p>
                              Passport NO.: {offenderDetails.data.passportNo}
                            </p>
                            <p>
                              Issuing Authority:{" "}
                              {offenderDetails.data.issuingAuthority}
                            </p>

                            <p>
                              Vehicle RoadWorthiness No:{" "}
                              {offenderDetails.data.vehicleRoadWorthinessNo}
                            </p>
                            <p>
                              Vehicle RoadWorthiness Expiry Date:{" "}
                              {
                                offenderDetails.data
                                  .vehicleRoadWorthinessExpiryDate
                              }
                            </p>

                            <p>Chasis NO.: {offenderDetails.data.chassisNo}</p>
                            <p>
                              Arresting Officer Badge No:{" "}
                              {offenderDetails.data.arrestingOfficerBadgeNo}
                            </p>

                            <p>
                              Arresting Officers Name:{" "}
                              {offenderDetails.data.arrestingOfficersName}
                            </p>

                            <p>
                              Arresting Agency:{" "}
                              {offenderDetails.data.arrestingAgency}
                            </p>

                            <p>
                              Police Station Address:{" "}
                              {offenderDetails.data.policeStationAddress}
                            </p>

                            <p>
                              Offender Statement:{" "}
                              {offenderDetails.data.offenderStatement}
                            </p>

                            <p>
                              Officers Station:{" "}
                              {offenderDetails.data.officersStation}
                            </p>

                            <p>
                              Properties In PoliceSafe:{" "}
                              {offenderDetails.data.propertiesInPoliceSafe}
                            </p>
                            <p>
                              Police Safe No:{" "}
                              {offenderDetails.data.policeSafeNo}
                            </p>

                            <p>
                              PoliceReleaseDate:{" "}
                              {offenderDetails.data.policeReleaseDate}
                            </p>

                            <p>BailDate: {offenderDetails.data.bailDate}</p>

                            <p>
                              Guarantor Name:{" "}
                              {offenderDetails.data.guarantorName}
                            </p>

                            <p>DPO Name: {offenderDetails.data.dpoName}</p>

                            <p>CID Name: {offenderDetails.data.cidName}</p>

                            <p>
                              CID Statement: {offenderDetails.data.cidStatement}
                            </p>
                            <p>
                              Solicitor Or Lawyer Name:{" "}
                              {offenderDetails.data.solicitorOrLawyerName}
                            </p>

                            <p>
                              Solicitor Or Lawyer Address:{" "}
                              {offenderDetails.data.solicitorOrLawyerAddress}
                            </p>

                            <p>
                              Solicitor Or Lawyer Contact Details:{" "}
                              {
                                offenderDetails.data
                                  .solicitorOrLawyerContactDetails
                              }
                            </p>

                            <p>Court Date: {offenderDetails.data.courtDate}</p>

                            <p>
                              Court Address: {offenderDetails.data.courtAddress}
                            </p>

                            <p>
                              Judgment Or Sentencing Or Fine:{" "}
                              {offenderDetails.data.judgmentOrSentencingOrFine}
                            </p>

                            <p>Judge Name: {offenderDetails.data.judgeName}</p>

                            <p>
                              Properties In PrisonSafe:{" "}
                              {offenderDetails.data.propertiesInPrisonSafe}
                            </p>

                            <p>
                              Prison Safe No:{" "}
                              {offenderDetails.data.prisonSafeNo}
                            </p>

                            <p>Jail Date: {offenderDetails.data.jailDate}</p>

                            <p>
                              Prison Address:{" "}
                              {offenderDetails.data.prisonAddress}
                            </p>
                            <p>
                              Prisoner No: {offenderDetails.data.prisonerNo}
                            </p>
                            <p>
                              Prison Release Date:{" "}
                              {offenderDetails.data.prisonReleaseDate}
                            </p>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="crime-form">
                            {/* <button onClick={() => <EditUser  crimeId={offenderDetails.data._id}/>}>Edit Details</button> */}

                            <p>
                              Nationality: {offenderDetails.data.nationality}
                            </p>

                            <p>Address: {offenderDetails.data.address}</p>

                            <p>City: {offenderDetails.data.city}</p>

                            <p>State: {offenderDetails.data.state}</p>

                            <p>
                              Telephone No: {offenderDetails.data.telephoneNo}
                            </p>

                            <p>
                              Injury Or Disability:{" "}
                              {offenderDetails.data.injuryOrDisability}
                            </p>

                            <p>
                              Date Of Offence:{" "}
                              {offenderDetails.data.dateOfOffence}
                            </p>

                            <p>
                              Time Of Offence:{" "}
                              {offenderDetails.data.timeOfOffence}
                            </p>

                            <p>
                              Location Of Offence:{" "}
                              {offenderDetails.data.locationOfOffence}
                            </p>

                            <p>
                              Offence Type: {offenderDetails.data.offenceType}
                            </p>

                            <p>
                              Penalties Or Fine:{" "}
                              {offenderDetails.data.penaltiesOrFine}
                            </p>

                            <p>Type Of Car: {offenderDetails.data.typeOfCar}</p>
                            <p>
                              Car Registration:{" "}
                              {offenderDetails.data.carRegistration}
                            </p>

                            <p>Car Colour: {offenderDetails.data.carColour}</p>

                            <p>
                              Name Of Insurance:{" "}
                              {offenderDetails.data.nameOfInsurance}
                            </p>

                            <p>INS NO.: {offenderDetails.data.insNo}</p>

                            <p>
                              Expiry Date: {offenderDetails.data.expiryDate}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
