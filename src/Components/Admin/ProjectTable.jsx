import React, { useEffect, useState } from 'react';
import { ProjectService } from '../../Services/api'; // Check lại đường dẫn này
import { Edit2, Trash2, RefreshCw, Plus, Image as ImageIcon } from 'lucide-react';

const ProjectTable = ({ onEdit, onAddNew }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // --- HÀM LẤY DANH SÁCH TỪ MENDIX ---
  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await ProjectService.getAll();
      // Mendix trả về mảng object, ta lưu vào state
      setProjects(res.data || []);
      console.log("Danh sách dự án:", res.data);
    } catch (err) {
      console.error("Lỗi lấy danh sách:", err);
    } finally {
      setLoading(false);
    }
  };

  // Tự động chạy khi load trang
  useEffect(() => {
    fetchProjects();
  }, []);

  // Hàm xóa
  const handleDelete = async (id) => {
    if (window.confirm("Xóa dự án này nhé?")) {
      try {
        await ProjectService.delete(id);
        setProjects(projects.filter(p => (p._id || p.id) !== id));
      } catch (err) {
        alert("Lỗi xóa rồi!");
      }
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] shadow-sm border border-slate-100 overflow-hidden">
      {/* Header */}
      <div className="px-8 py-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/30">
        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight">DỰ ÁN CỦA TÔI</h3>
          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
            Tổng cộng: {projects.length} dự án
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={fetchProjects} className="p-3 text-slate-400 hover:text-blue-600 transition-all">
            <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
          </button>
          <button 
            onClick={onAddNew}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-sm flex items-center gap-2 shadow-lg shadow-blue-100 transition-all"
          >
            <Plus size={18} /> THÊM MỚI
          </button>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Dự án</th>
              <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest">Mô tả</th>
              <th className="px-8 py-4 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {loading ? (
              <tr><td colSpan="3" className="px-8 py-10 text-center text-slate-400">Đang tải dữ liệu từ Mendix...</td></tr>
            ) : projects.length === 0 ? (
              <tr><td colSpan="3" className="px-8 py-10 text-center text-slate-400">Chưa có dự án nào !</td></tr>
            ) : (
              projects.map((item) => (
                <tr key={item._id || item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-100 overflow-hidden border border-slate-100 flex-shrink-0">
                        {item.upload_preset ? (
                          <img src={item.upload_preset} className="w-full h-full object-cover" alt="" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-slate-300"><ImageIcon size={20}/></div>
                        )}
                      </div>
                      <span className="font-bold text-slate-900">{item.Name}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-sm text-slate-500 max-w-xs truncate">
                    {item.short_description}
                  </td>
                  <td className="px-8 py-5 text-right">
                    <div className="flex justify-end gap-2">
                      {/* KHI BẤM NÚT NÀY DỮ LIỆU SẼ NHẢY SANG MODAL */}
                      <button 
                        onClick={() => onEdit(item)} 
                        className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-white rounded-xl border border-transparent hover:border-slate-100 transition-all"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(item._id || item.id)}
                        className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-white rounded-xl border border-transparent hover:border-slate-100 transition-all"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectTable;