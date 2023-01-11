import Advantages from "./Advantages";
import Header from "./Header";
import Hero from "./Hero";
import HowWork from "./HowWork";
import Technology from "./Technology";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <Technology />
      <Advantages />
      <HowWork />
    </div>
  );
};

export default App;
