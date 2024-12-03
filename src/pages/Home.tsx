import SolutionDetails from "@/components/SolutionDetails";
import Consultant from "../components/Consultant";
import Experience from "../components/Experience";
import HeroSlider from "../components/HeroSlider";
import News from "../components/News";
import Pillars from "../components/Pillars";
import Solutions from "../components/Solutions";
import { useState } from "react";
import { useModal } from "@/context/ModalContext";

const Home = () => {
  const { openSheet } = useModal();
  const [selectedItem, setSelectedItem] = useState<any | null>(null);

  const handleDialogOpen = (item: any) => {
    setSelectedItem(item);
    openSheet();
  };
  return (
    <div>
      <HeroSlider />
      <Solutions onSolutionClick={handleDialogOpen} />
      <SolutionDetails
        selectedItem={selectedItem}
        // onClose={handleDialogClose}
      />
      <News />
      <Pillars />
      <Experience />
      <Consultant />
    </div>
  );
};

export default Home;
