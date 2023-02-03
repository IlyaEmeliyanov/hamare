// Importing libraries
import React, { useState } from "react";

// Importing components
import Spacer from "../components/common/Spacer";
import MenuCard from "../components/MenuCard";

// Importing images
import LogoWhite from "../images/logo-white.svg";

// Importing icons
import ShoppingCartIcon from "../images/icons/shopping-cart.svg";
import SearchIcon from "../images/icons/search.svg";

const Home = () => {
  const getLabel = (seconds) =>
    `${Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0")}:${(seconds % 60).toString().padStart(2, "0")}`;

  const MINUTES = 15;

  let [seconds, setSeconds] = useState(MINUTES * 60);
  const [timeLabel, setLabel] = useState(`${MINUTES}:00`);

  setInterval(() => {
    if (seconds > 0) {
      seconds--;
      setSeconds(seconds);
      setLabel(getLabel(seconds));
    } else {
      setLabel("00:00");
    }
  }, 1000);

  const sections = ["nigiri", "uramaki", "sashimi","nigiri2", "uramaki2", "sashimi2","nigiri3", "uramaki3", "sashimi3",];

  const [curSection, setSection] = useState(sections[0]);

  return (
    <section>
      <header className="header">
        <ul className="flex justify-between items-center">
          <li>
            <img src={LogoWhite} alt="logo-white" />
          </li>
          <li>
            <p className="text-fontPrimary font-semibold">{timeLabel}</p>
          </li>
          <li className="flex justify-center items-center gap-2">
            <img src={ShoppingCartIcon} alt="shopping-cart-icon" />
            <img src={SearchIcon} alt="search-icon" />
          </li>
        </ul>
      </header>

      <Spacer height="2rem" />

      <div className="">
        <ul className="flex overflow-x-scroll p-4">
            {sections.map(section => 
                <li key={section} onClick={() => setSection(section)} className="px-[1.5rem] py-[10px]">
                    <p className={`font-semibold text-${section === curSection ? "active" : "fontSecondary"}`}>{section.toUpperCase()}</p>
                </li>
            )}
        </ul>
      </div>

      <Spacer height="2rem"/>
        
        <ul className="overflow-y-scroll">
          <li>
            <MenuCard />
          </li>
        </ul>

      <button className="fixed w-full h-[5rem] left-[50%] bottom-0 -translate-x-[50%] px-auto py-[0.5rem] text-[#000] uppercase font-medium rounded-full gradient">
        <span className="text-[#000]">€ 28,00 (2/5 piatti)</span>
        <p className="text-[#000] uppercase font-semibold">procedi all'ordine</p>
      </button>
    </section>
  );
};

export default Home;
