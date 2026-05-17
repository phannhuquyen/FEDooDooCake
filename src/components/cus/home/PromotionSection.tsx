const PromotionSection = () => {
  return (
    <section className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 p-8 md:p-12 text-center    mb-8  ">
      {/* icon */}
      <div className="w-20 h-20 mx-auto rounded-full bg-highlight/10 flex items-center justify-center  text-4xl        ">
        🎁
      </div>

      {/* title */}
      <h2 className=" mt-6 text-2xl md:text-3xl font-bold text-gray-800 ">
        Chưa có mã giảm giá nào
      </h2>

      {/* desc */}
      <p className=" mt-3 text-gray-500 max-w-2xl mx-auto leading-relaxed ">
        Hiện tại cửa hàng chưa triển khai chương trình ưu đãi hoặc mã giảm giá.
        Những khuyến mãi hấp dẫn sẽ sớm được cập nhật trong thời gian tới ✨
      </p>

      {/* note */}
      <div className=" mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-gray-200 text-sm text-gray-600 shadow-sm ">
        🔔 Hãy quay lại sau để nhận các ưu đãi mới nhất
      </div>
    </section>
  );
};

export default PromotionSection;
