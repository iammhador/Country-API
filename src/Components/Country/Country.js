import React from "react";
import "./Country.css";
const Country = (props) => {
  const { name, area, region, flags } = props.country;
  return (
    <div className="country">
      <h2> {name.common}</h2>
      <img src={flags.png} alt="" />
      <h3>Area: {area}</h3>
      <h3>Region: {region}</h3>
    </div>
  );
};

export default Country;
