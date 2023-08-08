import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Therapist from "./Therapists";
import Customer from "./Customer";
import HowItWorks from "./HowItWorks";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Customer />
      <Therapist />
      <HowItWorks />
      <Footer />

    </div>
  );
}

export default App;
