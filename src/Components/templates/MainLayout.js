import React from 'react';
import Navbar from '../organisms/Navbar';
import Header from '../organisms/Header';
import Skills from '../organisms/Skills';
import LatestWork from '../organisms/LatestWork';
import TestimonialList from '../organisms/TestimonialList';
import Footer from '../organisms/Footer';

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* Navbar di bagian atas */}
      <Navbar />

      {/* Konten halaman */}
      <main>
       <Header/>
       <Skills/>
       <LatestWork/>
       <TestimonialList/>
      </main>

      {/* Footer di bagian bawah (opsional) */}
      <Footer/>
    </div>
  );
};

export default MainLayout;
