import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    // Nền trắng tinh khôi, padding rộng rãi cho thoáng mắt
    <section id="hero" className="bg-white text-slate-900 pt-32 pb-24 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* NỘI DUNG BÊN TRÁI: Tập trung vào Typo */}
        <div className="flex-1 space-y-8">
          <div className="inline-block border-l-4 border-orange-500 pl-4 py-1">
            <p className="text-orange-600 font-bold uppercase tracking-[0.2em] text-xs">
              Hành trình đổi mới tương lai
            </p>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-slate-950">
            Chào mừng đến với <br />
            <span className="text-blue-700">Techworld Solutions</span>
          </h1>

          <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-xl">
            Chúng tôi là đơn vị tiên phong trong việc cung cấp các giải pháp 
            chuyển đổi số toàn diện cho doanh nghiệp Việt Nam, kết nối công nghệ và giá trị thực tế.
          </p>
          
          <div className="flex flex-wrap gap-5 pt-4">
            {/* Nút chính: Xanh đậm đồng bộ với màu Typo */}
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-200 flex items-center gap-2 group"
            >
              Liên hệ chúng tôi <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Nút phụ: Tối giản */}
            <button 
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 px-10 py-4 rounded-xl font-bold transition-all"
            >
              Khám phá giải pháp
            </button>
          </div>
        </div>

        {/* HÌNH ẢNH BÊN PHẢI: Một tấm ảnh duy nhất, không decor rườm rà */}
        <div className="flex-1 w-full max-w-2xl relative">
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 border-8 border-slate-50">
            {/* Ảnh thể hiện sự hợp tác, kết nối doanh nghiệp sạch sẽ */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Techworld Solutions Teamwork" 
              className="w-full h-[550px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          {/* Một chi tiết nhỏ để tạo điểm nhấn không bị đơn điệu */}
          <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 hidden md:block">
            <p className="text-blue-700 font-black text-3xl leading-none">15+</p>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Năm kinh nghiệm</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;