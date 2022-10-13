import React, { useState } from "react";

function Form(props) {
  const [firstName, setFirstName] = useState("Sylvia");
  const [lastName, setLastName] = useState("Woods");
  const [submittedData, setSubmittedData] = useState([]); //initial value is an empty array
  const [errors, setErrors] = useState([]); //state for holding error messages

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //first name is required
    if (firstName.length > 0) {
      const formData = {
        firstName,
        lastName
      };

      const dataArray = [...submittedData, formData]; //create a copy of submittedData array and add formData object
      setSubmittedData(dataArray); //update submittedData state

      setFirstName("");
      setLastName("");
      setErrors([]);
    }
    else {
      setErrors(["First name is required!"]);
    }

    // props.sendFormDataSomewhere(formData); //a callback function, sendFormDataSomewhere, has been passed down as a prop. Since props was not destructured, we retrieve the function through its property.


  }

  const listOfSubmissions = submittedData.map((data, index) => {
    return (
      <div key={index}>{data.firstName} {data.lastName}</div>
    )
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleFirstNameChange} value={firstName} />
        <input type="text" onChange={handleLastNameChange} value={lastName} />
        <button type="submit">Submit</button>
      </form>
      {/* Conditionally render error message */}
      {/* for each error in errors state, return a p element, styled in red */}
      {errors.length > 0 ? errors.map((error, index) => (
        <p key={index} style={{ color: "red" }}>{error}</p>
      ))
        : null}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
