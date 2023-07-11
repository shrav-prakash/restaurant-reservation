import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";

const Homepage = React.lazy(() => import("pages/Homepage"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const Orderonline = React.lazy(() => import("pages/Orderonline"));
const Contact = React.lazy(() => import("pages/Contact"));
const Reservation = React.lazy(() => import("pages/Reservation"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Menu = React.lazy(() => import("pages/Menu"));
const Login = React.lazy(() => import("pages/login"));

const Signup= React.lazy(() => import("pages/signup"));


const Bookings= React.lazy(() => import("pages/bookings"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/review" element={<Contact />} />
          <Route path="/orderonline" element={<Orderonline />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
