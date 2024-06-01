import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorPage from "./components/ErrorPage";
import Footer from "./components/Footer";
import Contact from "./components/Contact-Us";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Faq from "./components/Faq";
import PrivacyPolicy from "./components/PrivacyPolicy";
import About from "./components/About";
import TaxCalculator from "./components/TaxCalculator";
import Payment from "./components/Payment";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route exact path="/contact-us" element={<Contact />} />
                <Route exact path="/faq" element={<Faq />} />
                <Route exact path="/about" element={<About />} />

                <Route
                  exact
                  path="/privacy-policy"
                  element={<PrivacyPolicy />}
                />
                <Route path="/tax-calculator" element={<TaxCalculator />} />
                <Route path="/payment" element={<Payment />} />

                <Route exact path="*" element={<ErrorPage />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
