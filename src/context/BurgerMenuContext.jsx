import { createContext, useState, useEffect } from "react";

export const BurgerMenuContext = createContext();

function BurgerMenuContextProvider({ children }) {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen((prev) => !prev);
  };

  return (
    <div>
      <BurgerMenuContext.Provider
        value={{ isBurgerMenuOpen, setIsBurgerMenuOpen, toggleBurgerMenu }}
      >
        {children}
      </BurgerMenuContext.Provider>
    </div>
  );
}

export default BurgerMenuContextProvider;
