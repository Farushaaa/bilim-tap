import { UseThemeStore } from "../store/ThemeStore";
import HeroSection from "../widgets/HeroSection";
import Navbar from "../widgets/Navbar";

const HomePage = () => {
  const isDark = UseThemeStore((state) => state.isDark);

  return (
    <div className={`min-h-screen duration-300 ${isDark ? `bg-darkMode` : ``}`}>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default HomePage;
