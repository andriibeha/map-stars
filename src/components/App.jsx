import Advantages from "./Advantages";
import Awards from "./Awards";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HowWork from "./HowWork";
import Packages from "./Packages";
import Services from "./Services";
import Setting from "./Setting";
import SliderBlock from "./SliderBlock";
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
        <SliderBlock />
        <Awards />
        <Setting />
        <Contacts />
        <Footer />
      </div>
    </>
  );
};

export default App;
