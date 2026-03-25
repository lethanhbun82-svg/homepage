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
    <section id="contact" className="py-24 bg-slate-50 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-100">
          
          {/* Thông tin liên hệ bên trái */}
          <div className="space-y-8">
            <div className="space-y-4">
                <h2 className="text-4xl font-black uppercase tracking-tight text-slate-900 leading-tight">
                    Liên hệ với <br/><span className="text-blue-600">Chúng tôi</span>
                </h2>
                <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
                Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp tối ưu nhất cho bài toán chuyển đổi số của doanh nghiệp bạn.
            </p>
            
            <div className="space-y-6 pt-6">
              <div className="flex items-center gap-5 text-slate-700 font-semibold group">
                <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <Phone size={24} />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Hotline tư vấn</p>
                    <span className="text-lg">(+84) 28 3554 2545</span>
                </div>
              </div>

              <div className="flex items-center gap-5 text-slate-700 font-semibold group">
                <div className="p-4 bg-blue-50 rounded-2xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <Mail size={24} />
                </div>
                <div>
                    <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">Email phòng kinh doanh</p>
                    <span className="text-lg">bdm@techsolutions.vn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form liên hệ bên phải */}
          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-5 bg-slate-50 p-8 md:p-10 rounded-[2rem] border border-slate-100 shadow-inner">
              <div className="grid md:grid-cols-1 gap-5">
                  <input 
                    required name="name" value={formData.name} onChange={handleChange}
                    type="text" placeholder="Họ và tên khách hàng *" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all shadow-sm" 
                  />
                  <input 
                    required name="email" value={formData.email} onChange={handleChange}
                    type="email" placeholder="Địa chỉ Email *" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all shadow-sm" 
                  />
                  <input 
                    required name="phone" value={formData.phone} onChange={handleChange}
                    type="tel" placeholder="Số điện thoại liên lạc *" 
                    className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-900 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all shadow-sm" 
                  />
              </div>
              
              <textarea 
                required name="message" value={formData.message} onChange={handleChange}
                placeholder="Yêu cầu cụ thể của doanh nghiệp..." 
                className="w-full bg-white border border-slate-200 rounded-xl px-6 py-4 text-slate-900 h-36 focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 outline-none transition-all shadow-sm resize-none"
              ></textarea>
              
              <button 
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-slate-900 text-white py-5 rounded-xl font-bold uppercase tracking-widest transition-all shadow-lg shadow-blue-200 flex items-center justify-center gap-3 disabled:bg-slate-300"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Send size={18} />}
                Gửi yêu cầu tư vấn
              </button>
              <p className="text-[10px] text-center text-slate-400 uppercase tracking-tight font-medium italic">
                * Chúng tôi cam kết bảo mật thông tin khách hàng tuyệt đối
              </p>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center space-y-6 bg-white p-12 rounded-[2rem] text-center">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-2">
                    <CheckCircle size={48} />
                </div>
                <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-slate-900 italic uppercase">Yêu cầu đã được ghi nhận</h3>
                    <p className="text-slate-500 font-medium">Cảm ơn Quý đối tác. Đội ngũ tư vấn sẽ liên hệ lại trong vòng 24 giờ làm việc.</p>
                </div>
                <button 
                    onClick={() => setSuccess(false)} 
                    className="text-blue-600 font-bold border-b border-blue-600 pb-1 hover:text-slate-900 hover:border-slate-900 transition-all uppercase text-xs tracking-widest"
                >
                    Gửi yêu cầu mới
                </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;