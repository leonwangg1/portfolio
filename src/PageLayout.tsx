import React from "react";

import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-8 px-10 lg:px-64">
      <header className="mb-60 z-50">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default PageLayout;
