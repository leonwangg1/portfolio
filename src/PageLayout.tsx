import React from "react";

import { Navbar } from "./components/Navbar";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-8 px-10 lg:px-40">
      <header className="mb-60 z-50">
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
