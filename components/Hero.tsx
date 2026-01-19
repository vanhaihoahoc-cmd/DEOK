import React, { useState, useEffect } from 'react';

interface HeroProps {
  onStart: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStart }) => {
  const [showGuideModal, setShowGuideModal] = useState(false);
  
  const [counts, setCounts] = useState({
    luyenDe: 3562,
    huongDan: 890
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        luyenDe: prev.luyenDe + Math.floor(Math.random() * 7) - 3,
        huongDan: prev.huongDan + Math.floor(Math.random() * 3) - 1
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLuyenDeClick = () => {
    window.open("https://script.google.com/macros/s/AKfycbwpXBigG-9gdK3Jj23pP4o5_8GMnP-Ak3THOKF1XJr1I7-80hrGuhvqsQUVDevJ_ynw/exec", "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-20 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#B38728] drop-shadow-2xl uppercase tracking-tighter">
        ĐỀ THI THỬ TN THPT – 2026
      </h2>
      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-12 text-teal-300 uppercase tracking-[0.2em]">
        MÔN HÓA HỌC
      </h3>
      
      <div className="max-w-7xl mx-auto text-slate-300 text-sm md:text-xl font-medium mb-12 px-2">
        <p className="md:whitespace-nowrap">Giúp học sinh THPT học đúng trọng tâm – phát triển tư duy – tự tin chinh phục kỳ thi.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
        <div onClick={handleLuyenDeClick} className="cursor-pointer h-full">
          <FeatureCard icon="🌏" title="LUYỆN ĐỀ TRỰC TUYẾN" subtitle="Đề thi thử TN PTTH trên toàn quốc" desc="Làm bài trực tuyến tại hệ thống khảo thí quốc gia chính thức." visitors={counts.luyenDe} />
        </div>
        <div onClick={() => setShowGuideModal(true)} className="cursor-pointer h-full">
          <FeatureCard icon="🤖" title="CẨM NANG SỬ DỤNG" desc="Hướng dẫn quy trình làm bài và các quy định thi trực tuyến." visitors={counts.huongDan} />
        </div>
      </div>

      {showGuideModal && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center px-4 bg-black/95 backdrop-blur-xl overflow-y-auto py-10">
          <div className="max-w-4xl w-full bg-[#004d4d] border border-[#D4AF37]/30 rounded-[2.5rem] p-6 md:p-10 shadow-2xl relative text-left max-h-[90vh] overflow-y-auto custom-scrollbar">
            <button onClick={() => setShowGuideModal(false)} className="sticky top-0 self-end float-right -mt-2 -mr-2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-[#D4AF37] text-[#003d3d] z-20 font-black shadow-lg hover:rotate-90 transition-all">✕</button>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-10 uppercase tracking-widest border-b-4 border-[#D4AF37] pb-4 inline-block">2. LUYỆN ĐỀ TRỰC TUYẾN</h3>
            
            <div className="space-y-6 text-slate-200">
              <h4 className="text-xl font-black text-[#D4AF37] uppercase tracking-tight">Quy trình làm bài:</h4>
              <ul className="space-y-4 text-sm md:text-lg font-medium leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-black">9.</span>
                  <span>Nhấn LUYỆN ĐỀ TRỰC TUYẾN để vào danh sách đề thi.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-black">10.</span>
                  <span>Tại cổng Học Sinh: ghi họ tên, lớp. Mật khẩu:HS1234</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-black">11.</span>
                  <span>Chọn đề thi mong muốn và nhấn "Làm Bài".</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-black">12.</span>
                  <span>Hệ thống sẽ tự động đếm ngược thời gian. Hãy hoàn thành các câu hỏi trắc nghiệm trước khi hết giờ.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-black">13.</span>
                  <span>Sau khi nộp bài, hệ thống sẽ chấm điểm tức thì.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-black">14.</span>
                  <span>Học sinh xem được lỗi sai</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-black">15.</span>
                  <span>Có cảnh báo gian lận, Thí sinh vi phạm 3 lần sẻ loại ngay.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#D4AF37] font-black">16.</span>
                  <span>Thí sinh muốn xem lời giải chi tiết liên hệ zalo:0937648777</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const FeatureCard: React.FC<{icon: string, title: string, subtitle?: string, desc: string, visitors?: number}> = ({ icon, title, subtitle, desc, visitors }) => {
  return (
    <div className="p-4 md:p-5 h-full bg-[#004d4d]/60 border border-teal-500/20 rounded-[1.5rem] shadow-[0_8px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.7)] hover:-translate-y-2 transition-all duration-500 group flex flex-col items-center min-h-[220px] md:min-h-[240px] relative overflow-hidden backdrop-blur-md border-t-teal-400/20">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      {visitors !== undefined && (
        <div className="mb-2 px-2 py-0.5 bg-black/40 border border-teal-500/30 rounded-full flex items-center gap-1">
          <span className="w-1 h-1 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-[7px] md:text-[9px] font-bold text-teal-300 uppercase tracking-wider">Thí sinh: <span className="text-white">{visitors.toLocaleString()}</span></span>
        </div>
      )}
      <div className="text-3xl md:text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-700">{icon}</div>
      <h3 className="text-sm md:text-base font-black text-[#D4AF37] mb-1 uppercase tracking-tight text-center leading-tight group-hover:text-[#FCF6BA] transition-colors">{title}</h3>
      {subtitle && <p className="text-[7px] md:text-[8px] font-black text-teal-300 mb-2 px-1 italic text-center uppercase tracking-widest">{subtitle}</p>}
      <p className="text-slate-300 text-[8px] md:text-[10px] leading-snug mb-4 px-2 text-center font-medium opacity-80 line-clamp-2">{desc}</p>
      <div className="mt-auto px-4 py-1.5 bg-[#003d3d] border border-teal-500/30 text-[#D4AF37] rounded-full text-[8px] md:text-[10px] font-black uppercase tracking-[0.1em] shadow-lg group-hover:bg-[#D4AF37] group-hover:text-[#003d3d] transition-all duration-300">TRUY CẬP</div>
    </div>
  );
};

export default Hero;