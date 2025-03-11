import React, {useState,useEffect} from "react";
import "./App.scss";
import Main from "./containers/Main";
import {StyleProvider} from "./contexts/StyleContext";

function App() {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useState(darkPref.matches);
  const [isEn, setIsEn] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const bodyClass = document.body.classList;
      isDark ? bodyClass.add("dark-mode") : bodyClass.remove("dark-mode");
    }
  }, [isDark]);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  const changeLanguage = () => {
    setIsEn(!isEn);
  };

  return (
      <StyleProvider value={{isDark, changeTheme, isEn, changeLanguage}}>
        <Main></Main>
      </StyleProvider>
  );
}

export default App;
