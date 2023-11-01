import "./App.css";
import AboutSection from "./Components/AboutSection";
import ApplicantCounts from "./Components/ApplicantCounts";
import CareerStart from "./Components/CareerStart";
import ContactForm from "./Components/ContactForm";
import EducationalLoan from "./Components/EducationalLoan";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Slider from "./Components/Slider";
import UniversitySection from "./Components/UniversitySection";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Slider />
      <AboutSection />

      <UniversitySection />
      <CareerStart />
      <ApplicantCounts />
      <EducationalLoan />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
