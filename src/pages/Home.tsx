import Consultant from "../components/Consultant";
import Experience from "../components/Experience";
import HeroSlider from "../components/HeroSlider";
import News from "../components/News";
import Solutions from "../components/Solutions";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Solutions />
      <News />
      <Experience />
      <Consultant />
    </div>
  );
};

export default Home;
