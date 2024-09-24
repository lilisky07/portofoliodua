import React from 'react';
import Navbar from '../organisms/Navbar';
import Header from '../organisms/Header/Header';
import Skills from '../../Components/organisms/Skills/Skills';
import LatestWork from '../../Components/organisms/LatesWork/LatestWork';
import TestimonialList from '../../Components/organisms/Testimonial/TestimonialList';
import Footer from '../organisms/Footer/Footer';

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
