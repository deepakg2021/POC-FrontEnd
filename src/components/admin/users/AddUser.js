import React, { useState } from "react";
import axios from "axios";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    sex: "",
    height: "",
    drivingLicenseNo: "",
    pvcNo: "",
    ninNo: "",
    nationalIdNo: "",
    passportNo: "",
    issuingAuthority: "",
    nationality: "",
    address: "",
    city: "",
    state: "",
    telephoneNo: [""],
    injuryOrDisability: "",
    dateOfOffence: "",
    timeOfOffence: "",
    locationOfOffence: "",
    offenceType: "",
    penaltiesOrFine: "",
    typeOfCar: "",
    carRegistration: "",
    carColour: "",
    nameOfInsurance: "",
    insNo: "",
    expiryDate: "",
    vehicleRoadWorthinessNo: "",
    vehicleRoadWorthinessExpiryDate: "",
    chassisNo: "",
    arrestingOfficerBadgeNo: "",
    arrestingOfficersName: "",
    arrestingAgency: "",
    policeStationAddress: "",
    offenderStatement: "",
    officersStation: "",
    propertiesInPoliceSafe: "",
    policeSafeNo: "",
    policeReleaseDate: "",
    bailDate: "",
    guarantorName: "",
    dpoName: "",
    cidName: "",
    cidStatement: "",
    solicitorOrLawyerName: "",
    solicitorOrLawyerAddress: "",
    solicitorOrLawyerContactDetails: "",
    courtDate: "",
    courtAddress: "",
    judgmentOrSentencingOrFine: "",
    judgeName: "",
    propertiesInPrisonSafe: "",
    prisonSafeNo: "",
    jailDate: "",
    prisonAddress: "",
    prisonerNo: "",
    prisonReleaseDate: "",
    prisonState: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name , value ,"name value")
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

//   console.log(formData.pvcNo,"formDatadsfas")

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/user/add",
        formData
      );
      console.log(response.data);
    //   const Unique_crimeID = response.data && response.data._id
      
    //   alert(`Form is Submited Unique Crime Id is ${Unique_crimeID}`)

    } catch (error) {
      console.log(error);
    }
  };

  function handleClick() {
    window.history.back();
  }

  return (
    <section className="cyber-security">
      <form onSubmit={handleSubmit}>
        <div className="crime-form">
          <button onClick={handleClick}>
            <i className="bi bi-arrow-left-circle-fill"></i>
          </button>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              onChange={handleInputChange}
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              onChange={handleInputChange}
              type="date"
              className="form-control"
              id="dob"
              name="dateOfBirth"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sex" className="form-label">
              Sex
            </label>
            <select
              className="form-select"
              id="sex"
              onClick={handleInputChange}
              name="sex"
            >
              <option value="DEFAULT" disabled>
                Select your sex
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="height" className="form-label">
              Height (cm)
            </label>
            <input
              onChange={handleInputChange}
              name="height"
              type="number"
              className="form-control"
              id="height"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="license" className="form-label">
              Driving License Number
            </label>
            <input
              onChange={handleInputChange}
              name="drivingLicenseNo"
              type="text"
              className="form-control"
              id="drivingLicenseNo"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="pvc" className="form-label">
              PVC Number
            </label>
            <input
              onChange={handleInputChange}
              name="pvcNo"
              type="text"
              className="form-control"
              id="pvc"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nin" className="form-label">
              NIN Number
            </label>
            <input
              onChange={handleInputChange}
              name="ninNo"
              type="text"
              className="form-control"
              id="nin"
            />
          </div>

          <div>
            <div className="mb-3">
              <label htmlFor="national-id-no" className="form-label">
                National ID No:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="national-id-no"
                name="nationalIdNo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passport-no" className="form-label">
                Passport No:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="passport-no"
                name="passportNo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="issuing-authority" className="form-label">
                Issuing Authority:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="issuing-authority"
                name="issuingAuthority"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">
                Nationality:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address:
              </label>
              <textarea
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="address"
                name="address"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city" className="form-label">
                City:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="city"
                name="city"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="city-state" className="form-label">
                State:
              </label>
              <select
                className="form-select"
                id="city-state"
                name="state"
                onChange={handleInputChange}
              >
                <option value="DEFAULT" disabled>
                  -- Select a city/state --
                </option>
                <option value="New York">New York</option>
                <option value="Los Angeles">Los Angeles</option>
                <option value="Chicago">Chicago</option>
                <option value="Houston">Houston</option>
                <option value="Phoenix">Phoenix</option>
                <option value="Philadelphia">Philadelphia</option>
                <option value="San Antonio">San Antonio</option>
                <option value="San Diego">San Diego</option>
                <option value="Dallas">Dallas</option>
                <option value="San Jose">San Jose</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="telephone-no" className="form-label">
                Telephone No:
              </label>
              <select
                className="form-select"
                id="telephone-no"
                name="telephoneNo"
                onChange={handleInputChange}
              >
                <option value="DEFAULT" disabled>
                  -- Select a telephone no --
                </option>
                <option value={12345}>12345</option>
                <option value={67890}>67890</option>
                <option value={23456}>23456</option>
                <option value={78901}>78901</option>
                <option value={34567}>34567</option>
              </select>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <label htmlFor="injury_disability" className="form-label">
                Injury/Disability
              </label>
              <input
                onChange={handleInputChange}
                name="injuryOrDisability"
                type="text"
                className="form-control"
                id="injury_disability"
              />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="date_of_offence" className="form-label">
                  Date of Offence
                </label>
                <input
                  onChange={handleInputChange}
                  name="dateOfOffence"
                  type="date"
                  className="form-control"
                  id="date_of_offence"
                />
              </div>
              <div className="col">
                <label htmlFor="time_of_offence" className="form-label">
                  Time of Offence
                </label>
                <input
                  onChange={handleInputChange}
                  name="timeOfOffence"
                  type="time"
                  className="form-control"
                  id="time_of_offence"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="location_of_offence" className="form-label">
                Location of Offence
              </label>
              <input
                onChange={handleInputChange}
                name="locationOfOffence"
                type="text"
                className="form-control"
                id="location_of_offence"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="offence_type" className="form-label">
                Offence Type
              </label>
              <select
                className="form-select"
                id="offence_type"
                onChange={handleInputChange}
                name="offenceType"
              >
                <option value>Choose...</option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="penalties_fine" className="form-label">
                Penalties/Fine
              </label>
              <select
                className="form-select"
                id="penalties_fine"
                onChange={handleInputChange}
                name="penaltiesOrFine"
              >
                <option value="DEFAULT" disabled>
                  Choose...
                </option>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="type_of_car" className="form-label">
                  Type of Car
                </label>
                <select
                  className="form-select"
                  id="type_of_car"
                  onChange={handleInputChange}
                  name="typeOfCar"
                >
                  <option value>Choose...</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="car_registration" className="form-label">
                  Car Registration
                </label>
                <input
                  onChange={handleInputChange}
                  name="carRegistration"
                  type="text"
                  className="form-control"
                  id="car_registration"
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="car_colour" className="form-label">
                Car Colour
              </label>
              <input
                onChange={handleInputChange}
                name="carColour"
                type="text"
                className="form-control"
                id="car_colour"
              />
            </div>
          </div>

          <div>
            <div className="mb-3">
              <label htmlFor="insurance-name" className="form-label">
                Name of INSURANCE
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="insurance-name"
                name="nameOfInsurance"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="insurance-no" className="form-label">
                INS- NO
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="insurance-no"
                name="insNo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="insurance-expiry-date" className="form-label">
                EXPIRY DATE
              </label>
              <input
                onChange={handleInputChange}
                type="date"
                className="form-control"
                id="insurance-expiry-date"
                name="expiryDate"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="vehicle-road-worthiness-no"
                className="form-label"
              >
                VEHICLE ROAD WORTHINESS NO
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="vehicle-road-worthiness-no"
                name="vehicleRoadWorthinessNo"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="vehicle-road-worthiness-expiry-date"
                className="form-label"
              >
                EXPIRY DATE
              </label>
              <input
                onChange={handleInputChange}
                type="date"
                className="form-control"
                id="vehicle-road-worthiness-expiry-date"
                name="vehicleRoadWorthinessExpiryDate"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="chassis-no" className="form-label">
                CHASSIS NO
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="chassis-no"
                name="chassisNo"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="arresting-officer-badge-no"
                className="form-label"
              >
                ARRESTING OFFICER’S BADGE-NO
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="arresting-officer-badge-no"
                name="arrestingOfficerBadgeNo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="arresting-officer-name" className="form-label">
                ARRESTING OFFICERS NAME
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="arresting-officer-name"
                name="arrestingOfficersName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="arresting-agency" className="form-label">
                ARRESTING AGENCY
              </label>
              <select
                className="form-select"
                id="arresting-agency"
                name="arrestingAgency"
                onChange={handleInputChange}
              >
                <option value="DEFAULT" disabled>
                  Choose an option
                </option>
                <option value="Option 1">Option 1</option>
                <option value="Option 2">Option 2</option>
                <option value="Option 3">Option 3</option>
              </select>
            </div>
          </div>

          <div>
            <div className="mb-3">
              <label htmlFor="police-station-address" className="form-label">
                POLICE STATION ADDRESS/STATE:
              </label>
              <select
                className="form-select"
                id="police-station-address"
                name="policeStationAddress"
                onChange={handleInputChange}
              >
                <option value="DEFAULT" disabled>
                  Select a state
                </option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                {/* More options... */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="offender-statement" className="form-label">
                OFFENDER STATEMENT (scanned in):
              </label>
              <input
                onChange={handleInputChange}
                type="file"
                className="form-control"
                id="offender-statement"
                name="offenderStatement"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="officers-station" className="form-label">
                OFFICER'S STATION:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="officers-station"
                name="officersStation"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="properties-in-police-safe" className="form-label">
                PROPERTIES IN POLICE SAFE (if detained):
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="properties-in-police-safe"
                name="propertiesInPoliceSafe"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="police-safe-no" className="form-label">
                POLICE SAFE NO:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="police-safe-no"
                name="policeSafeNo"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="police-release-date" className="form-label">
                POLICE RELEASE DATE:
              </label>
              <input
                onChange={handleInputChange}
                type="date"
                className="form-control"
                id="police-release-date"
                name="policeReleaseDate"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="bail-date" className="form-label">
                BAIL DATE:
              </label>
              <input
                onChange={handleInputChange}
                type="date"
                className="form-control"
                id="bail-date"
                name="bailDate"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="guarantor-name" className="form-label">
                GUARANTOR NAME:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="guarantor-name"
                name="guarantorName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="dpo-name" className="form-label">
                DPO NAME:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="dpo-name"
                name="dpoName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cid-name" className="form-label">
                CID NAME:
              </label>
              <input
                onChange={handleInputChange}
                type="text"
                className="form-control"
                id="cid-name"
                name="cidName"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="cid-statement" className="form-label">
                CID STATEMENT (scanned in):
              </label>
              <input
                onChange={handleInputChange}
                type="file"
                className="form-control"
                id="cid-statement"
                name="cidStatement"
              />
            </div>

            <div>
              <div className="mb-3">
                <label htmlFor="solicitor-name" className="form-label">
                  Solicitor/Lawyer Name
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="solicitor-name"
                  name="solicitorOrLawyerName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="solicitor-address" className="form-label">
                  Solicitor/Lawyer Address
                </label>
                <textarea
                  className="form-control"
                  id="solicitor-address"
                  name="solicitorOrLawyerAddress"
                  defaultValue={""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="solicitor-contact" className="form-label">
                  Solicitor/Lawyer Contact Details
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="solicitor-contact"
                  name="solicitorOrLawyerContactDetails"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="court-date" className="form-label">
                  Court Date
                </label>
                <input
                  onChange={handleInputChange}
                  type="date"
                  className="form-control"
                  id="court-date"
                  name="courtDate"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="court-address" className="form-label">
                  Court Address
                </label>
                <textarea
                  className="form-control"
                  id="court-address"
                  name="courtAddress"
                  defaultValue={""}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="judgment" className="form-label">
                  Judgment/Sentencing/Fine (scanned in)
                </label>
                <input
                  onChange={handleInputChange}
                  type="file"
                  className="form-control"
                  id="judgment"
                  name="judgmentOrSentencingOrFine"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="judge-name" className="form-label">
                  Judge Name
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="judge-name"
                  name="judgeName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="properties" className="form-label">
                  Properties in Prison Safe
                </label>
                <select
                  className="form-control"
                  id="properties"
                  name="propertiesInPrisonSafe"
                  onChange={handleInputChange}
                >
                  <option value="DEFAULT" disabled>
                    Select
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="prison-safe-no" className="form-label">
                  Prison Safe Number
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="prison-safe-no"
                  name="prisonSafeNo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="jail-date" className="form-label">
                  Jail Date
                </label>
                <input
                  onChange={handleInputChange}
                  type="date"
                  className="form-control"
                  id="jail-date"
                  name="jailDate"
                />
              </div>
            </div>
            <div>
              <div className="mb-3">
                <label htmlFor="prisonAddress" className="form-label">
                  Prison Address
                </label>
                <textarea
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="prisonAddress"
                  name="prisonAddress"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="prisonerNo" className="form-label">
                  Prisoner No.
                </label>
                <input
                  onChange={handleInputChange}
                  type="text"
                  className="form-control"
                  id="prisonerNo"
                  name="prisonerNo"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="prisonReleaseDate" className="form-label">
                  Prison Release Date
                </label>
                <input
                  onChange={handleInputChange}
                  type="date"
                  className="form-control"
                  id="prisonReleaseDate"
                  name="prisonReleaseDate"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="stateDropdown" className="form-label">
                Prison State
                </label>
                <select
                  className="form-select"
                  id="stateDropdown"
                  name="prisonState"
                  onChange={handleInputChange}
                >
                  <option value="DEFAULT" disabled>
                    Select a state
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  {/* add more states here */}
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 form-check">
              <input
                // onChange={handleInputChange}
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddUser;
