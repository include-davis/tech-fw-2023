import Skills from '@/components/personal/skillset';
import About from '@/components/personal/about';
import Footer from '@/components/personal/footer';
import Navbar from '@/components/personal/my-navbar';
import React from 'react';
import My_Navbar from '@/components/personal/my-navbar';

export default function Personal() {
  return (
    <div>
      <My_Navbar />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}
