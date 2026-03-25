import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";

const Header = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* LOGO - ĐÃ BÓP NHỎ */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className="h-12 w-auto object-contain hover:opacity-80 transition-opacity" 
              /* h-12 là cao khoảng 48px, mày có thể chỉnh thành h-10 hoặc h-14 tùy ý */
            />
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className="hidden md:flex gap-8 font-semibold text-slate-600 text-sm uppercase tracking-wide">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="hover:text-blue-600 transition">
            Trang chủ
          </button>
          <button onClick={() => scrollToSection('about')} className="hover:text-blue-600 transition">
            Về chúng tôi
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-blue-600 transition">
            Dự án
          </button>
        </nav>

        {/* NÚT LIÊN HỆ */}
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-blue-600 text-white px-8 py-2.5 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-slate-900 transition-all shadow-lg shadow-blue-100"
        >
          Liên hệ
        </button>

      </div>
    </header>
  );
};

export default Header;