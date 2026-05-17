const BrandOverlay = () => {
  return (
    <div className="absolute bottom-12 left-12 z-20 max-w-md">
      <div className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl">
        <h2 className="text-4xl font-black tracking-tight text-white mb-4 leading-none">
          The Art of Fine Baking
        </h2>
        <p className="text-white/90 text-lg">
          Indulge in our collection of handcrafted delicacies, where every bite
          is a celebration of flavor and tradition.
        </p>
      </div>
    </div>
  );
};

export default BrandOverlay;
