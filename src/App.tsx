import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "prismjs/themes/prism-tomorrow.min.css";

import useTheme from "./hooks/useTheme";
import Information from "./components/Information";
import SectionInputForm from "./components/SectionInputForm";
import GeneratedSectionHtml from "./components/GeneratedSectionHtml";

function App() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme((theme) => (theme === "dark" ? "light" : "dark"));
  };

  const [sections, setSections] = useState<Section[]>([]);

  return (
    <div className="App bg-white dark:bg-zinc-900">
      <div className="container mx-auto py-10">
        <div className="w-full flex">
          <h1 className="uppercase dark:text-white font-bold text-2xl flex-1">
            PRODUCT RELEASE POST GENERATOR <span className="text-sm">v1.0</span>
          </h1>
          <div className=" flex-1 text-xl self-center text-right">
            <button onClick={handleThemeChange}>
              {theme === "dark" ? (
                <MdLightMode className="text-white" />
              ) : (
                <MdDarkMode className="text-black" />
              )}
            </button>
          </div>
        </div>
        <Information />
        <div className="card my-10">
          <SectionInputForm sections={sections} setSections={setSections} />
        </div>
        <div className="card">
          <GeneratedSectionHtml sections={sections} />
        </div>
      </div>
    </div>
  );
}

export default App;
