import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Loader2, Globe } from 'lucide-react';
import { ProjectService } from '../Services/api';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchProjectDetail();
    }, [id]);

    const fetchProjectDetail = async () => {
        setLoading(true);
        try {
            const res = await ProjectService.getAll();
            const projects = Array.isArray(res.data) ? res.data : (res.data?.data || []);
            const found = projects.find(p => String(p._id) === String(id));
            if (found) setProject(found);
        } catch (err) {
            console.error("Lỗi:", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <Loader2 className="animate-spin text-blue-600" size={32} />
        </div>
    );

    if (!project) return null;

    return (
        <div className="bg-slate-50/30 min-h-screen w-full">
            {/* Navbar - Container 1200px chuẩn */}
            <nav className="w-full sticky top-0 bg-white/80 backdrop-blur-md z-[100] border-b border-slate-100">
                <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
                    <Link to="/" className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold text-sm transition-all">
                        <ArrowLeft size={18} /> Quay lại trang chủ
                    </Link>
                </div>
            </nav>

            {/* PHẦN NÀY LÀ QUAN TRỌNG NHẤT: Container ép ở giữa */}
            <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 bg-white shadow-sm border-x border-slate-50 min-h-screen">

                {/* Header Section */}
                <header className="mb-12">
                    <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-8 tracking-tight text-center md:text-left">
                        {project.Name}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 py-6 border-y border-slate-100 mb-12">
                        <div className="flex-1">
                            <p className="text-lg text-slate-500 leading-relaxed italic border-l-4 border-blue-600 pl-6">
                                {project.short_description}
                            </p>
                        </div>

                        {project.view_link && (
                            <div className="flex flex-col items-center gap-3">
                                <a
                                    href={project.view_link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg flex items-center gap-3 w-full justify-center"
                                >
                                    <Globe size={18} /> Xem dự án
                                </a>
                                <span className="text-[10px] font-bold text-green-600 uppercase tracking-widest">● System Live</span>
                            </div>
                        )}
                    </div>
                </header>

                {/* Hình ảnh chính - Khóa kích thước để không tràn */}
                <div className="mb-16 rounded-3xl overflow-hidden shadow-xl border border-slate-100 bg-slate-50">
                    <img
                        src={project.upload_preset || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026"}
                        alt={project.Name}
                        className="w-full h-auto max-h-[600px] object-cover"
                    />
                </div>

                {/* Nội dung chi tiết - Dùng prose để quản lý text từ Mendix */}
                <div className="prose prose-slate prose-lg max-w-none px-2">
                    <div
                        className="blog-content text-slate-700 leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                    />
                </div>

                {/* Footer tối giản - Đúng style TechWorld Trắng */}
                <footer className="mt-40 pt-16 border-t border-slate-100 text-center space-y-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic">TECHWORLD</h3>
                    </div>

                    <div className="flex flex-col items-center gap-6">
                        <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed font-medium">
                            Bạn có dự án tương tự? Liên hệ với chúng tôi để hiện thực hóa ý tưởng của bạn.
                        </p>
                        <Link to="/#contact" className="inline-block border-2 border-slate-900 text-slate-900 px-10 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all">
                            Bắt đầu tư vấn ngay
                        </Link>
                    </div>
                </footer>
            </main>

            <style>{`
                /* Ép chặt các thành phần bên trong không bao giờ được tràn khỏi max-w-5xl */
                .blog-content { width: 100%; overflow-wrap: break-word; }
                .blog-content h2 { font-size: 2rem; font-weight: 800; color: #0f172a; margin: 3rem 0 1.5rem; }
                .blog-content p { font-size: 1.15rem; line-height: 1.8; margin-bottom: 1.5rem; }
                .blog-content ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1.5rem; }
                .blog-content img { border-radius: 1.5rem; margin: 2rem 0; max-width: 100% !important; height: auto !important; }
                
                /* Fix cho các bảng hoặc code nếu có */
                .blog-content table { width: 100%; overflow-x: auto; display: block; }
            `}</style>
        </div>
    );
};

export default ProjectDetail;