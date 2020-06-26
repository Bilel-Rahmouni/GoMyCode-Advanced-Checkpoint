import React from "react";
import Products from "./component/ProductTable";
import "./App.css";
import PropTypes from 'prop-types';
const products = [
  { category: "Electronics", price: 1500, name: "Samsung" },
  { category: "Clothes", price: 120, name: "Adidas" },
];
function App() {
  return (
    <div className="App">
      <Products bilel={products} />
    </div>
  );
}

export default App;
Products.propTypes = {
 price: PropTypes.number
}