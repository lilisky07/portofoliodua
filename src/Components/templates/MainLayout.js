import React from 'react';
import Navbar from '../organisms/Navbar';
import Header from '../organisms/Header';
import Skills from '../organisms/Skills';
import LatestWork from '../organisms/LatestWork';

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
      </main>

      {/* Footer di bagian bawah (opsional) */}
    </div>
  );
};

export default MainLayout;
