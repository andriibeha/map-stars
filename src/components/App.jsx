import { useState } from "react";
import Advantages from "./Advantages";
import Awards from "./Awards";
import Contacts from "./Contacts";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import HowWork from "./HowWork";
import Modal from "./Modal";
import Packages from "./Packages";
import Services from "./Services";
import Setting from "./Setting";
import SliderBlock from "./SliderBlock";
import Social from "./Social";
import Technology from "./Technology";
import UserInfo from "./UserInfo";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  isOpen
    ? document.body.classList.add("stopScroll")
    : document.body.classList.remove("stopScroll");

  const onClickModalOpen = () => {
    console.log("click");
    setIsOpen(true);
  };

  return (
    <>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
      <div className="container">
        <Header onClickButton={onClickModalOpen} />
        <Hero onClickButton={onClickModalOpen} />
        <Technology />
        <Advantages />
        <HowWork />
      </div>
      <Services />
      <div className="container">
        <UserInfo />
        <Social />
        <Packages onClickButton={onClickModalOpen} />
        <SliderBlock />
        <Awards />
        <Setting />
        <Contacts onClickButton={onClickModalOpen} />
        <Footer />
      </div>
    </>
  );
};

export default App;
