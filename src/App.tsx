import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import Joblisting from "./components/Joblisting";
import Navbar from "./components/navbar";
import ViewAll from "./components/ViewAll";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero
        title="Become A react Dev "
        caption="Find the job that fits your skills"
      />
      <HomeCards />
      <Joblisting />
      <ViewAll />
    </>
  );
};

export default App;
