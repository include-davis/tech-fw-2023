import Skills from "@/components/personal/skillset";
import Navbar from "@/components/personal/navbar";
import About from "@/components/personal/about";
import Footer from "@/components/personal/footer";
import React from "react";

export default function Personal() {
  return (
    <div>
      <Navbar />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
