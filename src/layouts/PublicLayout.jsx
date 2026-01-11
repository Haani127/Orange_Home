import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { SocialSpeedDial } from "../components/SocialSpeedDial";

export function PublicLayout(props) {
  const { children } = props;

  return (
    <div className="overflow-hidden overscroll-none">
      <div className="absolute w-full z-30">
        <Header />
      </div>
      <div className="absolute w-full z-30">
        <SocialSpeedDial />
      </div>
      <div className="z-20 overflow-hidden">
        {children}
        <div className="">
          <Footer />
        </div>
      </div>
    </div>
  );
}
