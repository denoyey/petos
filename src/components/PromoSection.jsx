const PromoSection = () => {
  return (
    <section className="w-full py-12 md:py-20 bg-linear-to-br from-petos-orange to-petos-dark-orange text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      <div className="relative z-10 max-w-6xl mx-auto px-2 text-center">
        <div className="inline-block px-4 py-1.5 md:px-5 md:py-2 mb-6 md:mb-8 rounded-full bg-white/20 border border-white/40 text-white font-bold text-xs md:text-sm tracking-widest uppercase backdrop-blur-sm">
          Promo Terbatas
        </div>
        <h2 className="text-2xl md:text-5xl font-black mb-3 md:mb-6 tracking-tight leading-tight">
          Bebas Ongkir Sepuasnya!
        </h2>
        <p className="text-sm md:text-lg mb-6 md:mb-12 max-w-3xl mx-auto opacity-95 leading-relaxed font-medium px-2">
          Nikmati pengiriman gratis ke seluruh wilayah dengan minimal pembelian <span className="font-bold underline underline-offset-2 decoration-2">3 bungkus Petos</span>. Jangan sampai kehabisan, promo ini segera berakhir!
        </p>
        <a
          href="#order"
          className="flex items-center justify-center w-full max-w-[260px] sm:max-w-xs md:w-auto md:max-w-none md:inline-flex mx-auto px-6 md:px-8 py-3 md:py-4 text-sm md:text-base font-bold text-petos-brown bg-petos-light-cream rounded-full hover:bg-white hover:scale-105 transition-transform duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
        >
          Klaim Promo Sekarang
        </a>
      </div>
    </section>
  );
};
export default PromoSection;
