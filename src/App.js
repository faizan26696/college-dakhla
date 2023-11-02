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
import CollegeDakhla from "./Components/CollegeDakhla";
import TopUniversity from "./Components/TopUniversity";
import EasyStepToApply from "./Components/EasyStepToApply";
import FAQ from "./Components/FAQ";

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
      <CollegeDakhla />
      <TopUniversity />
      <EasyStepToApply />
      {/* <AluminiSection /> */}
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
