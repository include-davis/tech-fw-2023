import About from '@/components/personal/about';
import Skills from '@/components/personal/skillset';
import Footer from '@/components/personal/footer';
import Nav from '@/components/personal/nav';

import React from 'react';

export default function Personal() {
  return (
    <div>
      <Nav> </Nav> 
      <About></About>
      <Skills></Skills>
      <Footer></Footer>
      
    </div>

  );
}
