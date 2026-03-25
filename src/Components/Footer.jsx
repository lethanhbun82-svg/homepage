import React from 'react';

const Footer = () => {
  // Hàm cuộn mượt đến các section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 px-6 mt-20">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 border-b border-slate-800 pb-12">
          
          {/* CỘT 1: THÔNG TIN LIÊN HỆ */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider uppercase border-l-4 border-orange-500 pl-3 text-white">
              TECHWORLD SOLUTIONS
            </h3>
            <div className="space-y-5 text-slate-400 text-sm">
              <div>
                <p className="font-bold text-white uppercase text-xs mb-1 tracking-widest">Địa chỉ trụ sở:</p>
                <p>28A Trần Hưng Đạo, Hoàn Kiếm, Hà Nội</p>
                <p>33 Lê Duẩn, Quận 1, TP. Hồ Chí Minh</p>
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs mb-1 tracking-widest">Liên hệ trực tiếp:</p>
                <p>Hotline: (+84) 28 3554 2545</p>
                <p className="text-orange-500 font-bold">Email: bdm@techsolutions.vn</p>
              </div>
            </div>
          </div>

          {/* CỘT 2: ĐIỀU HƯỚNG NHANH */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider uppercase text-white">KHÁM PHÁ</h3>
            <ul className="space-y-4 text-sm text-slate-400 font-bold uppercase tracking-tight">
              <li>
                <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-orange-500 transition cursor-pointer">
                  Trang chủ
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="hover:text-orange-500 transition cursor-pointer">
                  Về chúng tôi
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="hover:text-orange-500 transition cursor-pointer">
                  Dự án tiêu biểu
                </button>
              </li>
            </ul>
          </div>

          {/* CỘT 3: GIỚI THIỆU TÓM TẮT */}
          <div>
            <h3 className="text-lg font-bold mb-6 tracking-wider uppercase text-white">VỀ TECHWORLD</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Chúng tôi là đơn vị tiên phong trong việc cung cấp các giải pháp chuyển đổi số toàn diện, 
              tối ưu hóa quy trình vận hành cho doanh nghiệp trên nền tảng công nghệ hiện đại nhất.
            </p>
            <div className="inline-block border border-slate-700 px-4 py-2 rounded text-[10px] font-bold text-slate-500 uppercase">
              Chất lượng • Uy tín • Sáng tạo
            </div>
          </div>
        </div>

        {/* BẢN QUYỀN DƯỚI CÙNG */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-600 font-bold uppercase tracking-[0.2em]">
          <p>© 2026 Techworld Solutions Vietnam. All Rights Reserved.</p>
          <div className="flex gap-8">
            <span className="cursor-help hover:text-white transition">Privacy Policy</span>
            <span className="cursor-help hover:text-white transition">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;