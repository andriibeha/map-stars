import Advantages from "./Advantages";
import Header from "./Header";
import Hero from "./Hero";
import HowWork from "./HowWork";
import Packages from "./Packages";
import Services from "./Services";
import Social from "./Social";
import Technology from "./Technology";
import UserInfo from "./UserInfo";

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Technology />
        <Advantages />
        <HowWork />
      </div>
      <Services />
      <div className="container">
        <UserInfo />
        <Social />
        <Packages />
      </div>
    </>
  );
};

export default App;
