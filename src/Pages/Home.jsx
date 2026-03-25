import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import ProjectList from '../Components/ProjectList';
import ContactForm from '../Components/ContactForm';
import About from '../Components/About';
import Footer from '../Components/Footer';

const Home = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Tìm element có ID trùng với hash (ví dụ: #contact)
      const id = hash.replace('#', '');
      const element = document.getElementById(id);

      if (element) {
        // Delay 200ms để đảm bảo các component (Hero, About...) đã render xong chiều cao
        const timer = setTimeout(() => {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start' // Cuộn cho cái ID nằm ngay đầu trình duyệt
          });
        }, 200);

        return () => clearTimeout(timer);
      }
    } else {
      // Nếu không có hash thì cuộn lên đầu trang (cho chắc)
      window.scrollTo(0, 0);
    }
  }, [hash]); // Chạy lại mỗi khi cái hash trên URL thay đổi

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <ProjectList />
      </div>
      {/* Quan trọng: Đảm bảo component ContactForm có id="contact" bên trong nó 
          hoặc bao nó lại bằng một thẻ div có id="contact" */}
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;