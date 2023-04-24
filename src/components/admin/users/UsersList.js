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
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/v1/user/view?_id=${crimeId}`
      );
      if (response.data.success) {
        setUserDetails(response.data);
      } else {
        alert("Please Enter Correct Crime ID");
      }
    } catch (err) {
      alert(err.message);
      setError(err.message);
    }
    setLoading(false);
  };



  return (
    <div>
      <div className="content">
        <Link className="btn btn-success " to={Routes.ADMIN_USERS_ADD}>
          Add Cases 
        </Link>
        <section className="content-header">
          <h1>
            Cases Data List
            <small>advanced list</small>
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
              {loading && <p>Loading user details...</p>}
              {error && <p>Error fetching user details: {error}</p>}
              {userDetails && userDetails.data && (
                
                <div className="crime-form">
                  {/* <button onClick={() => <EditUser  crimeId={userDetails.data._id}/>}>Edit Details</button> */}
                  <h2>Crime User Details</h2>
                  <p>Name: {userDetails.data.name}</p>
                  <p>Date of Birth: {userDetails.data.dateOfBirth}</p>

                  <p>Sex: {userDetails.data.sex}</p>

                  <p>Height: {userDetails.data.height}</p>

                  <p>
                    Driving License NO.: {userDetails.data.drivingLicenseNo}
                  </p>

                  <p>PVC NO.: {userDetails.data.pvcNo}</p>

                  <p>NIN NO: {userDetails.data.ninNo}</p>
                  <p>National ID NO.: {userDetails.data.nationalIdNo}</p>

                  <p>Passport NO.: {userDetails.data.passportNo}</p>
                  <p>Issuing Authority: {userDetails.data.issuingAuthority}</p>

                  <p>Nationality: {userDetails.data.nationality}</p>

                  <p>Address: {userDetails.data.address}</p>

                  <p>City: {userDetails.data.city}</p>

                  <p>State: {userDetails.data.state}</p>

                  <p>Telephone No: {userDetails.data.telephoneNo}</p>

                  <p>
                    Injury Or Disability: {userDetails.data.injuryOrDisability}
                  </p>

                  <p>Date Of Offence: {userDetails.data.dateOfOffence}</p>

                  <p>Time Of Offence: {userDetails.data.timeOfOffence}</p>

                  <p>
                    Location Of Offence: {userDetails.data.locationOfOffence}
                  </p>

                  <p>Offence Type: {userDetails.data.offenceType}</p>

                  <p>Penalties Or Fine: {userDetails.data.penaltiesOrFine}</p>

                  <p>Type Of Car: {userDetails.data.typeOfCar}</p>
                  <p>Car Registration: {userDetails.data.carRegistration}</p>

                  <p>Car Colour: {userDetails.data.carColour}</p>

                  <p>Name Of Insurance: {userDetails.data.nameOfInsurance}</p>

                  <p>INS NO.: {userDetails.data.insNo}</p>

                  <p>Expiry Date: {userDetails.data.expiryDate}</p>

                  <p>
                    Vehicle RoadWorthiness No:{" "}
                    {userDetails.data.vehicleRoadWorthinessNo}
                  </p>
                  <p>
                    Vehicle RoadWorthiness Expiry Date:{" "}
                    {userDetails.data.vehicleRoadWorthinessExpiryDate}
                  </p>

                  <p>Chasis NO.: {userDetails.data.chassisNo}</p>
                  <p>
                    Arresting Officer Badge No:{" "}
                    {userDetails.data.arrestingOfficerBadgeNo}
                  </p>

                  <p>
                    Arresting Officers Name:{" "}
                    {userDetails.data.arrestingOfficersName}
                  </p>

                  <p>Arresting Agency: {userDetails.data.arrestingAgency}</p>

                  <p>
                    Police Station Address:{" "}
                    {userDetails.data.policeStationAddress}
                  </p>

                  <p>
                    Offender Statement: {userDetails.data.offenderStatement}
                  </p>

                  <p>Officers Station: {userDetails.data.officersStation}</p>

                  <p>
                    Properties In PoliceSafe:{" "}
                    {userDetails.data.propertiesInPoliceSafe}
                  </p>
                  <p>Police Safe No: {userDetails.data.policeSafeNo}</p>

                  <p>PoliceReleaseDate: {userDetails.data.policeReleaseDate}</p>

                  <p>BailDate: {userDetails.data.bailDate}</p>

                  <p>Guarantor Name: {userDetails.data.guarantorName}</p>

                  <p>DPO Name: {userDetails.data.dpoName}</p>

                  <p>CID Name: {userDetails.data.cidName}</p>

                  <p>CID Statement: {userDetails.data.cidStatement}</p>
                  <p>
                    Solicitor Or Lawyer Name:{" "}
                    {userDetails.data.solicitorOrLawyerName}
                  </p>

                  <p>
                    Solicitor Or Lawyer Address:{" "}
                    {userDetails.data.solicitorOrLawyerAddress}
                  </p>

                  <p>
                    Solicitor Or Lawyer Contact Details:{" "}
                    {userDetails.data.solicitorOrLawyerContactDetails}
                  </p>

                  <p>Court Date: {userDetails.data.courtDate}</p>

                  <p>Court Address: {userDetails.data.courtAddress}</p>

                  <p>
                    Judgment Or Sentencing Or Fine:{" "}
                    {userDetails.data.judgmentOrSentencingOrFine}
                  </p>

                  <p>Judge Name: {userDetails.data.judgeName}</p>

                  <p>
                    Properties In PrisonSafe:{" "}
                    {userDetails.data.propertiesInPrisonSafe}
                  </p>

                  <p>Prison Safe No: {userDetails.data.prisonSafeNo}</p>

                  <p>Jail Date: {userDetails.data.jailDate}</p>

                  <p>Prison Address: {userDetails.data.prisonAddress}</p>
                  <p>Prisoner No: {userDetails.data.prisonerNo}</p>
                  <p>
                    Prison Release Date: {userDetails.data.prisonReleaseDate}
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UsersList;
