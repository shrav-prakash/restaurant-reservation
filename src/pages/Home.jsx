import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      
      <ul>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/aboutus">Aboutus</Link>
        </li>
        <li>
          <Link to="/reservation">Reservation</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/orderonline">Orderonline</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/homepage">Homepage</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;
