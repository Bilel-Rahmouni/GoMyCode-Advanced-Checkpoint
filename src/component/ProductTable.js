import React from "react";
// import PropTypes from "prop-types";

const productstable = (props) => {
  return (
    <div> <h2>Products</h2>
      {props.bilel.map((el, i) => (
        <table>
          <tr>
            <td>{el.category}</td>
            <td>{el.price}</td>
            <td>{el.name}</td>
          </tr>
        </table>
      ))}
    </div>
  );
};
export default productstable;
