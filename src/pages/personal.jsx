import Skills from "@/components/personal/skillset";
import About from "@/components/personal/about";
import Footer from "@/components/personal/footer";
import Custom from "@/components/week3/custom";
import ExampleCarousel from "@/components/example/ExampleCarousel";
import My_Navbar from '@/components/personal/my-navbar';
import React from "react";

// To view Example Carousel, uncomment below
// To change what is being displayed, edit the contents of the array in data

// TODO for cohort: Make your own carousel component, import and render it here

export default function Personal() {
  return (
    <div>
      <My_Navbar />
      <Custom name="Emily" cities={['SF', 'Davis']} age="4" birthday="March" />
      <About />
      <Skills />
      {/* <ExampleCarousel data={['A', 'B', 'C']}/> */}
      <Footer />
    </div>
  );
}
