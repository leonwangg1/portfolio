"use client";

import "../App.css";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

export const LayoutGrid = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: {
    id: number;
    className: string;
    thumbnail: string;
    desc: string | JSX.Element;
  };
}

const Card = ({ card }: CardProps) => {
  return (
    <div
      key={card.id}
      className="group relative lg:h-[600px] lg:w-[600px] h-[400px] w-[280px] overflow-hidden bg-neutral-200 rounded-lg "
    >
      <div
        style={{
          backgroundImage: `url(${card.thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-end">
        <p className="p-8 text-sm font-black uppercase">{card.desc}</p>
      </div>
    </div>
  );
};

const cards = [
  {
    id: 1,
    className: "col-span-1 md:col-span-3",
    thumbnail: "/surveyapp.png",
    desc: (
      <a>
        <strong>LEA Career Preference Tool.</strong> A web application to
        identify potential career pathways for Defence personel based on their
        input.
      </a>
    ),
    // fulldesc: (
    //   <p>
    //     <strong>The Land Engineering Agency Career Preference Tool.</strong> A
    //     web-based application with options for inputting preferences and
    //     experiences to allow Defence personel to explore potential career
    //     pathways.
    //   </p>
    // ),
  },
  {
    id: 2,
    className: "col-span-1 md:col-span-3",
    thumbnail: "/wang.png",
    desc: (
      <a href="https://www.wangs-therapy.com" target="_blank">
        <strong>Wang's Natural Therapy Centre.</strong> Web design and
        development project for local acupuncture clinic.
      </a>
    ),
    // fulldesc: (
    //   <p>
    //     <strong>Wang's Natural Therapy Centre.</strong> Web design and
    //     development project for local acupuncture clinic. The site offers a
    //     user-friendly and serene design with easy onlie access to the clinic's
    //     acupuncture and holistic services.
    //   </p>
    // ),
  },
  {
    id: 3,
    className: "col-span-1 md:col-span-3",
    thumbnail: "/mimiblooms.png",
    desc: (
      <a href="https://www.mimiblooms.store" target="_blank">
        <strong>MimiBlooms.</strong> An ecommerce platform developed with
        Medusa.js and Next.js with auth and secure payment processing.
      </a>
    ),
    // fulldesc: (
    //   <p>
    //     <strong>MimiBlooms.</strong> An ecommerce platform which features a CMS
    //     for a tailored shopping experience, an admin dashboard, advanced product
    //     filtering options, and a custom shopping cart integrated with Stripe for
    //     secure payment processing.
    //   </p>
    // ),
  },
  {
    id: 4,
    className: "col-span-1 md:col-span-3",
    thumbnail:
      "https://images.unsplash.com/photo-1475070929565-c985b496cb9f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    desc: "",
  },
];
