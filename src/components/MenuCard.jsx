// Importing libraries
import React, {useState} from "react";

// Importing components
import Spacer from "./common/Spacer";

// Importing icons
import MinusIcon from '../images/icons/minus.svg'
import PlusIcon from '../images/icons/plus.svg'

const MenuCard = () => {
    const MAX_COUNT = 5;

    let [counter, setCounter] = useState(0);

  return (
    <article className="w-full text-fontPrimary">
      <div className="relative z-[2] bg-[#11253C] drop-shadow-[0_10px_10px_rgba(0,0,0,0.35)] p-4 rounded-xl">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-[1.6rem] font-bold">Ilya's Roll</h3>
            <Spacer height="5px"/>
            <p className="text-sm text-fontSecondary">
              Salmone, avocado, maionese con Tobiko all’esterno
            </p>
          </div>
          <img
            src={require("../images/menu/sushi1.png")}
            alt="sushi-img"
            className="w-[50%] object-fill"
          />
        </div>
        <span className="w-full text-active">8 Pz</span>
      </div>
      <div className="relative z-[1] -translate-y-[2rem] bg-[#16263B] pt-[4rem] pb-4 px-4 rounded-xl">
        <ul className="flex justify-between items-center">
          <p className="text-active underline">ALLERGIE</p>
          <p className="font-bold">€ 12.50</p>
          <div className="flex justify-between items-center gap-[1rem]">
            <button onClick={() => setCounter(counter === 0 ? 0 : --counter)}>
              <img src={MinusIcon} alt="minus-icon" />
            </button>
            <p className="w-[1rem]">{counter}</p>
            <button onClick={() => setCounter(counter >= MAX_COUNT ? counter : ++counter)}>
              <img src={PlusIcon} alt="minus-icon" />
            </button>
          </div>
        </ul>
      </div>
    </article>
  );
};

export default MenuCard;
