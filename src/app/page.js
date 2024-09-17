import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Personal from "@/components/Personal";
import React from "react";

export default function page() {
  return (
    <div className="bg-black ">
      <Hero />
      <Personal />
      <Footer />
    </div>
  );
}
