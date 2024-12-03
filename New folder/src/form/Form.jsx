import React, { useState } from "react";

function Form() {
  const [entryName, setEntryName] = useState("");
  const [entryDate, setEntryDate] = useState();
  const [entryAddress, setEntryAddress] = useState("");
  const [entryRole, setEntryRole] = useState("");
  const [entryGender, setEntryGender] = useState("");

  function handleNameChange(event) {
    setEntryName(event.target.value);
  }
  function handleDateChange(event) {
    setEntryDate(event.target.value);
  }
  function handleAddressChange(event) {
    setEntryAddress(event.target.value);
  }
  function handleRoleChange(event) {
    setEntryRole(event.target.value);
  }
  function handleGenderChange(event) {
    setEntryGender(event.target.value);
  }

  return (
    <>
      <div>
        <form>
          <input
            className="entry-style-a"
            value={entryName}
            onChange={handleNameChange}
          />

          <input
            className="entry-style-a"
            value={entryDate}
            onChange={handleDateChange}
            type="date"
          />
<p className="">Address</p> 
          <textarea
            className="entry-style-a"
            value={entryAddress}
            onChange={handleAddressChange}
            placeholder="type here"
          />
          <label>Role &emsp;</label><select className="entry-style-b" value={entryRole} onChange={handleRoleChange}>
            <option value="">Select an option</option>
            <option value="admin">Admin</option>
            <option value="manager">Manager</option>
            <option value="employee">Employee</option>
          </select>

          
          <br />

          <label>
            Gender: &emsp;
            <input
            className="entry-style-c"
              type="radio"
              value="Male"
              checked={entryGender === "Male"}
              onChange={handleGenderChange}
            />{" "}
            Male
          </label>&emsp;
          <label>
            <input
            className="entry-style-c"
              type="radio"
              value="Female"
              checked={entryGender === "Female"}
              onChange={handleGenderChange}
            />{" "}
            Female
          </label>

          <button className="button">ok</button>
        </form>
      </div>
      <div>
        <p>Name: {entryName}</p>
        <p>gender: {entryGender}</p> <p>role: {entryRole}</p>
        <p>address: {entryAddress}</p>
        <p>date: {entryDate}</p>
      </div>
    </>
  );
}

export default Form;
