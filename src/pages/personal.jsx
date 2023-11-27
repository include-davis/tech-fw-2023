import Skills from "@/components/personal/skillset";
import About from "@/components/personal/about";
import Footer from "@/components/personal/footer";
import React from "react";
import NavBar from "@/components/personal/header";

export default function Personal() {
  return (
    <div>
      <NavBar></NavBar>
      <About></About>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}
