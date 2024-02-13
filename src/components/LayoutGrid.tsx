"use client";

import { cn } from "../utils/cn";

export const LayoutGrid = () => {
  const cards = [
    {
      id: 1,
      className: "col-span-1 md:col-span-3",
      thumbnail: "/surveyapp.png",
      desc: (
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
      className: "col-span-1 md:col-span-4",
      thumbnail: "/mimiblooms.png",
      desc: (
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
      className: "col-span-1 md:col-span-2",
      thumbnail:
        "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "in progress.",
    },
  ];

  return (
    <div
      className="w-full h-full py-10 grid grid-cols-1 md:grid-cols-6 mx-auto gap-5"
      id="work"
    >
      {cards.map((card, i) => (
        <div
          key={i}
          className={cn(card.className, " bg-neutral-800 rounded-xl w-full")}
        >
          <div className="p-10 flex flex-col items-center text-center">
            <div className="w-fit h-fit">
              <img src={card.thumbnail} className="rounded-xl" />
            </div>
            <div className="pt-4 text-neutral-400 text-pretty">{card.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
