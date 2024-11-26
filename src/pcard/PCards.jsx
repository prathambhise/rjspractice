// props = read-only properties shared between components.
//         parent component can send data to a child component.
//         <component key=value />

import propTypes from 'prop-types'
//import "./PCard.module.css"

function PCard(details) {
  return (
    <>
      <div className="card">
        <p>Name: {details.name}</p>
        <p>Age: {details.age}</p>
        <p>Active Career: {details.isActiveInCareer ? "Yes":"No"}</p>
      </div>
    </>
  );
}

PCard.propTypes={
  name: propTypes.string,
  age: propTypes.number,
  isActiveInCareer: propTypes.bool
}

PCard.defaultProps = {
  name: "Guest",
  age: 0,
  isActiveInCareer: false

}


export default PCard;
