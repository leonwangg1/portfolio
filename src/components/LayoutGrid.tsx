"use client";

import { cn } from "../utils/cn";
import "../App.css";

export const LayoutGrid = () => {
  const cards = [
    {
      id: 1,
      className: "col-span-1 md:col-span-3",
      thumbnail: "/surveyapp.png",
      desc: (
        <a>
          <p>
            <strong>LEA Career Preference Tool.</strong> A web application to
            identify potential career pathways for Defence personel based on
            their input.
          </p>
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
    },
    {
      id: 2,
      className: "col-span-1 md:col-span-3",
      thumbnail: "/wang.png",
      desc: (
        <a href="https://www.wangs-therapy.com" target="_blank">
          <p>
            <strong>Wang's Natural Therapy Centre.</strong> Web design and
            development project for local acupuncture clinic.
          </p>
        </a>
      ),
      fulldesc: (
        <p>
          <strong>Wang's Natural Therapy Centre.</strong> Web design and
          development project for local acupuncture clinic. The site offers a
          user-friendly and serene design with easy onlie access to the clinic's
          acupuncture and holistic services.
        </p>
      ),
    },
    {
      id: 3,
      className: "col-span-1 md:col-span-3",
      thumbnail: "/mimiblooms.png",
      desc: (
        <a href="https://www.mimiblooms.store" target="_blank">
          <p>
            <strong>MimiBlooms.</strong> An ecommerce platform developed with
            Medusa.js and Next.js with auth and secure payment processing.
          </p>
        </a>
      ),
      fulldesc: (
        <p>
          <strong>MimiBlooms.</strong> An ecommerce platform which features a
          CMS for a tailored shopping experience, an admin dashboard, advanced
          product filtering options, and a custom shopping cart integrated with
          Stripe for secure payment processing.
        </p>
      ),
    },
    {
      id: 4,
      className: "col-span-1 md:col-span-3",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "in progress.",
    },
  ];

  return (
    <div className="w-full h-full py-5 grid grid-cols-1 md:grid-cols-6 mx-auto gap-5">
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(
            card.className,
            "bg-neutral-800 rounded-xl w-full h-full relative cardanimate"
          )}
        >
          <div className="flex flex-col items-center text-center w-fit h-full relative">
            <img src={card.thumbnail} className="rounded-xl" />
            <div
              className="absolute top-0 left-0 right-0 bottom-0 flex items-end justify-center p-2 md:p-4 rounded-xl"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.85) 0%, #0003 60%)",
              }}
            >
              <span className="text-neutral-300 text-pretty text-xs md:text-lg z-10 cursor-pointer">
                {card.desc}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
