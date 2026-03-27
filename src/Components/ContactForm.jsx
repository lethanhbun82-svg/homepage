import React, { useState } from 'react';
import { Mail, Phone, Send, Loader2, CheckCircle } from 'lucide-react';
import { ContactService } from '../Services/api'; 

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await ContactService.submit(formData);
      setSuccess(true);
      setFormData({ name: '', phone: '', message: '', email: '' });
    } catch (error) {
      console.error("API Error:", error);
      alert("Hệ thống đang bận, vui lòng thử lại sau hoặc liên hệ trực tiếp qua hotline.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-slate-50 px-4 sm:px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 bg-white p-6 sm:p-10 lg:p-16 rounded-2xl lg:rounded-[3rem] shadow-xl shadow-slate-200/50 border border-slate-100">
          
          {/* LEFT */}
          <div className="space-y-6 sm:space-y-8">
            
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                Liên hệ với <br/>
                <span className="text-blue-600">Chúng tôi</span>
              </h2>
              <div className="h-1 w-16 sm:w-20 bg-blue-600 rounded-full"></div>
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tối ưu nhất cho bài toán chuyển đổi số của doanh nghiệp bạn.
            </p>
            
            <div className="space-y-5 sm:space-y-6 pt-2 sm:pt-4">
              
              {/* PHONE */}
              <div className="flex items-start gap-4 text-slate-700 font-semibold group">
                <div className="p-3 sm:p-4 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                    Hotline tư vấn
                  </p>
                  <span className="text-base sm:text-lg break-all">
                    (+84) 28 3554 2545
                  </span>
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex items-start gap-4 text-slate-700 font-semibold group">
                <div className="p-3 sm:p-4 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">
                    Email phòng kinh doanh
                  </p>
                  <span className="text-base sm:text-lg break-all">
                    bdm@techsolutions.vn
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT */}
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 bg-slate-50 p-5 sm:p-8 lg:p-10 rounded-2xl border border-slate-100 shadow-inner">
              
              <div className="space-y-4">
                <input 
                  required name="name" value={formData.name} onChange={handleChange}
                  type="text" placeholder="Họ và tên khách hàng *" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-slate-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all shadow-sm" 
                />
                
                <input 
                  required name="email" value={formData.email} onChange={handleChange}
                  type="email" placeholder="Địa chỉ Email *" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-slate-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all shadow-sm" 
                />
                
                <input 
                  required name="phone" value={formData.phone} onChange={handleChange}
                  type="tel" placeholder="Số điện thoại liên lạc *" 
                  className="w-full bg-white border border-slate-200 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-slate-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all shadow-sm" 
                />
              </div>
              
              <textarea 
                required name="message" value={formData.message} onChange={handleChange}
                placeholder="Yêu cầu cụ thể của doanh nghiệp..." 
                className="w-full bg-white border border-slate-200 rounded-xl px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-slate-900 h-28 sm:h-36 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all shadow-sm resize-none"
              ></textarea>
              
              <button 
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-slate-900 text-white py-4 sm:py-5 rounded-xl text-sm sm:text-base font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-2 sm:gap-3 disabled:bg-slate-300"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                Gửi yêu cầu
              </button>

              <p className="text-[9px] sm:text-[10px] text-center text-slate-400 uppercase tracking-tight font-medium italic">
                * Chúng tôi cam kết bảo mật thông tin khách hàng tuyệt đối
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-5 bg-white p-8 sm:p-12 rounded-2xl text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center">
                <CheckCircle size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-2xl font-bold text-slate-900 uppercase">
                  Yêu cầu đã được ghi nhận
                </h3>
                <p className="text-sm sm:text-base text-slate-500">
                  Cảm ơn Quý đối tác. Chúng tôi sẽ liên hệ trong vòng 24h.
                </p>
              </div>
              <button 
                onClick={() => setSuccess(false)} 
                className="text-blue-600 font-bold border-b border-blue-600 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all uppercase text-xs tracking-widest"
              >
                Gửi lại
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Contact;