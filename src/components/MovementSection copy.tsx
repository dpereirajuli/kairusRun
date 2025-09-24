const MovementSection = () => {
  return (
    <section 
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: 'url(/fundo.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
          <span className="text-white block sm:inline">CORPO EM </span>
          <span className="text-yellow-400 block sm:inline">MOVIMENTO</span>
        </h2>
      </div>
      
    </section>
  );
};

export default MovementSection;
