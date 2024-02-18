import { useEffect } from "react";
import Vara from "vara";

export default function VaraText({ text }: { text: string }) {
  useEffect(() => {
    new Vara(
      "#vara-container",
      "https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
      [
        {
          text: text,
          fontSize: 45,
          strokeWidth: 1.5,
          color: "white",
        },
      ]
    );
  }, []);

  return (
    <div
      id="vara-container"
      className="z-[20] text-4xl lg:text-6xl mb-10 w-screen"
    ></div>
  );
}
