import Header from "../components/Header";
import Therapist from "../components/Therapists";
import Customer from "../components/Customer";
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <div>
      <Header />
      <Customer />
      <Therapist />
      <HowItWorks />
    </div>
  );
}

export default Home;
