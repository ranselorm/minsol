import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutLayout from "./components/AboutLayout";
import History from "./pages/History";
import PlantsAndOfficesPage from "./pages/PlantsAndOfficesPage";
import Compliance from "./pages/Compliance";
import Affiliates from "./pages/Affiliates";
import CaseStudy from "./pages/CaseStudy";
import Sustainability from "./pages/Sustainability";
import Investors from "./pages/Investors";
import AnnualReports from "./pages/AnnualReports";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="plants-and-offices" element={<PlantsAndOfficesPage />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="affiliates" element={<Affiliates />} />
        </Route>

        <Route path="case-study" element={<CaseStudy />} />
        <Route path="sustainability" element={<Sustainability />} />
        <Route path="investors" element={<Investors />}>
          <Route path="annual-reports" element={<AnnualReports />}></Route>
        </Route>

        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
