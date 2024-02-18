"use client";

import { cn } from "../utils/cn";
import "../App.css";

const descStyle =
  "text-neutral-500 text-sm mt-1 lg:text-[1rem] capitalize body-font";

export const LayoutGrid = () => {
  const cards = [
    {
      id: 1,
      className: "cardscroll col-span-1 md:col-span-3",
      thumbnail: "/surveyapp.png",
      desc: (
        <a>
          <p className={descStyle}>LEA Career Preference Tool</p>
        </a>
      ),
      fulldesc: (
        <p>
          <strong>The Land Engineering Agency Career Preference Tool.</strong> A
          web-based application with options for inputting preferences and
          experiences to allow Defence personel to explore potential career
          pathways.
        </p>
      ),
      link: "",
    },
    {
      id: 2,
      className: "cardscroll col-span-1 md:col-span-3",
      thumbnail: "/wang.png",
      desc: <p className={descStyle}>Wang's Natural Therapy Centre</p>,
      fulldesc: (
        <p>
          <strong>Wang's Natural Therapy Centre.</strong> Web design and
          development project for local acupuncture clinic. The site offers a
          user-friendly and serene design with easy onlie access to the clinic's
          acupuncture and holistic services.
        </p>
      ),
      link: "https://www.wangs-therapy.com",
    },
    {
      id: 3,
      className: "cardscroll col-span-1 md:col-span-4",
      thumbnail: "/mimiblooms.png",
      desc: <p className={descStyle}>MimiBlooms Ecommerce Platform</p>,
      fulldesc: (
        <p>
          <strong>MimiBlooms.</strong> An ecommerce platform which features a
          CMS for a tailored shopping experience, an admin dashboard, advanced
          product filtering options, and a custom shopping cart integrated with
          Stripe for secure payment processing.
        </p>
      ),
      link: "https://mimiblooms.store/au",
    },
    {
      id: 4,
      className: "cardscroll col-span-1 md:col-span-2",
      thumbnail: "/mca.png",
      desc: "",
      link: "",
    },
  ];

  return (
    <div className="w-full h-full py-5 grid grid-cols-1 md:grid-cols-6 mx-auto gap-2">
      {cards.map((card, i) => (
        <div
          className={cn(
            card.className,
            "bg-[#19191a] rounded-xl w-full h-full relative cardanimate"
          )}
        >
          <div>
            <div
              key={i}
              className="flex flex-col items-top text-center w-fit h-full relative"
            >
              <img
                src={card.thumbnail}
                className="scale-[.90] p-5 cursor-pointer"
                onClick={() => {
                  if (typeof card.link === "string") {
                    window.location.href = card.link;
                  }
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
