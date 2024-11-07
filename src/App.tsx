import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AboutLayout from "./components/AboutLayout";
import History from "./pages/History";
import PlantsAndOffices from "./pages/PlantsAndOffices";
import Compliance from "./pages/Compliance";
import Affiliates from "./pages/Affiliates";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutLayout />}>
          <Route path="/about" element={<About />} />
          <Route path="history" element={<History />} />
          <Route path="plants-and-offices" element={<PlantsAndOffices />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="affiliates" element={<Affiliates />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
