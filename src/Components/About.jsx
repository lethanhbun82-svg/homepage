import React from 'react';
import { Database, Search, MessageSquare, Settings } from 'lucide-react';

// IMPORT ẢNH TỪ THƯ MỤC ASSETS
import erpImage from "../assets/about/erp.png";
import lowcodeImage from "../assets/about/lowcode.png";
import chamsocImage from "../assets/about/chamsoc.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* KHU VỰC 1: 3 CARD DỊCH VỤ PHÍA TRÊN */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          
          {/* Card 1 - ERP */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:shadow-xl transition-all">
            <div className="w-full h-48 bg-slate-100 rounded-xl mb-6 overflow-hidden">
              <img 
                src={erpImage} 
                alt="ERP" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Triển khai ERP</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Chúng tôi cung cấp dịch vụ triển khai ERP phù hợp theo nhu cầu doanh nghiệp, giúp tối ưu quy trình vận hành và nâng cao hiệu quả kinh doanh.
            </p>
          </div>

          {/* Card 2 - Low Code */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:shadow-xl transition-all">
            <div className="w-full h-48 bg-slate-100 rounded-xl mb-6 overflow-hidden">
              <img 
                src={lowcodeImage} 
                alt="Low Code" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Mendix Low-Code/No-Code</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Chúng tôi phát triển ứng dụng nhanh chóng với nền tảng Mendix - giúp rút ngắn thời gian và tiết kiệm chi phí phát triển.
            </p>
          </div>

          {/* Card 3 - Chăm sóc khách hàng */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 text-center flex flex-col items-center group hover:shadow-xl transition-all">
            <div className="w-full h-48 bg-slate-100 rounded-xl mb-6 overflow-hidden">
              <img 
                src={chamsocImage} 
                alt="Support" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Chăm Sóc Khách Hàng</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Giải pháp chăm sóc khách hàng chuyên biệt nhằm đảm bảo hỗ trợ nhanh chóng, hiệu quả và nâng cao sự hài lòng.
            </p>
          </div>
        </div>

        {/* KHU VỰC 2: 15 NĂM KINH NGHIỆM */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* LEFT */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-tight">
              15 Năm Kinh Nghiệm
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              Đội ngũ tư vấn của chúng tôi sở hữu hơn 15 năm kinh nghiệm trong việc cung cấp các giải pháp chuyển đổi số phù hợp theo nhu cầu doanh nghiệp. Chúng tôi chuyên triển khai hệ thống quản trị doanh nghiệp, tối ưu quy trình kinh doanh và thúc đẩy đổi mới thông qua các công nghệ đã được kiểm chứng.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100">
              <Database className="text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2 italic">Tư vấn doanh nghiệp</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Đánh giá nhu cầu và xây dựng chiến lược phù hợp nhằm nâng cao hiệu quả vận hành và tối ưu ROI.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100">
              <Search className="text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2 italic">Low Code / No Code</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Sử dụng Mendix và các công cụ khác để nhanh chóng tạo ra các ứng dụng tùy chỉnh phù hợp.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100">
              <MessageSquare className="text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2 italic">Chăm Sóc Khách Hàng</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Đặt trải nghiệm khách hàng lên hàng đầu, triển khai quy trình hỗ trợ phản hồi nhanh chóng.
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-sm border border-slate-100">
              <Settings className="text-blue-600 mb-4" size={32} />
              <h4 className="font-bold text-slate-900 mb-2 italic">Tư vấn giải pháp tài chính</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Cung cấp dịch vụ chuyên sâu về tích hợp hệ thống, đảm bảo độ chính xác và tuân thủ quy định.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;