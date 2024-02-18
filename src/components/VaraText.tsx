import { useEffect, useState } from "react";
import Vara from "vara";

export default function VaraText({ text }: { text: string }) {
  const [fontSize, setFontSize] = useState(45);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) {
        setFontSize(40);
      } else if (window.innerWidth > 600 && window.innerWidth < 900) {
        setFontSize(45);
      } else {
        setFontSize(60);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: fontSize,
          strokeWidth: 1.5,
          color: "white",
        },
      ]
    );
  }, [fontSize, text]);

  return (
    <div
      id="vara-container"
      className="z-[20] text-4xl lg:text-6xl mb-10 w-screen"
    ></div>
  );
}
