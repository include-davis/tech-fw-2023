import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import Prop from '@/components/week3/props';

import React from 'react';

const names = ["Emily", "Ryan"];
export default function Personal() {
  return (
    <div>
      {/* <Prop name="Emily" club="include"/>
      <Prop name="Ryan" club="include"/>
      <Prop name="Sam" club="include"/>
      <Prop name="Jay" club="include"/> */}

      {names.map((name) => {
          return <Prop name={name} club="include"/>;
        })}
      <Prop name="Jay"/>;



      {/* <About />
      <Skills />
      <Footer /> */}
    </div>
  );
}
