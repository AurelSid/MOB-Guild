import Hero from "./Hero";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="background">
      <div>
        <Hero />
      </div>
    </div>
  );
};

export default Home;
